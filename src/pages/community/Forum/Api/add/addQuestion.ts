import { supabase } from '../../services/supabaseClient'; // 导入已初始化的 supabase 客户端 
// addQuestion 函数，用来插入一个新的问题数据
const addQuestion = async (user_id: number, title: string, content: string) => {
  const { data, error } = await supabase
    .from('question')  // 目标表格是 'question'
    .insert([
      {
        user_id,      // 用户 ID
        title,        // 问题标题
        content,      // 问题内容
        created_at: new Date().toISOString(),  // 当前时间
        updated_at: new Date().toISOString(),  // 当前时间
      }
    ])
    .single(); // 返回单条数据，确保只插入一条记录

  if (error) {
    throw error; // 如果插入时出现错误，抛出错误
  }

  return data; // 返回插入的数据
};

export default addQuestion;
