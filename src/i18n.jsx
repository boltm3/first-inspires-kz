import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en", // 默认语言
    fallbackLng: 'en',
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json', // 动态加载
      },
      ns: ['common', 'home', 'about', 'contact','community','help','learn'], // 命名空间
    interpolation: {
      escapeValue: false, // React 已经转义，不需要额外处理
    },
    detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'], // 语言存储到 localStorage
      },
  });

export default i18n;
