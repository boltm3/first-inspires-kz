import React from "react";

interface InfoProps {
  author: string;
  date: string;
  subreddit: string;
}

const style = {
  profilepic: "h-4 w-4 rounded-full",
  wrapper: "flex items-center space-x-1 text-xs text-[#818384]",
  profilePicContainer: "flex items-center space-x-1",
  tag: "cursor-pointer text-xs font-semibold text-[#D7DADC] hover:underline",
  postedBy: "flex items-center space-x-1",
};

const Info: React.FC<InfoProps> = ({ author, date, subreddit }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.tag}>r/{subreddit}</div>
      <div>•</div>
      <div className={style.postedBy}>
        <span>Posted by {author}</span>
        <span>•</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default Info;
