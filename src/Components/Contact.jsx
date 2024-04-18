import Mail from "../assets/images/footer/Mail.png";
import Phone from "../assets/images/footer/Phone.png";
export default function Contact() {
  return (
    <div
      id="contact"
      className="py-20 px-4 mx-auto max-w-4xl border-solid border-t-2 border-gray-light sm:py-24 md:py-28"
    >
      <p className="font-lora text-3xl max-w-lg mx-auto text-center font-medium leading-snug text-main mb-14 sm:text-4xl sm:leading-snug sm:max-w-xl md:text-5xl md:leading-snug md:max-w-3xl">
        Faite-moi savoir si vous êtes intéressés par une{" "}
        <strong className="italic">potentielle collaboration</strong>. je suis
        disponible pour toute opportunité pro.
      </p>
      <div className="text-main flex justify-center items-center flex-col md:flex-row md:justify-around">
        <div className="border rounded-sm w-full max-w-xs text-center bg-zinc-50 py-16 px-4 mb-5 md:mb-0 lg:px-8">
          <img
            width={66}
            height={48}
            className="block mx-auto h-9 mb-10 md:h-12"
            src={Mail}
            alt=""
          />
          <p className="font-bold mb-1 md:text-lg lg:text-xl">Adresse mail</p>
          <p className="md:text-lg">amine.kabol@gmail.com</p>
        </div>
        <div className="border rounded-sm w-full max-w-xs text-center bg-zinc-50 py-16 px-4 mb-5 md:mb-0 lg:px-8">
          <img
            width={66}
            height={48}
            className="block mx-auto h-9 mb-10 md:h-12"
            src={Phone}
            alt=""
          />
          <p className="font-bold mb-1 md:text-lg lg:text-xl">Adresse mail</p>
          <p className="md:text-lg">06.28.48.11.91</p>
        </div>
      </div>
    </div>
  );
}
