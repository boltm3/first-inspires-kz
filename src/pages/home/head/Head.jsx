//import { useTranslation } from 'react-i18next';
export default function Head() {
 // const { t } = useTranslation(['home']);
  return (
    <div className="relative flex flex-col md:flex-col lg:flex-row items-center lg:items-start justify-between lg:px-6 py-12 lg:py-24">
      
{/* 文字内容区域 */}
<div className="flex flex-col items-center lg:items-start text-center lg:text-left z-20 lg:max-w-3xl">
  <h1 className="text-neutral-800 text-2xl mb-5 md:-mb-7 lg:mb-0 sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
  ҚАЗАҚСТАНДАҒЫ <span className="text-[#0066b3]">ҰЛТТЫҚ РОБОТТЫҚ ҚАУЫМДАСТЫҚ</span> ЖАСТАРДЫ <span className="text-[#0066b3]">БОЛАШАҚҚА</span> ДАЙЫНДАУ
  </h1>

  {/* 小屏幕（sm & md）：3.png */}
  <img
    className="block md:hidden w-full h-auto object-cover z-10"
    src="https://first.image.firstinspireskz.org/home-head-sm.png"
    alt="Robotics Community"
  />

  {/* 中等屏幕（md）：2.png */}
  <img
    className="hidden md:block lg:hidden w-full h-auto object-cover z-10"
    src="https://first.image.firstinspireskz.org/home-head-md.png"
    alt="Robotics Community"
  />

  <p className="mt-6 text-black text-base sm:text-lg md:text-xl leading-relaxed tracking-tight w-3/4 text-center md:text-left">
  Біз STEM білімін ілгерілететін әлемдегі жетекші жастарға қызмет көрсететін коммерциялық емес ұйымбыз. 1989 жылы өнертапқыш Дин Камен негізін қалаған FIRST® жасөспірімдерді робототехника бағдарламалары арқылы болашаққа дайындайды.
  </p>
</div>



      {/* 图片部分：不同屏幕显示不同图片 */}

      
      {/* 大屏幕（lg及以上）：1.png（绝对定位） */}
      <img
  className="hidden lg:block absolute top-1/2 right-0 w-[50%] h-auto object-cover z-10 -translate-y-1/2"
  src="https://first.image.firstinspireskz.org/home-head-lg.png"
  alt="Robotics Community"
/>

      
    </div>
  );
}
