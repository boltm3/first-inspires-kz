import { supabase } from "@/pages/community/Forum/services/supabaseClient"; // 导入已初始化的 supabase 客户端

// 定义 Contact 类型
interface Contact {
  name: string;
  mail: string;
  message: string;
}

// 插入联系人信息到 contact 表的函数
const insertContact = async (contact: Contact): Promise<{ success: boolean; error?: string }> => {
  try {
    const { error } = await supabase
      .from('contact') // 指定表名
      .insert([contact]); // 插入一条记录

    if (error) {
      throw error; // 如果插入失败，抛出错误
    }

    return { success: true }; // 插入成功，返回成功状态
  } catch (err: unknown) {
    // 捕获错误并返回错误消息
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return { success: false, error: errorMessage };
  }
};

export default insertContact;
