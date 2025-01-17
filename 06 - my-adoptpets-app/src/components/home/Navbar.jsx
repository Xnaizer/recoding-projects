// src/components/navbar/Navbar.jsx
import { useState, useEffect } from 'react';
import Logo from "../utils/Logo";
import MobileNavbar from "./MobileNavbar";
import NavbarInput from "../utils/NavbarInput";
import NavbarNavigasi from "./NavbarNavigasi";
import SearchModal from "../utils/SearchModal";

function Navbar() {
  // State untuk melacak apakah halaman telah digulir lebih dari 50px
  const [isScrolled, setIsScrolled] = useState(false);
  
  // State untuk melacak apakah menu mobile terbuka
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State untuk melacak apakah popup search terbuka
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Menambahkan event listener scroll
    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fungsi untuk toggle menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  // Fungsi untuk toggle popup search
  const toggleSearchModal = () => {
    setIsSearchModalOpen(prevState => !prevState);
  };

  // Menonaktifkan scroll saat menu mobile terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Membersihkan kelas saat komponen unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMobileMenuOpen]);

  return (
    <div id="sec-header">
      <header className="pb-32 nav__menu">
        <nav
          className={`p-5 xl:px-7 w-full fixed z-50 transition-colors duration-300 ease-in-out ${
            isScrolled ? 'bg-slate-200 shadow-lg' : 'bg-linearBlue/75'
          }`}
          id="navbar"
        >
          <div className="flex container justify-between mx-auto items-center">
            <div className="flex items-center gap-20 lg:gap-10 xl:gap-20">
              <Logo />
              <NavbarNavigasi />
            </div>

            {/* Pass state dan fungsi toggle ke NavbarInput */}
            <NavbarInput
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
              toggleSearchModal={toggleSearchModal}
            />
          </div>
        </nav>

        {/* Menghilangkan Overlay Gelap */}
        {/* {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
            onClick={toggleMobileMenu}
          ></div>
        )} */}

        {/* Mobile Navbar */}
        <MobileNavbar
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />

        {/* Search Modal */}
        <SearchModal
          isOpen={isSearchModalOpen}
          onClose={toggleSearchModal}
        />
      </header>
    </div>
  );
}

export default Navbar;
