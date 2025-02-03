import useSWR from 'swr';
import { supabase } from '../services/supabaseClient'; // 导入已初始化的 supabase 客户端
import { Comment } from './types';  // 导入 Comment 类型

// SWR fetcher 函数，用来从 Supabase 获取评论数据
const fetcher = async (questionId: number) => {
  const { data, error } = await supabase
    .from('comment')  // 从 'comments' 表获取数据
    .select('*')       // 获取所有字段
    .eq('question_id', questionId)  // 根据 question_id 过滤评论
    .order('created_at', { ascending: false }); // 按照创建时间降序排列

  if (error) {
    throw error; // 如果有错误抛出错误
  }

  return data; // 返回数据
};

// getComments 函数，使用 SWR 获取评论数据
const getComment = (questionId: number) => {
  const { data, error, isValidating } = useSWR<Comment[]>(`comments-${questionId}`, () => fetcher(questionId)); // 使用 SWR 获取评论数据

  return {
    comments: data, // 返回获取到的评论数据
    loading: !data && !error, // 加载状态，数据未加载且没有错误时为 true
    error: error?.message || null, // 错误信息
    isValidating, // 是否正在重新验证数据
  };
};

export default getComment;
