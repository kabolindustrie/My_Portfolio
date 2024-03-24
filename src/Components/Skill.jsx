import JS from "../assets/images/skills/JS.png";
import React from "../assets/images/skills/React.png";

export default function Skill() {
  return (
    <div id="skills" className="bg-main px-4 pt-14 pb-20 md:pt-20 md:pb-24">
      <p className="italic font-lora text-center text-gray-light text-sm mb-4 md:text-lg">
        Voici mes Technologies préférées
      </p>
      <h2
        className="text-white font-lora relative z-0 text-2xl w-fit mx-auto mb-7 sm:text-4xl sm:mb-10 md:text-5xl md:mb-12
      after:absolute after:w-full after:h-2 after:bottom-0 after:left-0 after:-z-10 after:bg-main-light sm:after:h-5 sm:after:-bottom-2
      "
      >
        Mes compétences
      </h2>
      <p className="text-xs text-gray-light leading-5 max-w-xs mx-auto text-center mb-16 sm:text-sm sm:mb-6 sm:leading-7 sm:max-w-sm lg:max-w-md">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
        deleniti minima dignissimos harum possimus non quibusdam nisi, aut,
        magni molestiae provident! Expedita fugit sunt odio!
      </p>
      <div className="grid max-w-xs mx-auto grid-cols-2 sm:grid-cols-3 sm:max-w-md md:py-8 lg:flex lg:justify-center lg:max-w-none lg:items-center">
        <div className="text-white flex justify-center items-center flex-col flex-nowrap p-2 lg:mx-6">
          <img
            width={56}
            height={56}
            src={JS}
            alt="logo de JavaScript"
            className="h-10 mb-4 lg:h-12 xl:h-14"
          />
          <p className="italic font-lora text-xl md:text-2xl">Javascript</p>
        </div>
        <div className="text-white flex justify-center items-center flex-col flex-nowrap p-2 lg:mx-6">
          <img
            width={56}
            height={56}
            src={React}
            alt="logo de JavaScript"
            className="h-10 mb-4 lg:h-12 xl:h-14"
          />
          <p className="italic font-lora text-xl md:text-2xl">React</p>
        </div>
        <div className="text-white flex justify-center items-center flex-col flex-nowrap p-2 lg:mx-6">
          <img
            width={56}
            height={56}
            src={JS}
            alt="logo de JavaScript"
            className="h-10 mb-4 lg:h-12 xl:h-14"
          />
          <p className="italic font-lora text-xl md:text-2xl">Javascript</p>
        </div>
        <div className="text-white flex justify-center items-center flex-col flex-nowrap p-2 lg:mx-6">
          <img
            width={56}
            height={56}
            src={JS}
            alt="logo de JavaScript"
            className="h-10 mb-4 lg:h-12 xl:h-14"
          />
          <p className="italic font-lora text-xl md:text-2xl">Javascript</p>
        </div>
        <div className="text-white flex justify-center items-center flex-col flex-nowrap p-2 lg:mx-6">
          <img
            width={56}
            height={56}
            src={JS}
            alt="logo de JavaScript"
            className="h-10 mb-4 lg:h-12 xl:h-14"
          />
          <p className="italic font-lora text-xl md:text-2xl">Javascript</p>
        </div>
        <div className="text-white flex justify-center items-center flex-col flex-nowrap p-2 lg:mx-6">
          <img
            width={56}
            height={56}
            src={JS}
            alt="logo de JavaScript"
            className="h-10 mb-4 lg:h-12 xl:h-14"
          />
          <p className="italic font-lora text-xl md:text-2xl">Javascript</p>
        </div>

      </div>
    </div>
  );
}
