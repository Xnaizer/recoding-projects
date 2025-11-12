'use client';
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from 'react-icons/ti'
import Button from "./Button";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

type TVdSrc = string | Blob | MediaSource | MediaStream | undefined;

const Hero:React.FC = () => {

    const totalVideos: number = 4;

    const [currentIndex, setCurrentIndex] = useState<number>(1);
    const [hasClicked, setHasClicked] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [loadedVideos, setLoadedVideos] = useState<number>(0);
    

    const nextVdRef = useRef<HTMLVideoElement | null>(null);
    const getVdSrc = (index:number):TVdSrc => `videos/hero-${index}.mp4`;
    const upcomingVdIndex = (currentIndex % totalVideos) + 1;

    const handleVdLoad = () => {
        setLoadedVideos((prevIndex) => (prevIndex % totalVideos) + 1);
    }

    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVdIndex);
    }

    useEffect(() => {
        if(loadedVideos === totalVideos - 1) {
            setIsLoading(false);
        }
    },[loadedVideos]);

    useGSAP(() => {
    if (hasClicked) {
        gsap.set('#next-video', { visibility: 'visible', opacity: 1 });
        gsap.set('#background-video', { visibility: 'visible' });
        gsap.set('#current-video', { visibility: 'invisible', opacity: 0});

        gsap.to('#background-video', {
        scale: 0,
        duration: 0,
        opacity: 0,
        ease: 'power2.inOut',
        });

        gsap.from('#current-video', {
            scale: 0,
            duration: 1,
            opacity: 0,
            ease: 'back'
        });

        gsap.to('#current-video', {
            scale: 1.2,
            duration: 1.8,
            opacity: 1,
            ease: 'elastic.inOut'
        });

        gsap.fromTo(
        '#next-video',
        { scale: 1, opacity: 1 },
        {
            scale: 1.2,         
            opacity: 1,
            duration: 0.6,
            ease: 'power2.inOut',
            onStart: () => {
                void nextVdRef.current?.play()
            },
        }
        );


    }
    }, { dependencies: [currentIndex], revertOnUpdate: true });

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            borderRadius: '0px'
        });

        gsap.to('#video-frame', {
            clipPath:
            'polygon(97% 5%, 97% 20%, 97% 58%, 92% 90%, 50% 77%, 14% 93%, 3% 61%, 4% 4%, 32% 4%, 58% 5%)',
            borderRadius: '20px',
            ease: 'power1.inOut',
            scrollTrigger: {
            trigger: '#video-frame',
            start: 'top top',       
            end: 'bottom center',   
            scrub: true
            }
        });
    })

    return (
        <div id="nexus" className="relative h-dvh w-screen overflow-x-hidden  ">
            {isLoading && (
                <div className="flex-center absolute z-100 h-dvh w-screen overflow-hidden bg-violet-50">
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            )}
                 <h1 className="special-font hero-heading text-black absolute top-24 left-10 ">
                    redefi<b>n</b><b>e</b>
                </h1>
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden  bg-blue-75 duration-300 transition-all">
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div 
                            onClick={handleMiniVdClick} 
                            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 "
                        >
                            <video
                                id="current-video"
                                src={ getVdSrc(upcomingVdIndex) }
                                ref={nextVdRef}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="size-64 origin-center object-center scale-150 object-cover"
                                onLoadedData={handleVdLoad}
                            />
                        </div>
                    </div>

                    <video
                        ref={nextVdRef}
                        src={getVdSrc(currentIndex)}
                        loop
                        muted
                        id="next-video"
                        className="
                            absolute left-1/2 top-1/2 z-20
                            w-[102vw] h-[102vh]
                            -translate-x-1/2 -translate-y-1/2
                            object-cover object-center
                            opacity-0
                            will-change-transform rounded-2xl
                        "
                        onLoadedData={handleVdLoad}
                    />

                    <video
                    id="background-video"
                    src={getVdSrc(currentIndex )}
                    autoPlay
                    loop
                    muted
                    className="
                        absolute left-0 top-0 size-full object-cover
                    "
                    onLoadedData={handleVdLoad}
                    />

                    
                </div>

                <h1 className="special-font hero-heading z-40 text-blue-75 absolute bottom-5 right-5">
                    G<b>a</b>ming
                </h1>

                <div className="absolute left-0 top-0 z-40 size-full ">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="special-font hero-heading text-blue-100">
                            redefi<b>n</b><b>e</b>
                        </h1>
                        <p className="mb-5 max-w-64 font-robert-regular text-blue-100">Enter the Metagame Layer <br/> Unleash the play Economy</p>

                        <Button id="watch-trailer" title='Watch Trailer' leftIcon={<TiLocationArrow  />} containerClass="!bg-yellow-300 flex-center gap-1" />
                    </div>
                    

                </div>
            </div>
                <h1 className="special-font hero-heading  text-black absolute bottom-5 right-5">
                    G<b>a</b>ming
                </h1>
        </div>
    )
}

export default Hero;