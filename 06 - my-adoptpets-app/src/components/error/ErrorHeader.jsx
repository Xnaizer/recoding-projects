import { useState, useEffect } from "react";
import logoNavbar from "../../assets/img/doublepawwhite.png";
import CommunityLogoIcon from "../../assets/img/compets.png";
import hamburgerIcon from "../../assets/img/burger1.svg";
import closeIcon from "../../assets/img/close1.svg";

const textQuotes = [
    "Your Pet's Home",
    "Your Pet's Need",
    "Your Friendly Platform",
    "The Best Choice"
];

function ErrorHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentIndex = loopNum % textQuotes.length;
            const fullText = textQuotes[currentIndex];

            setText(prevText => {
                const updatedText = isDeleting
                    ? fullText.substring(0, prevText.length - 1)
                    : fullText.substring(0, prevText.length + 1);
                return updatedText;
            });

            // Menyesuaikan kecepatan ketikan berdasarkan apakah sedang menghapus atau menambah
            setTypingSpeed(isDeleting ? 100 : 150);

            // Pengaturan saat selesai mengetik dan mulai menghapus
            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1000); 
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(prevLoopNum => prevLoopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        // Clear interval saat komponen di-unmount
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <>
            <header className="pb-16 nav__menu">
                <nav className="p-5 xl:px-7 w-full fixed z-50 bg-slate-800" id="navbar">
                    <div className="flex container justify-between mx-auto items-center pl-6">
                        {/* Logo */}
                        <div className="flex items-center lg:gap-5 xl:gap-10">
                            <a href="/" className="flex gap-2 items-center hover:text-slate-200">
                                <img src={logoNavbar} alt="double-paw" className="w-14" draggable="false" />
                                <h1 className="font-Sawa text-paleBlue text-xl font-bold text-white">
                                    AdoptPets
                                </h1>
                            </a>
                        </div>

                        {/* Typewriter Text */}
                        <div className="hidden md:block max-w-sm">
                            <h1 className="text-md font-semibold text-white" aria-live="polite" aria-atomic="true">
                                {`AdoptPet's, ${text}! `}
                                <span className="blinking-cursor">|</span>
                                <span className="inline-block">🧸🕊️🐧</span>
                            </h1>
                        </div>

                        {/* Navigation Menu */}
                        <div className="flex items-center gap-4 p-4">
                            <ul className="hidden lg:flex items-center gap-7 xl:gap-9">
                                <li>
                                    <button onClick={toggleSearch} className="cursor-pointer" aria-label="Search">
                                        <i className="ri-search-line text-2xl text-white"></i>
                                    </button>
                                </li>
                                {isSearchOpen && (
                                    <li>
                                        <input
                                            type="text"
                                            className="rounded-lg xl:pr-32 p-1 md:pr-2 md:w-56"
                                            placeholder="Search"
                                        />
                                    </li>
                                )}
                            </ul>

                            {/* Hamburger Mobile */}
                            <button className="block lg:hidden focus:outline-none" onClick={toggleMobileMenu} aria-label="Toggle Menu">
                                <img src={hamburgerIcon} alt="burger" className="w-12 h-12" />
                            </button>
                        </div>

                        {/* Mobile Navbar */}
                        {isMobileMenuOpen && (
                            <div className="fixed inset-0 bg-slate-800 z-40 lg:hidden">
                                <div className="flex flex-col items-center justify-center h-full px-5 relative">
                                    {/* Close Button */}
                                    <button onClick={toggleMobileMenu} className="absolute top-5 right-5 focus:outline-none" aria-label="Close Menu">
                                        <img src={closeIcon} alt="close" className="w-10 h-10" />
                                    </button>

                                    <div className="flex flex-col items-center gap-5">
                                        <img src={CommunityLogoIcon} alt="double-paw" className="w-64 mb-12" draggable="false" />
                                        <a href="/" className="flex gap-2 items-center duration-300 hover:text-slate-200">
                                            <h1 className="font-Sawa text-paleBlue text-3xl font-bold text-white mb-4">
                                                AdoptPets
                                            </h1>
                                        </a>
                                    </div>
                                    <input
                                        type="text"
                                        className="rounded-lg w-96 p-2 pl-2 pr-4 border border-slate-300 focus:ring-2 focus:ring-paleBlue"
                                        placeholder="Search in AdoptPets"
                                    />
                                    <button className="w-1/2 text-center text-black bg-white rounded-md font-Sawa py-3 px-8 my-6">
                                        Search
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </header>
        </>
    );
}

export default ErrorHeader;
