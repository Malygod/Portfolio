import img1 from "../img/sideNavegation.png"
import img2 from "../img/propiedades.png"
import img3 from "../img/mobileLogin.png"
import img4 from "../img/agendarVisita.png"
import img5 from "../img/mobileFooter.png"


export const AtaliaMF = () => {
  return (
    <div className="h-[550px] xl:h-[650px] w-full max-w-full flex justify-center items-center z-50 overflow-hidden xl:overflow-visible">

      <img
        className="hidden sm:block xl:hidden transform w-[160px] xl:w-[250px] mt-32 h-auto -rotate-12 hover:scale-110 rounded-lg z-10 transition-all duration-300 ease-in-out cursor-pointer shadow-black shadow-2xl"
        alt="Agendarvisita"
        src={img5.src}
      />
      <img
        className="transform w-[160px] xl:w-[250px] mt-10 h-auto -rotate-6 hover:scale-110 rounded-lg z-20 transition-all duration-300 ease-in-out cursor-pointer shadow-black shadow-2xl"
        alt="Agendarvisita"
        src={img2.src}
      />
      <img
        className="transform w-[160px] xl:w-[250px] h-auto hover:scale-110 rounded-lg z-30 transition-all duration-300 ease-in-out cursor-pointer shadow-black shadow-2xl"
        alt="Agendarvisita"
        src={img3.src}
      />
      <img
        className="transform w-[160px] xl:w-[250px] mt-10 h-auto rotate-6 hover:scale-110 rounded-lg z-20 transition-all duration-300 ease-in-out cursor-pointer shadow-black shadow-2xl"
        alt="Agendarvisita"
        src={img1.src}
      />

      <img
        className="hidden sm:block xl:hidden transform w-[160px] xl:w-[250px] mt-32 h-auto rotate-12 hover:scale-110 rounded-lg z-10 transition-all duration-300 ease-in-out cursor-pointer shadow-black shadow-2xl"
        alt="Agendarvisita"
        src={img4.src}
      />

    </div>
  );
};