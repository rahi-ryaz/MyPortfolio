import { HERO_CONTENT } from "../assets/Info";

const Hero = () => {
  return (

    <div className="flex flex-col items-center mx-4 sm:mx-8 md:mx-12 lg:mx-24 border-neutral-900 pb-6 sm:pb-8 lg:pb-10 pt-12 sm:pt-16 lg:pt-20">


<h3 className="font-medium pb-2 sm:pb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight lg:mt-16 ">
  Hello<span className="text-[#01D293]">_____</span> I&apos;m <span className="text-[#01D293]">Rahi</span>
</h3>

      <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-transparent">
        Full Stack Developer
      </span>


      <p className="text-base sm:text-lg md:text-xl lg:text-2xl my-2 sm:my-4 md:my-6 lg:my-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl py-4 sm:py-5 md:py-6 lg:py-8 font-light tracking-tight">
        {HERO_CONTENT}
      </p>

    </div>
  );
};

export default Hero;
