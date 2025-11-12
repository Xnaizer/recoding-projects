'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ['Nexus', 'About', 'Vault', 'Prologue', 'Contact'];


const Navbar: React.FC = () => {

    const [isAudioPlay, setIsAudioPlay] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [isNavVisible, setIsNavVisible] = useState<boolean>(true);

    const navContainerRef = useRef<HTMLDivElement | null>(null);
    const audioELementRef = useRef<HTMLAudioElement | null>(null);

    const { y: currentScrollY } = useWindowScroll();

    useEffect(() => {
    if (currentScrollY === lastScrollY) return; // hindari re-render loop

    const navEl = navContainerRef.current;
    if (!navEl) return;

    if (currentScrollY === 0) {
        setIsNavVisible(true);
        navEl.classList.remove('floating-nav');
    } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
        navEl.classList.add('floating-nav');
    } else {
        setIsNavVisible(true);
        navEl.classList.add('floating-nav');
    }

    setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);


    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2
        })
    }, [isNavVisible]);

    const toggleAudioIndicator = () => {
        setIsAudioPlay((prev) => !prev);

        setIsActive((prev) => !prev);
    }

    useEffect(() => {
        if(isAudioPlay) {
            audioELementRef.current?.play();
        } else {
            audioELementRef.current?.pause();
        }
    },[isAudioPlay]);

    return (
        <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
            <header className="absolute top-1/2 w-full -translate-y-1/2 px-4">
                <nav className="flex size-full items-center justify-between p-4">
                    <div className="flex items-center gap-7">
                        <Image 
                            src='/img/logo.png'
                            alt="logo navbar"
                            width={50}
                            height={50}
                        />

                        <Button 
                            id="product-button"
                            title="Products"
                            rightIcon={<TiLocationArrow />}
                            containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                        />
                    </div>
                    
                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item, index) => (
                                <a href={`#${(navItems[index]).toLowerCase()}`} className="nav-hover-btn" key={item}>
                                    {item}
                                </a>
                            ))}
                        </div>
                        
                        <button className="ml-10 flex items-center space-x-0.5 cursor-pointer" onClick={toggleAudioIndicator}>
                            <audio ref={audioELementRef} src="/audio/loop.mp3" className="hidden" loop />


                            {[1,2,3,4].map((item) => (
                                <div key={item} className={`indicator-line ${isActive ? 'active' : ''}`} style={{animationDelay : `${item * 0.1}s`}} />

                                
                            ))}
                            

                        </button>
                    </div>

                </nav>

            </header>
            
        </div>
    )
}

export default Navbar;