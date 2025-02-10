import { useEffect } from "react";

const Forum = () => {
  useEffect(() => {
    window.location.href = "https://forum.firstinspireskz.org";
  }, []);

  return <div>Redirecting...</div>;
};

export default Forum;
