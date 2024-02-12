import img from "../img/bgblackred.jpg";

export const Red = () => {
    return (
        <div
            className="hidden sm:flex h-[100px] xl-[125px] z-0 2xl:h-[150px] w-full blur-[2px]"
            style={{
                backgroundImage: `url(${img.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                filter: 'brightness(1.1)',
            }}
        >
        </div>
    );
};

export default Red;