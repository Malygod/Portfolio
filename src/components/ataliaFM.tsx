import img1 from "../img/sideNavegation.png"
import img2 from "../img/propiedades.png"
import img3 from "../img/mobileLogin.png"
import img4 from "../img/agendarVisita.png"
import img5 from "../img/mobileFooter.png"


export const AtaliaMF = () => {
  return (
    <div className="h-[650px] w-full max-w-full flex justify-center items-center z-0 overflow-x-hidden overflow-y-visible">

      <img
        className="transform w-[250px] mt-10 h-auto -rotate-6 hover:scale-110 rounded-lg z-20 opacity-90 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer shadow-black drop-shadow-xl shadow-2xl"
        alt="Agendarvisita"
        src={img2.src}
      />
      <img
        className="transform w-[250px] h-auto hover:scale-110 rounded-lg z-30 opacity-90 hover:opacity-100 hover:border-teal-700 hover:blur-0 transition-all duration-300 ease-in-out cursor-pointer shadow-black drop-shadow-xl shadow-2xl"
        alt="Agendarvisita"
        src={img3.src}
      />
      <img
        className="transform w-[250px] mt-10 h-auto rotate-6 hover:scale-110 rounded-lg z-20 opacity-90 hover:opacity-100 hover:border-teal-700 hover:blur-0 transition-all duration-300 ease-in-out cursor-pointer shadow-black drop-shadow-xl shadow-2xl"
        alt="Agendarvisita"
        src={img1.src}
      />

    </div>
  );
};