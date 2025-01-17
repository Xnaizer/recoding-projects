// src/components/utils/NavListMobile.jsx

import PropTypes from 'prop-types';

function NavListMobile({ title, href = "#", toggleMobileMenu }) {
    return (
        <li className="text-center mt-4 px-4">
            <a
                href={href}
                className="text-paleBlue font-Sawa text-lg hover:text-slate-700 block"
                onClick={toggleMobileMenu} // Menutup menu saat diklik
            >
                {title}
            </a>
        </li>
    );
}

NavListMobile.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string,
    toggleMobileMenu: PropTypes.func.isRequired,
};

export default NavListMobile;
