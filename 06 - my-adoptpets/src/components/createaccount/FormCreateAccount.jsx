import { useState } from 'react';
import googleLogoIcon from '../../assets/img/7123025_logo_google_g_icon.png';
import HomeLogoIcon from '../../assets/img/pets.png';

import SponsorHighlightMoving from '../utils/SponsorHighlightMoving'


function FormCreateAccount() {


    const [password, setPassword] = useState('');
    const [showPasswordMessage, setShowPasswordMessage] = useState(false);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setShowPasswordMessage(e.target.value.length > 0);
    };

    const handlePasswordFocus = () => {
        if (password.length > 0) {
            setShowPasswordMessage(true);
        }
    };

    const handlePasswordBlur = () => {
        if (password.length === 0) {
            setShowPasswordMessage(false);
        }
    };

    return (
        <>
            
            {/* Login Section */}
            <section id="sec-login" className="flex flex-col md:flex-row items-center justify-center min-h-screen z-50 bg-gray-100 p-4">

                {/* Gambar */}
                <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 p-20">
                    <img src={HomeLogoIcon} alt="AdoptPets Logo" className="max-w-full h-auto rounded-xl" />
                </div>

                {/* Form */}
                <form className="bg-white p-8 md:p-12 rounded-xl shadow-md w-full md:w-1/2 max-w-md">
                    <h1 className="text-4xl font-bold text-center">Create Account</h1>
                    <p className="mb-6 mt-4 text-center">
                        Already have an account?{' '}
                        <a href="/login" className="text-blue-500">
                            Sign In
                        </a>
                    </p>

                    <div className="login flex flex-col items-center">
                        <div className="input-container mb-5 w-full flex flex-col items-center">
                            <input
                                type="text"
                                placeholder="Nama"
                                className="w-4/5 h-12 rounded-xl bg-gray-200 px-4 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-4/5 h-12 rounded-xl bg-gray-200 px-4 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                                onFocus={handlePasswordFocus}
                                onBlur={handlePasswordBlur}
                                className="w-4/5 h-12 rounded-xl bg-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        {/* Pesan Password */}
                        {showPasswordMessage && (
                            <p id="fgrtpass" className="text-left w-4/5 mb-4 text-sm text-red-500">
                                *Password must be at least 8 characters.
                            </p>
                        )}
                        <button
                            type="submit"
                            id="btnlgn"
                            className="bg-slate-800 text-white w-24 h-10 sm:w-32 sm:h-14 rounded-2xl hover:bg-slate-600 mt-6 sm:text-sm xl:text-lg transition-transform duration-300"
                        >
                            Sign Up
                        </button>
                    </div>

                    <div className="separator flex items-center justify-between my-8 w-full">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500">or sign up with</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <button
                        id="gglbtn"
                        className="gglbtn flex items-center justify-center w-4/5 h-12 bg-white border border-gray-300 rounded-xl shadow-sm hover:bg-slate-800 md:text-lg mx-auto sm:w-1/2 transition duration-300 p-2"
                    >
                        <img
                            src={googleLogoIcon}
                            alt="Google Logo"
                            className="w-10 h-10 mr-2"
                        />
                        
                    </button>

                    <p
                        id="terms"
                        className="mt-4 text-sm sm:text-sm md:text-md lg:text-md xl:text-md sm:w-3/4 sm:pl-12 text-center"
                    >
                        By continuing, you agree to Adoptpets’s{' '}
                        <a href="/terms-and-privacy" className="text-blue-500">
                            Conditions of Use
                        </a>{' '}
                        and{' '}
                        <a href="/terms-and-privacy" className="text-blue-500">
                            Privacy Notice
                        </a>
                        .
                    </p>
                </form>

                
            </section>
            
            <SponsorHighlightMoving />                
        </>
    );
}

export default FormCreateAccount;
