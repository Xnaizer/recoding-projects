// HomeSections.jsx
import { useState, useEffect } from 'react';
import mainPetsPict from "../../assets/img/pets.png";
import MediaSocialCircle from "../utils/MediaSocialCircle";

// Definisikan 'quotes' di luar komponen
const quotes = ["A True Companion.", "A True Love.", "A Loyal Friend.", "A True Friend."];

function HomeSections() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150); // Kecepatan pengetikan dalam milidetik

    useEffect(() => {
        const handleTyping = () => {
            const currentIndex = loopNum % quotes.length;
            const fullText = quotes[currentIndex];

            setText(prevText => {
                const updatedText = isDeleting
                    ? fullText.substring(0, prevText.length - 1)
                    : fullText.substring(0, prevText.length + 1);
                return updatedText;
            });

            // Mengatur kecepatan berdasarkan apakah sedang menghapus atau mengetik
            setTypingSpeed(isDeleting ? 75 : 150);

            // Jika selesai mengetik seluruh teks, mulai menghapus setelah jeda
            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            }
            // Jika selesai menghapus teks, pindah ke teks berikutnya
            else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(prevLoopNum => prevLoopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]); // 'quotes' dihapus dari dependensi

    return (
        <section id="sec-home">
            <div className="container mx-auto px-5 lg:px-8 ">
                <div className="flex-col lg:flex lg:flex-row justify-between items-center">
                    <div
                        className="lg:w-[65%] lg:order-2"
                        id="img-hero"
                        style={{ opacity: 1 }}
                    >
                        <img
                            src={mainPetsPict}
                            alt="main-pets"
                            className="mx-auto mb-10 md:scale-95"
                            draggable="false"
                        />
                    </div>
                    <div className="lg:w-1/2 xl:w-[46%] lg:order-1" id="img-text">
                        <h1
                            id="hero-title"
                            className="font-Inter text-2xl tracking-wide md:max-w-[40rem] xl:max-w-2xl xl:leading-snug xl:text-5xl lg:max-w-sm lg:leading-normal leading-relaxed md:text-4xl text-paleBlue font-semibold mb-4"
                        >
                            AdoptPets
                            <i className="ri-github-line text-4xl xl:text-5xl rotate-45 text-paleBlue ml-1"></i>
                            <p className="xl:text-2xl lg:text-xl md:text-xl">
                                A New Home For <span id="typing-text" className="text-dark font-bold">{text}</span>
                            </p>
                        </h1>
                        <p
                            id="typedText1"
                            className="font-sawa text-secondGray text-base max-w-xl lg:max-w-[24rem] xl:text-xl xl:max-w-sm xl:leading-relaxed leading-loose md:leading-relaxed md:text-lg p-2 mb-6"
                        >
                            We are dedicated to providing you with the best adoption experience. Discover your new furry friend here and see how true love can change your life.
                        </p>
                        <div className="flex gap-4 mb-7" id="button" style={{ opacity: 1 }}>
                            <a
                                href="#sec-choosepets"
                                className="px-4 xs:px-6 md:px-8 py-3 bg-paleBlue font-Sawa block text-white rounded transition duration-300 ease-in-out bg-slate-700 hover:bg-slate-800"
                            >
                                Find Pets
                            </a>
                            <a
                                href="#sec-support"
                                className="px-4 xs:px-6 md:px-8 py-3 text-paleBlue font-Sawa block hover:bg-red-400 rounded hover:text-white "
                            >
                                Support Us!
                            </a>
                        </div>
                        <div className="mt-10">
                            <p
                                className="uppercase font-Sawa font-bold text-paleBlue text-sm md:text-base mb-3"
                                id="paragraph-hero"
                                style={{ opacity: 1 }}
                            >
                                FOLLOW OUR SOCIAL MEDIA:
                            </p>
                            <div className="w-full px-4 pt-1">
                                <div className="flex items-center mt-4">
                                    <MediaSocialCircle
                                        nameClass="ri-youtube-fill"
                                        colour="hover:text-red-500"
                                        link={"https://www.youtube.com/"}
                                    />
                                    <MediaSocialCircle
                                        nameClass="ri-instagram-fill"
                                        colour="hover:text-pink-500"
                                        link={"https://www.instagram.com/"}
                                    />
                                    <MediaSocialCircle
                                        nameClass="ri-linkedin-box-fill"
                                        colour="hover:text-blue-500"
                                        link={"https://www.linkedin.com/"}
                                    />
                                    <MediaSocialCircle
                                        nameClass="ri-line-fill"
                                        colour="hover:text-green-500"
                                        link={"https://line.me/en/"}
                                    />
                                    <MediaSocialCircle
                                        nameClass="ri-whatsapp-fill"
                                        colour="hover:text-green-500"
                                        link={"https://web.whatsapp.com/"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSections;
