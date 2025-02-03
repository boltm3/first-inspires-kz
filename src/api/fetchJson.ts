// api.ts
import { JSON_PATHS } from '@/jsonPaths';

// fetchJsonData 函数用于从指定的 JSON 文件中获取数据。
// fileName: 需要加载的 JSON 文件的名称，必须是 JSON_PATHS 对象的一个键。
// extraPath: 可选参数，如果提供，则将其拼接到文件路径的末尾，用于访问嵌套的 JSON 文件。
// 返回值是一个 Promise，解析后返回获取到的 JSON 数据，若失败则返回一个空数组。

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchJsonData = async (fileName: keyof typeof JSON_PATHS, extraPath?: string): Promise<any> => {
  // 从 JSON_PATHS 对象中获取基本的文件路径
  let filePath = JSON_PATHS[fileName];

  // 如果提供了 extraPath 参数，则将其与文件路径拼接，形成完整的文件路径。
  if (extraPath) {
    filePath = `${filePath}/${extraPath}.json`;  // 拼接后的路径用于获取具体的 JSON 数据
  }

  try {
    // 使用 fetch API 向拼接后的文件路径发起请求
    const response = await fetch(filePath);

    // 如果响应的状态码不是 2xx 范围内，抛出一个错误
    if (!response.ok) {
      throw new Error(`Error fetching ${filePath}`);
    }

    // 如果响应成功，则解析返回的 JSON 数据
    return await response.json();
  } catch (error) {
    // 如果请求失败或发生错误，捕获并输出错误信息
    console.error(error);

    // 默认情况下，返回空数组作为 fallback 以确保调用者得到有效的返回值
    return [];  
  }
};
