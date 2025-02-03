import useSWR from 'swr';
import { supabase } from '../services/supabaseClient'; // 导入已初始化的 supabase 客户端
import { Question } from './types';  // 导入 Question 类型

// SWR fetcher 函数，用来从 Supabase 获取数据
const fetcher = async () => {
  const { data, error } = await supabase
    .from('question')  // 从 'questions' 表获取数据
    .select('*')       // 获取所有字段
    .order('created_at', { ascending: false }) // 按照创建时间降序排列
    .limit(10);        // 获取最新的10条记录

  if (error) {
    throw error; // 如果有错误抛出错误
  }

  return data; // 返回数据
};

// getQuestions 函数，使用 SWR 获取数据
const getQuestions = () => {
  const { data, error, isValidating } = useSWR<Question[]>('questions', fetcher); // 使用 SWR 获取数据

  return {
    questions: data, // 返回获取到的问题数据
    loading: !data && !error, // 加载状态，数据未加载且没有错误时为 true
    error: error?.message || null, // 错误信息
    isValidating, // 是否正在重新验证数据
  };
};

export default getQuestions;
