import React from 'react';

// 定义 props 类型
interface BannerProps {
  title: string;
  name: string;
  isJoin: boolean;  // 用来判断用户是否加入
}

const style = {
  wrapper: 'mt-14 flex flex-col',
  bannerImage: 'h-52 relative',
  bannerContentWrapper: 'mx-auto max-w-5xl py-2',
  profileInfoWrapper: 'flex items-start space-x-4 pb-5',
  profilePicWrapper: `-mt-6 h-20 w-10 relative`,
  profilePic:
    'h-full w-full rounded-full border-4 border-white bg-white bg-cover object-contain',
  titleWrapper: 'mt-1',
  title: 'text-2xl font-bold text-[#D7DADC]',
  tag: 'pt-1 text-sm text-gray-400',
  joinButtonContainer: 'mt-1 flex items-center',
  joinedButton:
    'cursor-pointer rounded-full border border-gray-300 px-[1.6rem] py-1 text-center text-sm font-semibold',
  joinButton: 
    'cursor-pointer rounded-full border border-blue-500 px-[1.6rem] py-1 text-center text-sm font-semibold text-blue-500',
};

const Banner: React.FC<BannerProps> = ({ title, name, isJoin }) => {
  return (
    <div className={style.wrapper}>
      <div className="bg-[#1a1a1b]">
        <div className={style.bannerContentWrapper}>
          <div className={style.profileInfoWrapper}>
            {/* 标题和标签部分 */}
            <div className={style.titleWrapper}>
              <h1 className={style.title}>{title}</h1>
              <h2 className={style.tag}>r/{name}</h2>
            </div>
            {/* 加入按钮部分 */}
            <div className={style.joinButtonContainer}>
              <button className={isJoin ? style.joinedButton : style.joinButton}>
                {isJoin ? 'Joined' : 'Join'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
