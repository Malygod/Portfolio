import React from "react"
import img1 from "../img/selectionWS.jpg"
import img2 from "../img/profileWS.jpg"
import img3 from "../img/loginWS.jpg"
import img4 from "../img/downhillWS.jpg"
import img5 from "../img/dataformWS.jpg"





export const WorkoutsyncImg = () => {
  return (
    <div className="overflow-hidden w-full max-w-full flex justify-evenly items-center h-[650px]">
      <img
        className="transform w-[105px] hover:scale-125 border-2 rounded-xl blur-sm hover:border-rose-800 hover:blur-0 transition-all duration-300 ease-in-out"
        alt="Agendarvisita"
        src={img1.src}
      />
      <img
        className="transform w-[140px] h-auto hover:scale-125 border-2 rounded-xl blur-sm hover:border-rose-800 hover:blur-0 transition-all duration-300 ease-in-out"
        alt="Agendarvisita"
        src={img2.src}
      />
      <img
        className="transform w-[210px] h-auto hover:scale-125 z-30 border-2 rounded-xl hover:border-rose-800 hover:blur-0 transition-all duration-300 ease-in-out"
        alt="Agendarvisita"
        src={img3.src}
      />
      <img
        className="transform w-[140px] h-auto hover:scale-125 border-2 rounded-xl blur-sm z-20 hover:border-rose-800 hover:blur-0 transition-all duration-300 ease-in-out"
        alt="Agendarvisita"
        src={img4.src}
      />
      <img
        className="transform w-[105px] h-auto hover:scale-125 border-2 rounded-xl blur-sm z-10 hover:border-rose-800 hover:blur-0 transition-all duration-300 ease-in-out"
        alt="Agendarvisita"
        src={img5.src}
      />
    </div>
  );
};

