//import { useTranslation } from 'react-i18next';
import FirstKazakhstanStats from "./Stats";
import Head from "./head/Head";
import Competitions from "./competitions/Competitions";
import Video from "./video/Video";
import JoinUs from "./join-us/JoinUs";
const HomePage = () => {
  
  //const { t, i18n } = useTranslation();
  return (
    <>
    {/*
    <h1 className="text-2xl font-bold">{t('')}</h1>
    <p>Current Language: {i18n.language}</p>
          <button className="m-2 p-2 bg-blue-500 text-white rounded" onClick={() => i18n.changeLanguage('en')}>
        English
      </button>
      <button className="m-2 p-2 bg-red-500 text-white rounded" onClick={() => i18n.changeLanguage('zh')}>
        中文
      </button>
      <button className="m-2 p-2 bg-green-500 text-white rounded" onClick={() => i18n.changeLanguage('kz')}>
        Қазақша
      </button>*/}
    <Head/>
     <FirstKazakhstanStats/>
     <Competitions/>
     <Video/>
     <JoinUs/>
    </>
  );
};

export default HomePage;
