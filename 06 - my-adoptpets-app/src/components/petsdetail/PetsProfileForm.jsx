import { useEffect, useState } from 'react';
// import googleLogoIcon from '../../assets/img/7123025_logo_google_g_icon.png';
import HomeLogoIcon from '../../assets/img/pets.png';
import SponsorHighlightMoving from '../utils/SponsorHighlightMoving';
import { useNavigate } from 'react-router-dom';

function PetsProfileForm() {
    const navigate = useNavigate();
    function handleBackToHome() {
        navigate('/'); // This will navigate to the home page
    }

    function handleToFeedbackForm(){
        navigate('/feedback-form');
    }

    function handleToSupportHome(){
        navigate('/#sec-support');
    }

    const [petData, setPetData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Dummy data as fallback
    const mockData = {
        name: 'Lucky Welthmon',
        type: 'Dog',
        age: 3,
        gender: 'Male',
        location: 'Jakarta, Indonesia',
        contact: '0812-3456-7890',
        photo: HomeLogoIcon,
    };

    useEffect(() => {
        // Simulate fetching data from backend
        const fetchPetData = async () => {
            try {
                // Uncomment this block if you have a backend
                // const response = await fetch('https://api.example.com/pets/1'); // Replace with your API endpoint
                // if (!response.ok) {
                //     throw new Error('Failed to fetch pet data');
                // }
                // const data = await response.json();
                // setPetData(data);

                // Simulate a successful fetch with mock data
                throw new Error('Backend unavailable, using mock data.');
            } catch (err) {
                // Use mock data if the fetch fails
                console.warn(err.message);
                setPetData(mockData);
            } finally {
                setLoading(false);
            }
        };

        fetchPetData();
    }, []);

    // const handleAdoptClick = () => {
    //     alert(`Thank you for adopting ${petData?.name || 'this pet'}!`);
    // };

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 text-lg font-semibold">Loading...</div>;
    }

    return (
        <>
            {/* Pet Profile Section */}
            <section id="sec-pet-profile" className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-slate-100 p-6">
                {/* Pet Details */}
                <div className="bg-white p-10 md:p-14 rounded-2xl shadow-2xl w-full md:w-2/3 transform transition duration-500 hover:scale-105">
                    <button
                        onClick={handleBackToHome}
                        className="text-lg font-semibold text-black hover:text-red-500 mb-8  px-6 py-3 rounded-lg hover:bg-slate-800"
                    >
                        ❌ Close Tab
                    </button>
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        {/* Pet Image */}
                        <div className="w-full lg:w-1/3">
                            <img
                                src={petData.photo}
                                alt={petData.name}
                                className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition duration-300"
                            />
                        </div>

                        {/* Pet Details */}
                        <div className="w-full lg:w-2/3 justify-center">
                            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">{petData.name}</h2>
                            <p className="text-gray-600 mb-3 text-lg"><strong>Animal Type:</strong> {petData.type}</p>
                            <p className="text-gray-600 mb-3 text-lg"><strong>Pets Age:</strong> {petData.age} tahun</p>
                            <p className="text-gray-600 mb-3 text-lg"><strong>Gender:</strong> {petData.gender}</p>
                            <p className="text-gray-600 mb-3 text-lg"><strong>Location:</strong> {petData.location}</p>
                            <p className="text-gray-600 mb-3 text-lg"><strong>Contact:</strong> {petData.contact}</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4 justify-center">
                        <button
                            
                            className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-transform transform hover:scale-105"
                        >
                            🐾 Adopt Pet
                        </button>
                        <button
                            onClick={handleToSupportHome}
                            className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-transform transform hover:scale-105"
                        >
                            📱 Contact
                        </button>
                        <button
                            onClick={handleToFeedbackForm}
                            className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-transform transform hover:scale-105"
                        >
                            ⚠️ Report This Page
                        </button>
                    </div>
                </div>
            </section>

            <SponsorHighlightMoving />
        </>
    );
}

export default PetsProfileForm;