import useSWR from 'swr';
import { supabase } from '../services/supabaseClient'; // 导入已初始化的 supabase 客户端
import { Community } from './types';  // 导入 Community 类型

// SWR fetcher 函数，用来从 Supabase 获取数据
const fetcher = async (id: number) => {
  const { data, error } = await supabase
    .from('community')  // 从 'community' 表获取数据
    .select('*')        // 获取所有字段
    .eq('id', id);      // 根据 id 进行筛选

  if (error) {
    throw error; // 如果有错误抛出错误
  }

  return data; // 返回数据
};

// getCommunity 函数，使用 SWR 获取数据
const getCommunityById = (id: number) => {
  const { data, error, isValidating } = useSWR<Community[]>(['community', id], () => fetcher(id)); // 使用 SWR 获取数据

  return {
    community: data ? data[0] : null, // 返回获取到的 community 数据
    loading: !data && !error, // 加载状态，数据未加载且没有错误时为 true
    error: error?.message || null, // 错误信息
    isValidating, // 是否正在重新验证数据
  };
};

export default getCommunityById;
