import React from "react"
import img1 from "../img/selectionWS.jpg"
import img2 from "../img/profileWS.jpg"
import img3 from "../img/loginWS.jpg"
import img4 from "../img/downhillWS.jpg"
import img5 from "../img/dataformWS.jpg"

export const WorkoutsyncImg = () => {
  return (
    <div className="h-[580px] w-full max-w-full flex justify-center items-center xl:h-[650px] z-50">

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
        src={img4.src}
      />

    </div>
  );
};

