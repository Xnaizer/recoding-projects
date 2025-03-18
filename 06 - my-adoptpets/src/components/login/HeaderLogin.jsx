import { useState, useEffect } from "react";
import logoNavbar from "../../assets/img/doublepawwhite.png";
// import logoNavbarBlack from "../../assets/img/doublepaw.svg";
import CommunityLogoIcon from "../../assets/img/compets.png"
import hamburgerIcon from "../../assets/img/burger1.svg";
import closeIcon from "../../assets/img/close1.svg"; 
import { useNavigate } from "react-router-dom";

function HeaderLogin() {
    const navigate = useNavigate();
    function HandletoSignUp() {
        navigate("/create-account");
    }

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    
    // State untuk efek pengetikan
    const fullText = "Selamat Datang Kembali Hooman!🧸🕊️🐧";
    const [displayedText, setDisplayedText] = useState("");
    const typingSpeed = 100; // kecepatan pengetikan dalam milidetik

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            setDisplayedText(fullText.slice(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex === fullText.length) {
                clearInterval(typingInterval);
            }
        }, typingSpeed);

        
        return () => clearInterval(typingInterval);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <>
            {/* Header Section */}
            <header className="pb-24 nav__menu">
                <nav
                    className="p-5 xl:px-7 w-full fixed z-50 transition-colors duration-300 ease-in-out bg-slate-800"
                    id="navbar"
                >
                    <div className="flex container justify-between mx-auto items-center pl-6">
                        {/* Logo dan Nama Situs */}
                        <div className="flex items-center lg:gap-5 xl:gap-10">
                            <a
                                href="/"
                                className="flex gap-2 items-center duration-300 hover:text-slate-200"
                            >
                                <img
                                    src={logoNavbar}
                                    alt="double-paw"
                                    className="w-14 duration-300  svg-icon text-white"
                                    draggable="false"

                                />
                                <h1 className="font-Sawa text-paleBlue text-xl font-bold hover:text-slate-800 text-white" >
                                    AdoptPets
                                </h1>
                            </a>
                        </div>

                        <div className="hidden md:block max-w-sm">
                            {/* Teks dengan efek pengetikan */}
                            <h1 className="text-md font-semibold text-white">
                                {displayedText}
                                <span className="blinking-cursor">|</span>
                            </h1>
                        </div>


                        {/* Menu Navigasi */}
                        <div className="flex items-center gap-4 p-4">
                            {/* Menu Desktop */}
                            <ul className="hidden lg:flex items-center gap-7 xl:gap-9">
                                {/* Tombol Pencarian */}
                                <li>
                                    <button
                                        onClick={toggleSearch}
                                        className="cursor-pointer active:scale-90 transition duration-300 ease-in-out"
                                        aria-label="Search"
                                    >
                                        <i className="ri-search-line text-2xl text-white"></i>
                                    </button>
                                </li>
                                {/* Input Pencarian */}
                                {isSearchOpen && (
                                    <li>
                                        <input
                                            type="text"
                                            className="rounded-lg xl:pr-32 p-1 md:pr-2 md:w-56 transition-all duration-300 ease-in-out"
                                            placeholder="Search"
                                        />
                                    </li>
                                )}
                                {/* Tautan Sign In */}
                                <li>
                                    <a
                                        href="./create-account"
                                        className="px-8 py-3 rounded-md bg-paleBlue font-medium text-white active:scale-90 transition duration-300 ease-in-out hover:bg-green-700 hover:text-slate-100 bg-slate-600"
                                    >
                                        Sign Up
                                    </a>
                                </li>
                            </ul>

                            {/* Tombol Hamburger untuk Mobile */}
                            <button
                                className="block lg:hidden focus:outline-none "
                                onClick={toggleMobileMenu}
                                aria-label="Toggle Menu"
                            >
                                <img
                                    src={hamburgerIcon}
                                    alt="burger"
                                    className="w-12 h-12"
                                />
                            </button>
                        </div>

                        {/* Navbar Mobile */}
                        {isMobileMenuOpen && (
                            <div className="fixed inset-0 bg-slate-800 z-40 shadow-xl lg:hidden">
                                <div className="flex flex-col items-center justify-center h-full space-y-8 md:space-y-12 px-5 relative">
                                    {/* Tombol Tutup */}
                                    <button
                                        onClick={toggleMobileMenu}
                                        className="absolute top-5 right-5 focus:outline-none"
                                        aria-label="Close Menu"
                                    >
                                        <img
                                            src={closeIcon}
                                            alt="close"
                                            className="w-10 h-10"
                                        />
                                    </button>

                                    <div className="flex flex-col items-center lg:gap-5 xl:gap-10 ">
                                        <img
                                            src={CommunityLogoIcon}
                                            alt="double-paw"
                                            className="w-64 duration-300  svg-icon text-black mb-12"
                                            draggable="false"

                                        />
                                        <a
                                            href="/"
                                            className="flex gap-2 items-center duration-300 hover:text-slate-200"
                                        >
                                            
                                            <h1 className="font-Sawa text-paleBlue text-3xl font-bold  text-white mb-4" >
                                                AdoptPets
                                            </h1>
                                        </a>
                                    </div>
                                    {/* Form Pencarian */}
                                    <input
                                        type="text"
                                        className="rounded-lg w-96 p-2 pl-2 pr-4 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-paleBlue"
                                        placeholder="Search in AdoptPets"
                                    />
                                    <button
                                        href="#"
                                        className="w-1/2 text-center text-black bg-white rounded-md font-Sawa py-3 px-8 md:px-20 xs:px-12 font-medium "
                                    >
                                        Search
                                    </button>
                                    <div className="mb-24">

                                    </div>

                                    {/* Tautan Sign In */}
                                    <button
                                        onClick={HandletoSignUp}
                                        className="w-3/4 text-center text-black bg-white rounded-md font-Sawa py-3 px-8 md:px-20 xs:px-12 font-medium "
                                    >
                                        Sign Up
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

export default HeaderLogin;
