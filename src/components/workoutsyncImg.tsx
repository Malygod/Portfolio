import img1 from "../img/selectionWS.jpg";
import img2 from "../img/profileWS.jpg";
import img3 from "../img/loginWS.jpg";
import img4 from "../img/downhillWS.jpg";
import img5 from "../img/dataformWS.jpg";

const commonClasses = "transform w-[160px] xl:w-[250px] h-auto hover:scale-110 rounded-lg transition-all duration-300 ease-in-out cursor-pointer shadow-black shadow-2xl";

export const WorkoutsyncImg = () => {
  return (
    <div className="h-[550px] xl:h-[650px] w-full max-w-full flex justify-center items-center z-50 overflow-hidden xl:overflow-visible">
      <img
        className={`${commonClasses} hidden sm:block xl:hidden mt-32 -rotate-12 z-10`}
        alt="Selección de actividades en WorkoutSync"
        src={img1.src}
        loading="lazy"
      />
      <img
        className={`${commonClasses} mt-10 mr-[-15px] -rotate-6 z-20`}
        alt="Perfil de usuario en WorkoutSync"
        src={img2.src}
        loading="lazy"
      />
      <img
        className={`${commonClasses} w-[180px] xl:w-[270px] z-30`}
        alt="Inicio de sesión en WorkoutSync"
        src={img3.src}
        loading="lazy"
      />
      <img
        className={`${commonClasses} mt-10 ml-[-15px] rotate-6 z-20`}
        alt="Actividad de descenso en WorkoutSync"
        src={img4.src}
        loading="lazy"
      />
      <img
        className={`${commonClasses} hidden sm:block xl:hidden mt-32 rotate-12 z-10`}
        alt="Formulario de datos en WorkoutSync"
        src={img5.src}
        loading="lazy"
      />
    </div>
  );
};