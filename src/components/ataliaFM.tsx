import img1 from "../img/sideNavegation.png"
import img2 from "../img/propiedades.png"
import img3 from "../img/mobileLogin.png"
import img4 from "../img/agendarVisita.png"
import img5 from "../img/mobileFooter.png"


export const AtaliaMF = () => {
  return (
    <div className="overflow-hidden h-[580px] w-full max-w-full flex justify-evenly items-center xl:h-[650px] z-10">
      <img
        className="transform w-[105px] hover:scale-125 border-2 rounded-xl blur-sm hover:border-teal-700 hover:blur-0 transition-all duration-300 ease-in-out cursor-pointer"
        alt="Agendarvisita"
        src={img1.src}
      />
      <img
        className="transform w-[150px] h-auto hover:scale-125 border-2 rounded-xl blur-sm hover:border-teal-700 hover:blur-0 transition-all duration-300 ease-in-out cursor-pointer"
        alt="Agendarvisita"
        src={img2.src}
      />
      <img
        className="transform w-[210px] h-auto hover:scale-125 border-2 rounded-xl z-30 hover:border-teal-700 hover:blur-0 transition-all duration-300 ease-in-out cursor-pointer"
        alt="Agendarvisita"
        src={img3.src}
      />
      <img
        className="transform w-[150px] h-auto hover:scale-125 border-2 rounded-xl blur-sm z-20 hover:border-teal-700 hover:blur-0 transition-all duration-300 ease-in-out cursor-pointer"
        alt="Agendarvisita"
        src={img4.src}
      />
      <img
        className="transform w-[105px] h-auto hover:scale-125 border-2 rounded-xl blur-sm z-10 hover:border-teal-700 hover:blur-0 transition-all duration-300 ease-in-out cursor-pointer"
        alt="Agendarvisita"
        src={img5.src}
      />
    </div>
  );
};