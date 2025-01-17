import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import ErrorLogoIcon from '../../assets/img/error.png';
import PetsLineIcon from '../../assets/img/petslistlong.png';

import SponsorHighlightMoving from '../utils/SponsorHighlightMoving';

function ErrorBody() {
    const navigate = useNavigate(); // Create a navigate function using the useNavigate hook

    const handleBackToHome = () => {
        navigate('/'); // This will navigate to the home page
    };

    return (
        <>
            {/* Error Section */}
            <section id="sec-error" className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-6">
                <div className="flex flex-col items-center">
                    {/* Error Image */}
                    <img
                        src={ErrorLogoIcon}
                        alt="Error icon indicating something went wrong"
                        className="w-[24rem] mb-6" // Added some size and spacing
                    />

                    <h2 className="text-xl font-bold text-gray-800 mb-4">Something Went Wrong!</h2>
                    <p className="text-md text-gray-600 mb-4">
                    We&apos;re sorry, but an unexpected error occurred. Please try again later.
                    </p>

                    {/* Back to Home Button */}
                    <button
                        onClick={handleBackToHome} // Use onClick to trigger navigate
                        className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-lg mt-4 transition duration-300"
                    >
                        Back To Home
                    </button>
                </div>

                {/* Decorative Image */}
                <img
                    src={PetsLineIcon}
                    alt="Pets list graphic"
                    className="mt-10 w-full max-w-4xl" // Ensure it's responsive
                />
            </section>

            <SponsorHighlightMoving />
        </>
    );
}

export default ErrorBody;
