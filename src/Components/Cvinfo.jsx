export default function Cvinfo() {
  return (
    <div
      id="cv"
      className="px-6 pt-10 pb-16 sm:pt-16 sm:pb-32 md:pt-24 md:pb-44"
    >
      <p className="italic font-lora text-center text-gray-dark text-sm mb-4 md:text-lg">
        Découvrez moi à partir de mon CV
      </p>
      <h2
        className="text-main font-lora relative z-0 text-2xl w-fit mx-auto mb-7 sm:text-4xl sm:mb-10 md:text-5xl md:mb-12
      after:absolute after:w-full after:h-2 after:bottom-0 after:left-0 after:-z-10 after:bg-red-light sm:after:h-5 sm:after:-bottom-2
      "
      >
        Éducation & Expérience
      </h2>
      <p className="text-xs text-gray-dark leading-5 max-w-xs mx-auto text-center  sm:text-sm sm:leading-7 sm:max-w-sm lg:max-w-md">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
        deleniti minima dignissimos harum possimus non quibusdam nisi, aut,
        magni molestiae provident! Expedita fugit sunt odio!
      </p>

      {/* --------GRID-------- */}
      <div className="text-main mt-12 grid grid-cols-1 max-w-xl mx-auto md:mt-24 md:grid-cols-2">
        {/* --------- COL 1 avec les gros chiffres --------- */}
        <div className="font-lora text-center md:text-left">
          <div className="mb-10 md:mb-24">
            <p className="text-6xl font-medium mb-2 md:text-8xl md:mb-5">
              12<span className="text-3xl md:text-4xl">+</span>
            </p>
            <p className="text-xl md:max-w-[120px]">Années d'expériences</p>
          </div>
          <div className="mb-10 md:mb-24">
            <p className="text-6xl font-medium mb-2 md:text-8xl md:mb-5">36</p>
            <p className="text-xl md:max-w-[120px]">Projets réalisés</p>
          </div>
          <div className="mb-10 md:mb-24">
            <p className="text-6xl font-medium mb-2 md:text-8xl md:mb-5">
              94<span className="text-3xl md:text-4xl">%</span>
            </p>
            <p className="text-xl md:max-w-[120px]">Clients satisfaits</p>
          </div>
        </div>
        {/* --------- COL 2 avec les infos --------- */}
        <div className="mt-10 text-center md:mt-0 md:text-left">
          <span className="mb-8 inline-block">2023</span>
          <div className="max-w-[260px] mx-auto mb-10 md:max-w-full md:mx-0">
            <p className="font-lora text-xl mb-4">
              Diplôme de concepteur développeur d'applications web
            </p>
            <p className="text-sm text-gray-dark">Le wagon</p>
          </div>
          <span className="mb-8 inline-block">2023</span>
          <div className="max-w-[260px] mx-auto mb-10 md:max-w-full md:mx-0">
            <p className="font-lora text-xl mb-4">
              Diplôme de concepteur développeur d'applications web
            </p>
            <p className="text-sm text-gray-dark">Le wagon</p>
          </div>
          <span className="mb-8 inline-block">2023</span>
          <div className="max-w-[260px] mx-auto mb-10 md:max-w-full md:mx-0">
            <p className="font-lora text-xl mb-4">
              Diplôme de concepteur développeur d'applications web
            </p>
            <p className="text-sm text-gray-dark">Le wagon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
