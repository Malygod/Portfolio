import img from "../img/bgblackred.jpg";

export const Red = () => {
    return (
        <div
            className="flex bg-white h-[100px] xl-[125px] 2xl:h-[150px] w-full blur-[2px]"
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