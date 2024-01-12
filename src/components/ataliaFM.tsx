import React from "react"
import img1 from "../img/sideNavegation.png"
import img2 from "../img/propiedades.png"
import img3 from "../img/mobileLogin.png"
import img4 from "../img/agendarVisita.png"
import img5 from "../img/mobileFooter.png"

const images = [img1, img2, img3, img4, img5];




export const AtaliaMF = () => {
  return (
    <div className="overflow-hidden w-full max-w-full flex justify-evenly items-center h-[650px]">
      <img
        className="transform w-[105px] hover:scale-125 border-2 rounded-xl blur-sm hover:border-teal-700 hover:blur-0 transition-all duration-300 ease-in-out"
        alt="Agendarvisita"
        src={img1.src}
      />
      <img
        className="transform w-[140px] h-auto hover:scale-125 border-2 rounded-xl blur-sm hover:border-teal-700 hover:blur-0 transition-all duration-300 ease-in-out"
        alt="Agendarvisita"
        src={img2.src}
      />
      <img
        className="transform w-[210px] h-auto hover:scale-125 z-30 border-2 rounded-xl  hover:border-teal-700 hover:blur-0 transition-all duration-300 ease-in-out"
        alt="Agendarvisita"
        src={img3.src}
      />
      <img
        className="transform w-[140px] h-auto hover:scale-125 border-2 rounded-xl blur-sm z-20 hover:border-teal-700 hover:blur-0 transition-all duration-300 ease-in-out"
        alt="Agendarvisita"
        src={img4.src}
      />
      <img
        className="transform w-[105px] h-auto hover:scale-125 border-2 rounded-xl blur-sm z-10 hover:border-teal-700 hover:blur-0 transition-all duration-300 ease-in-out"
        alt="Agendarvisita"
        src={img5.src}
      />
    </div>
  );
};