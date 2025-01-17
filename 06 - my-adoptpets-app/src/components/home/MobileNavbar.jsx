// src/components/navbar/MobileNavbar.jsx
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavListMobile from "../utils/NavListMobile";

function MobileNavbar({ isMobileMenuOpen, toggleMobileMenu }) {
    const navigate = useNavigate();

    function handleToLogin() {
        navigate('/login');
    }

    function handleToSignUp() {
        navigate('/create-account');
    }

    return (
        <ul
            id="mobileNavbar"
            className={`fixed top-[5.42rem] right-0 h-screen w-full bg-slate-200 shadow-xl lg:hidden transition-transform duration-500 ease-in-out transform ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } z-50`}
        >
            <li className="text-center mt-8 px-4">
                <input
                    type="text"
                    className="rounded-lg w-full p-2"
                    placeholder=" Search in AdoptPets "
                />
            </li>
            <li className="text-center mt-4 px-4">
                <a
                    href="#"
                    className="text-white bg-paleBlue rounded-md font-Sawa py-3  px-8 font-medium bg-slate-700 block w-2/4 mx-auto mb-8"
                    onClick={toggleMobileMenu}
                >
                    Search
                </a>
            </li>

            <NavListMobile title="Home" href="#sec-home" toggleMobileMenu={toggleMobileMenu} />
            <NavListMobile title="Community" href="#sec-community" toggleMobileMenu={toggleMobileMenu} />
            <NavListMobile title="Choose Pets" href="#sec-choosepets" toggleMobileMenu={toggleMobileMenu} />
            <NavListMobile title="FAQ" href="#sec-faq" toggleMobileMenu={toggleMobileMenu} />
            <NavListMobile title="Support Us!" href="#sec-support" toggleMobileMenu={toggleMobileMenu} />
            
            <li className="text-center mt-12 px-4">
                <a
                    
                    className="text-white bg-paleBlue rounded-md font-Sawa py-4 px-8 font-medium bg-slate-700 block w-2/3 mx-auto"
                    onClick={handleToLogin}
                >
                    Sign In
                </a>
            </li>
            <li className="text-center mt-4 px-4">
                <a
                    
                    className="text-white bg-paleBlue rounded-md font-Sawa py-4 px-8 font-medium bg-slate-700 block w-2/3 mx-auto"
                    onClick={handleToSignUp}
                >
                    Sign up
                </a>
            </li>
        </ul>
    )
}

MobileNavbar.propTypes = {
    isMobileMenuOpen: PropTypes.bool.isRequired,
    toggleMobileMenu: PropTypes.func.isRequired,
};

export default MobileNavbar;
