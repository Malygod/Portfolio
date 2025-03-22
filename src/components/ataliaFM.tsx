import img1 from "../img/sideNavegation.png";
import img2 from "../img/propiedades.png";
import img3 from "../img/mobileLogin.png";
import img4 from "../img/agendarVisita.png";
import img5 from "../img/mobileFooter.png";

export const AtaliaMF = () => {
  // Clases comunes para todas las imágenes
  const commonClasses =
    "transform w-[160px] xl:w-[250px] h-auto hover:scale-110 rounded-lg transition-all duration-300 ease-in-out cursor-pointer shadow-black shadow-2xl";

  return (
    <div className="h-[550px] xl:h-[650px] w-full max-w-full flex justify-center items-center z-50 overflow-hidden xl:overflow-visible">
      {/* Imagen 1 */}
      <img
        className={`${commonClasses} hidden sm:block xl:hidden mt-32 -rotate-12 z-10 mr-[-15px]`}
        alt="Navegación lateral en Atalia"
        src={img5.src}
        loading="lazy"
      />

      {/* Imagen 2 */}
      <img
        className={`${commonClasses} mt-10 -rotate-6 z-20 mr-[-15px]`}
        alt="Listado de propiedades en Atalia"
        src={img2.src}
        loading="lazy"
      />

      {/* Imagen 3 */}
      <img
        className={`${commonClasses} w-[180px] xl:w-[270px] z-30`}
        alt="Inicio de sesión móvil en Atalia"
        src={img3.src}
        loading="lazy"
      />

      {/* Imagen 4 */}
      <img
        className={`${commonClasses} mt-10 rotate-6 z-20 ml-[-15px]`}
        alt="Agendar visita en Atalia"
        src={img1.src}
        loading="lazy"
      />

      {/* Imagen 5 */}
      <img
        className={`${commonClasses} hidden sm:block xl:hidden mt-32 rotate-12 z-10 ml-[-15px]`}
        alt="Footer móvil en Atalia"
        src={img4.src}
        loading="lazy"
      />
    </div>
  );
};