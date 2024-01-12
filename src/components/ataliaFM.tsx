import React from "react"
import img1 from "../img/sideNavegation.png"
import img2 from "../img/propiedades.png"
import img3 from "../img/mobileLogin.png"
import img4 from "../img/agendarVisita.png"
import img5 from "../img/mobileFooter.png"


export const AtaliaMF = () => {
    return (
        <div className="overflow-hidden max-w-full hidden sm:hidden md:hidden lg:hidden xl:flex justify-evenly items-center self-center py-[100px] ">
            <img
                className="transform w-[210px] h-[453px] self-center blur-md hover:scale-125 border-4 rounded-xl hover:border-teal-950 hover:blur-0 transition-all duration-300 ease-in-out"
                alt="Agendarvisita"
                src= {img1.src}
            />
            <img
                className="transform w-[210px] h-[453px] self-center blur-md hover:scale-125 border-4 rounded-xl hover:border-teal-950 hover:blur-0 transition-all duration-300 ease-in-out"
                alt="Agendarvisita"
                src= {img2.src}
            />
            <img
                className="transform w-[210px] h-[453px] self-center blur-md hover:scale-125 border-4 rounded-xl hover:border-teal-950 hover:blur-0 transition-all duration-300 ease-in-out"
                alt="Agendarvisita"
                src= {img3.src}
            />
            <img
                className="transform w-[210px] h-[453px] self-center blur-md hover:scale-125 border-4 rounded-xl hover:border-teal-950 hover:blur-0 transition-all duration-300 ease-in-out"
                alt="Agendarvisita"
                src= {img4.src}
            />
            <img
                className="transform w-[210px] h-[453px] self-center blur-md hover:scale-125 border-4 rounded-xl hover:border-teal-950 hover:blur-0 transition-all duration-300 ease-in-out"
                alt="Agendarvisita"
                src= {img5.src}
            />
        </div>
    );
};

export default AtaliaMF;
