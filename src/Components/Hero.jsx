import portrait from "../assets/images/hero/Ragnar.jpg";
import arrow from "../assets/images/general/arrowDown.png";
import decoration from "../assets/images/hero/decoration.png";

export default function Hero() {
  return (
    <div className="relative px-6 text-center text-main pt-32">
      <div
        className="mx-auto w-44 relative mb-10 md:w-64
     after:absolute after:w-20 after:h-20 after:-bottom-3 after:-left-3 after:-z-10 after:border-solid after:border-2 after:border-main
     before:absolute before:w-20 before:h-20 before:-top-3 before:-right-3 before:-z-10 before:border-solid before:border-2 before:border-main
     "
      >
        <img src={portrait} alt="portrait" />
      </div>
      <p className="mb-8 sm:text-lg md:text-3xl">
        Bonjour, je suis <strong>Amine Kabol</strong>
      </p>
      <h1 className="font-lora text-4xl mb-12 max-w-xs mx-auto font-light sm:text 5xl sm:mb-14 sm:max-w-md md:text-6xl md:max-w-xl">Développeur <italic>React</italic> en quête de projets.</h1>

    <a
    className="group text-xs bg-main text-white inline-flex justify-center items-center py-4 px-6 mb-20 hover:bg-main-light duration-200 sm:text-sm md:text-base md:px-10"
    href="#">
      Mes compétences
      <img
      width={14}
      height={15}
      className="ml-4 h-2.5 group-hover:translate-y-0.5 duration-200"
      src={arrow} alt="" />
    </a>
    <img
    width={580}
    height={1255}
    className="absolute h-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-50"
    src={decoration} alt="" />
    </div>
  );
}
