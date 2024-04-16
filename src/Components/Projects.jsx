import SweetShopmockup from "../assets/images/mockups/SweetShopMockup.png";
import Barbermockup from "../assets/images/mockups/Barbermockup.png";
import Boxymockup from "../assets/images/mockups/Boxymockup.png";
export default function Projects() {
  return (
    <div id="projects" className="pt-14 pb-20 px-4 sm:pb-28 sm:pt-20 lg:pb-72">
      <p className="italic font-lora text-center text-gray-dark text-sm mb-4 md:text-lg">
        Découvrez mon savoir faires
      </p>
      <h2
        className="text-main font-lora relative z-0 text-2xl w-fit mx-auto mb-7 sm:text-4xl sm:mb-10 md:text-5xl md:mb-12
      after:absolute after:w-full after:h-2 after:bottom-0 after:left-0 after:-z-10 after:bg-red-light sm:after:h-5 sm:after:-bottom-2
      "
      >
        Mes derniers projets
      </h2>
      <p className="text-xs text-gray-dark leading-5 max-w-xs mx-auto text-center  sm:text-sm sm:leading-7 sm:max-w-sm lg:max-w-md">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
        deleniti minima dignissimos harum possimus non quibusdam nisi, aut,
        magni molestiae provident! Expedita fugit sunt odio!
      </p>

      {/* ------GRID---- */}
      <div className="grid grid-cols-1 gap-12 mt-12 max-w-4xl mx-auto md:gap-x-12 md:gap-y-28 md:mt-24 md:grid-cols-2 lg:max-w-5xl">
        <div className="max-w-sm mx-auto cursor-pointer lg:max-w-full">
          <div className="group relative overflow-hidden mb-4 bg-gray-light">
            <img height={549} width={490} src={SweetShopmockup} alt="" />
            <a
              href="#"
              className="flex justify-center items-center font-semibold sm:text-lg lg:text-2xl
            absolute top-0 left-0 w-full h-full bg-main text-white opacity-0 z-10 translate-y-full duration-300 group-hover:translate-y-0 group-hover:opacity-70
            "
            >
              Visiter le Lien
            </a>
          </div>
          <p className="font-lora text-main font-medium text-xl mb-3 sm:text-2xl">
            E-commerce Sweet Shop
          </p>
          <p className="text-dark-gray text-xs leading-5 max-w-xs sm:text-sm sm:leading-7 sm:max-w-sm lg:max-w-md">
            Sweet Shop est une plateforme Ecommerce développée en utilisant
            React, offrant une expérience utilisateur fluide et réactive pour
            les acheteurs en ligne. Le cœur du projet réside dans la création
            d'une interface intuitive permettant aux utilisateurs de naviguer
            facilement à travers une large gamme de produits, de les visualiser
            en détail et de les acheter en toute simplicité.
          </p>
        </div>
        <div className="max-w-sm mx-auto cursor-pointer lg:max-w-full md:translate-y-80">
          <div className="group relative overflow-hidden mb-4 bg-gray-light">
            <img height={1080} width={1080} src={Barbermockup} alt="" />
            <a
              href="#"
              className="flex justify-center items-center font-semibold sm:text-lg lg:text-2xl
            absolute top-0 left-0 w-full h-full bg-main text-white opacity-0 z-10 translate-y-full duration-300 group-hover:translate-y-0 group-hover:opacity-70
            "
            >
              Visiter le Lien
            </a>
          </div>
          <p className="font-lora text-main font-medium text-xl mb-3 sm:text-2xl">
            Barbershop project
          </p>
          <p className="text-dark-gray text-xs leading-5 max-w-xs sm:text-sm sm:leading-7 sm:max-w-sm lg:max-w-md">
            Plateforme de réservation en ligne pour les salons de coiffure, construite avec React et stylisée avec Tailwind CSS pour une expérience utilisateur élégante et moderne.
            L'accent est mis sur la simplicité et l'efficacité, permettant aux clients de réserver des rendez-vous en quelques clics, de consulter les disponibilités
            des coiffeurs, et de découvrir les services proposés.
          </p>
        </div>
        <div className="max-w-sm mx-auto cursor-pointer lg:max-w-full">
          <div className="group relative overflow-hidden mb-4 bg-gray-light">
            <img height={1080} width={1080} src={Boxymockup} alt="" />
            <a
              href="#"
              className="flex justify-center items-center font-semibold sm:text-lg lg:text-2xl
            absolute top-0 left-0 w-full h-full bg-main text-white opacity-0 z-10 translate-y-full duration-300 group-hover:translate-y-0 group-hover:opacity-70
            "
            >
              Visiter le Lien
            </a>
          </div>
          <p className="font-lora text-main font-medium text-xl mb-3 sm:text-2xl">
            Boxy Generator
          </p>
          <p className="text-dark-gray text-xs leading-5 max-w-xs sm:text-sm sm:leading-7 sm:max-w-sm lg:max-w-md">
          Application web simplifiant la création de conteneurs HTML en générant automatiquement un code CSS complet.
          L'objectif principal est de fournir aux utilisateurs un outil convivial pour générer rapidement du code CSS personnalisé pour leurs conteneurs HTML, réduisant ainsi le temps de développement.
          Développée avec React, Redux et stylisée avec Tailwind CSS pour une expérience utilisateur intuitive et élégante.

          </p>
        </div>
      </div>
    </div>
  );
}
