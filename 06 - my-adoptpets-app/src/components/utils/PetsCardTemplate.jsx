import petsPictures from "../../assets/img/cat1-8ac00215.jpg";
import { useNavigate } from "react-router-dom";
function PetsCardTemplate() {
    const navigate = useNavigate();

    function handleToPetsDetail() {
        navigate("/pets");
    }
    return (
        <div className=" relative">
            <div className="relative group overflow-hidden" id="petlist-img">
                <img
                    src={petsPictures}
                    alt="cat"
                    className=" mx-auto w-full rounded-lg transform group-hover:scale-110 transition duration-300 ease-in-out"
                />
                <div className="absolute w-full h-full bg-gradient-to-b text-center from-white/0 to-black/50 top-0">
                    <button 
                    onClick={handleToPetsDetail}
                    className="px-14 text-base md:text-xl lg:text-base xl:text-xl lg:px-8 lg:mt-28 xl:mt-40 py-4 mt-44 md:mt-52 mb-20 xs:mb-28 lg:mb-12 xl:mb-24 bg-paleBlue opacity-0 group-hover:opacity-100 font-Sawa text-white rounded inline-block transition duration-300 ease-in-out hover:bg-slate-700 bg-slate-500"
                    >
                        Adopt now
                    </button>
                    <h1 className="text-2xl md:text-3xl font-Sawa text-white font-medium lg:text-xl duration-300 ease-in-out text-center">
                        666 Days Waiting
                    </h1>
                </div>
            </div>
            <div id="petlist-detail" className="mb-4 bg-white p-4 rounded-lg shadow-lg">
                <h1 className="text-2xl md:text-3xl lg:text-2xl font-Inter mb-2 font-bold text-center text-secondBlack">
                    Aryo
                </h1>
                <p className="text-lg md:text-xl lg:text-lg font-Sawa font-medium text-center text-gray-700">
                    1 Year old
                </p>
                <p className="text-sm md:text-base lg:text-sm font-Sawa text-center text-gray-500 mt-2">
                    Aryo is a friendly and playful cat looking for a loving home. He enjoys cuddles and chasing toys.
                </p>
            </div>
        </div>
    );
}

export default PetsCardTemplate;
