import CryptoJS from "crypto-js";

// 设置密钥（16/24/32 字节）
const SECRET_KEY = "god-if-i-use-this-key-to-decrypt-the-url-i-voluntarily-withdraw-from-ftc-god"; // 请使用更安全的密钥

// AES 解密函数
export const decryptAES = (encryptedText) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedText, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8); // 转为 UTF-8 纯文本
  } catch (error) {
    console.error("decrypt fail des:", error);
    return null;
  }
};
