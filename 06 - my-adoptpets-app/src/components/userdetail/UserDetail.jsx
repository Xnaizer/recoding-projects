import { useEffect, useState } from 'react';
import HomeLogoIcon from '../../assets/img/pets.png';
import SponsorHighlightMoving from '../utils/SponsorHighlightMoving';
import { useNavigate } from 'react-router-dom';

function UserDetail() {
    const navigate = useNavigate();
    function handleBackToHome() {
        navigate('/'); // This will navigate to the home page
    }

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Dummy data as fallback
    const mockData = {
        name: 'Lucky Welthmon',
        email: 'lucky@example.com',
        birthDate: '1990-01-01',
        gender: 'Male',
        photo: HomeLogoIcon,
    };

    useEffect(() => {
        // Simulate fetching data from backend
        const fetchUserData = async () => {
            try {
                // Uncomment this block if you have a backend
                // const response = await fetch('https://api.example.com/users/1'); // Replace with your API endpoint
                // if (!response.ok) {
                //     throw new Error('Failed to fetch user data');
                // }
                // const data = await response.json();
                // setUserData(data);

                // Simulate a successful fetch with mock data
                throw new Error('Backend unavailable, using mock data.');
            } catch (err) {
                // Use mock data if the fetch fails
                console.warn(err.message);
                setUserData(mockData);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);



    if (loading) {
        return <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 text-lg font-semibold">Loading...</div>;
    }

    return (
        <>
            {/* User Profile Section */}
            <section id="sec-user-profile" className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-slate-100 p-6">
                {/* User Details */}
                <div className="bg-white p-10 md:p-14 rounded-2xl shadow-2xl w-full md:w-2/3 transform transition duration-500 hover:scale-105">
                    <button
                        onClick={handleBackToHome} // Close tab functionality
                        className="text-lg font-semibold text-black hover:text-red-500 mb-8  px-6 py-3 rounded-lg hover:bg-slate-800"
                    >
                        ❌ Close Tab
                    </button>
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        {/* User Image */}
                        <div className="w-full lg:w-1/3">
                            <img
                                src={userData.photo}
                                alt={userData.name}
                                className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition duration-300"
                            />
                        </div>

                        <div className="w-full lg:w-2/3 justify-center">
                            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">{userData.name}</h2>
                            <p className="text-gray-600 mb-3 text-lg"><strong>Email:</strong> {userData.email}</p>
                            <p className="text-gray-600 mb-3 text-lg"><strong>Birth Date:</strong> {userData.birthDate}</p>
                            <p className="text-gray-600 mb-3 text-lg"><strong>Gender:</strong> {userData.gender}</p>
                        </div>

                        
                    </div>
                </div>
            </section>

            <SponsorHighlightMoving />
        </>
    );
}

export default UserDetail;
