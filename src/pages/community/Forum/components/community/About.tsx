import React from 'react';

// 定义 props 类型
interface AboutProps {
  title: string;        // 社区名称
  aboutText: string;    // 关于内容
  createdAt: string;    // 创建时间
  isJoined: boolean;    // 是否已加入
}

const style = {
  wrapper:
    'flex flex-col space-y-2 divide-y divide-[#343536] rounded border border-[#343536] bg-[#1a1a1b] p-4 text-gray-300',
  profileInfoContainer: 'flex items-center space-x-4',
  profilePicContainer: `relative h-12 w-12`,
  profilePic: 'object-contain rounded-full',
  aboutContent: 'py-2 text-sm',
  statsWrapper: 'flex items-center space-x-16',
  stat: 'flex flex-col',
  statTitle: 'text-xs',
  footer: 'flex flex-col space-y-4 pt-2',
  createdAt: 'text-sm font-light',
  joinedButton:
    'cursor-pointer rounded-full border border-gray-300 py-1 text-center text-sm font-semibold',
};

const About: React.FC<AboutProps> = ({ title, aboutText, createdAt, isJoined }) => {
  return (
    <div className={style.wrapper}>
      <div className='pb-2'>
        <div className={style.profileInfoContainer}>
          <p>{title}</p>
        </div>
        <p className={style.aboutContent}>{aboutText}</p>
      </div>

      <div className={style.footer}>
        <p className={style.createdAt}>Created {createdAt}</p>
        <div className={style.joinedButton}>
          {isJoined ? 'Joined' : 'Join'}
        </div>
      </div>
    </div>
  );
};

export default About;
