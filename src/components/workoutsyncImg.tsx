import img1 from "../img/selectionWS.jpg";
import img2 from "../img/profileWS.jpg";
import img3 from "../img/loginWS.jpg";

const commonClasses = "h-auto w-[120px] rounded-lg shadow-2xl shadow-black/30 transition-transform duration-300 ease-out hover:-translate-y-2 sm:w-[190px] xl:w-[230px]";

export const WorkoutsyncImg = () => {
  return (
    <div className="flex min-h-[430px] w-full max-w-full items-center justify-center overflow-hidden py-12 sm:min-h-[540px] xl:overflow-visible">
      <img
        className={`${commonClasses} z-10 -mr-8 translate-y-8 -rotate-6 sm:-mr-10`}
        alt="Selección de actividades en WorkoutSync"
        src={img1.src}
        loading="lazy"
      />
      <img
        className={`${commonClasses} z-20`}
        alt="Perfil de usuario en WorkoutSync"
        src={img2.src}
        loading="lazy"
      />
      <img
        className={`${commonClasses} z-10 -ml-8 translate-y-8 rotate-6 sm:-ml-10`}
        alt="Inicio de sesión en WorkoutSync"
        src={img3.src}
        loading="lazy"
      />
    </div>
  );
};
