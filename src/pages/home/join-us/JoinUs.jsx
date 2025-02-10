import StartButton from "./StartButton";
import Arrow from "./Arrow";

export default function JoinUs() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[303px] gap-6 text-center">
      <h1 className="text-black text-6xl font-bold font-['Montserrat']">
      Бізге қосылыңыз!
      </h1>
      
      <div className="flex flex-col items-center text-black text-2xl font-normal font-['Montserrat'] leading-10 tracking-tight">
      <span>FIRST Kazakhstan-ның бір бөлігі болыңыз.</span>
        <div className="flex items-center gap-0.5">
          {/* Arrow positioned absolutely to the left */}
          <div className="absolute  right-0 hidden lg:block transform scale-x-[-1]">
  <Arrow />
</div>

            
          <span>өз сапарыңызды </span>
          <StartButton />
        </div>
      </div>
    </div>
  );
}
