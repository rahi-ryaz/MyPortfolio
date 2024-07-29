import { HERO_CONTENT } from "../assets/Info";
//import profilePic from "../assets/Profile.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mx-24 border-neutral-900 pb-8 lg:mb-10 pt-16 lg:pt-20">

            <h3 className=" font-medium pb-4 text-3xl tracking-tight lg:mt-16 lg:text-5xl">
            I&apos;m Rahi
            </h3>

            <span className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>

            <p className=" text-lg my-2 max-w-3xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
         
    </div>
  );
};
export default Hero;

