import { useState } from "react";
import SelectButton from "./SelectButton";
import Context from "./Context";

export default function Video() {
  const [selected, setSelected] = useState("students"); // Default selection is "students"

  // Define video URLs or sources for each selection
  const videos = {
    students: "https://www.youtube.com/embed/kDVGX9nXbCk", // Replace with the actual YouTube video ID
    parents: "https://www.youtube.com/embed/LGI2vMjdLbI", // Replace with the actual YouTube video ID
    educators: "https://www.youtube.com/embed/K_PuWjr7qcM", // Replace with the actual YouTube video ID
  };

  return (
    <div className="flex items-center justify-center gap-4 flex-col lg:flex-row mb-10">
      {/* The left-side div */}
      <div className="block lg:hidden">
        <Context />
      </div>
      <div className="w-[540px] h-[318px] bg-[#646464] flex justify-center items-center overflow-hidden">
  {/* The YouTube video iframe */}
  <iframe
    width="100%"
    height="100%"
    src={videos[selected]} // Dynamically change the video source based on selection
    title="Video"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

      {/* The right-side content with vertical layout */}
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="hidden lg:block">
          <Context />
        </div>
        <SelectButton selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
}
