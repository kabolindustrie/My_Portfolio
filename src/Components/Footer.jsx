import Fb from "../assets/images/social-media/facebook.png";
import insta from "../assets/images/social-media/instagram.png";
import linkedin from "../assets/images/social-media/linkedin.png";
import twitter from "../assets/images/social-media/twitter.png";

export default function Footer() {
  return (
    <div className="bg-main py-12 px-8 md:py-10 lg:py-8">
      <div className="max-w-4xl mx-auto flex items-center flex-col lg:flex-row lg:justify-between">
        <p className="text-white underline">amine.kabol@gmail.com</p>
        <div className="flex my-4 lg:order-3">
          <a href="#" target="_blank" className="p-2">
            <img
              width={17}
              height={17}
              className="h-4"
              src={Fb}
              alt="Icone Facebook"
            />
          </a>
          <a href="#" target="_blank" className="p-2">
            <img
              width={17}
              height={17}
              className="h-4"
              src={insta}
              alt="Icone Facebook"
            />
          </a>
          <a href="#" target="_blank" className="p-2">
            <img
              width={17}
              height={17}
              className="h-4"
              src={linkedin}
              alt="Icone Facebook"
            />
          </a>
          <a href="#" target="_blank" className="p-2">
            <img
              width={17}
              height={17}
              className="h-4"
              src={twitter}
              alt="Icone Facebook"
            />
          </a>
        </div>
        <p className="text-white font-lora text-base">© 2024 Amine Kabol. Tous droit réservés</p>
      </div>
    </div>
  );
}
