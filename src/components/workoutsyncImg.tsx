import React from "react"
import img1 from "../img/selectionWS.jpg"
import img2 from "../img/profileWS.jpg"
import img3 from "../img/loginWS.jpg"
import img4 from "../img/downhillWS.jpg"
import img5 from "../img/dataformWS.jpg"

export const WorkoutsyncImg = () => {
  return (
    <div className="h-[450px] xl:h-[650px] w-full max-w-full flex justify-center items-center z-50 overflow-hidden xl:overflow-visible">

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
        src={img4.src}
      />

    </div>
  );
};

