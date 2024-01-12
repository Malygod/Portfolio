import img from "../img/bosqueDifuso.jpg";

export const Forest = () => {
    return (
        <div
            className="flex bg-white h-[120px] w-full blur-[2px]"
            style={{
                backgroundImage: `url(${img.src})`,  // Use the specific property that contains the image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                filter: 'saturate(0.7)',
            }}
        >
            
        </div>
    );
};

export default Forest;