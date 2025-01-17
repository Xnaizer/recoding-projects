import { useState } from 'react';
// import googleLogoIcon from '../../assets/img/7123025_logo_google_g_icon.png';
import HomeLogoIcon from '../../assets/img/pets.png';
import SponsorHighlightMoving from '../utils/SponsorHighlightMoving';
import { useNavigate } from 'react-router-dom';

function FormRegistration() {
    const navigate = useNavigate();
    function handleBackToHome() {
        navigate('/'); // This will navigate to the home page
    }




    // State untuk informasi hewan peliharaan
    const [animalType, setAnimalType] = useState('');
    const [petName, setPetName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);

            // Membuat URL pratinjau gambar
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validasi tambahan bisa dilakukan di sini

        const formData = new FormData();
        formData.append('animalType', animalType);
        formData.append('petName', petName);
        formData.append('gender', gender);
        formData.append('age', age);
        formData.append('location', location);
        formData.append('contactNumber', contactNumber);
        formData.append('image', image);

        // Contoh pengiriman data ke backend menggunakan fetch
        /*
        fetch('YOUR_BACKEND_API_ENDPOINT', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Reset form atau berikan umpan balik kepada pengguna
        })
        .catch((error) => {
            console.error('Error:', error);
            // Tampilkan pesan kesalahan kepada pengguna
        });
        */

        // Untuk sekarang, hanya mencetak data ke konsol
        console.log('Form Data:');
        console.log({
            animalType,
            petName,
            gender,
            age,
            location,
            contactNumber,
            image,
        });

        // Reset form setelah submit
        setAnimalType('');
        setPetName('');
        setGender('');
        setAge('');
        setLocation('');
        setContactNumber('');
        setImage(null);
        setImagePreview(null);
    };

    return (
        <>
            {/* Login Section */}
            <section id="sec-login" className="flex flex-col md:flex-row items-center justify-center min-h-screen z-50 bg-slate-100 p-4 pb-12 pt-12">
                
                {/* Gambar */}
                <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 p-20 flex-col">
                    <img src={HomeLogoIcon} alt="AdoptPets Logo" className="max-w-full h-auto rounded-xl" />
                    <p className='text-left mt-24 text-xl font-thin'>Since its inception in 2014, AdoptPets has been passionately dedicated to rescuing animals in need and placing them in loving homes across the globe. Founded with the belief that every animal deserves a second chance at a happy and fulfilling life, we have worked tirelessly to provide care, shelter, and hope to pets who might otherwise be forgotten.</p>
                    <p className='text-left mt-8 text-xl font-thin'>
                    Our mission is to bridge the gap between animals in need and compassionate families who are eager to provide them with a safe and nurturing environment. Over the years, we have forged countless connections, uniting pets with their forever homes and fostering relationships built on love, trust, and companionship.</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-xl shadow-md w-full md:w-2/3 max-w-lg">
                    <h1 className="text-4xl font-bold text-center">Pets Registration</h1>
                    <p className="mb-10 mt-4 text-center">
                        Need Any Help?{' '}
                        <a href="#" className="text-blue-500">
                            Contact Us!
                        </a>
                    </p>

                    {/* Formulir Informasi Hewan Peliharaan */}
                    <div className="pet-info flex flex-col items-center">
                        {/* Jenis Hewan */}
                        <div className="w-full mb-4">
                            <label htmlFor="animalType" className="block text-left mb-1 font-medium text-gray-700">
                                Animal Type:
                            </label>
                            <input
                                id="animalType"
                                type="text"
                                placeholder="Animal Type"
                                value={animalType}
                                onChange={(e) => setAnimalType(e.target.value)}
                                className="w-full h-12 rounded-xl bg-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Nama Hewan */}
                        <div className="w-full mb-4">
                            <label htmlFor="petName" className="block text-left mb-1 font-medium text-gray-700">
                                Pets Name:
                            </label>
                            <input
                                id="petName"
                                type="text"
                                placeholder="Pets Name"
                                value={petName}
                                onChange={(e) => setPetName(e.target.value)}
                                className="w-full h-12 rounded-xl bg-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Gender */}
                        <div className="w-full mb-4">
                            <span className="block text-left mb-1 font-medium text-gray-700">
                                Gender:
                            </span>
                            <div className="flex justify-start space-x-8 px-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={gender === 'male'}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="mr-2"
                                        required
                                    />
                                    Male
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={gender === 'female'}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="mr-2"
                                        required
                                    />
                                    Female
                                </label>
                            </div>
                        </div>

                        {/* Umur */}
                        <div className="w-full mb-4">
                            <label htmlFor="age" className="block text-left mb-1 font-medium text-gray-700">
                                Age:
                            </label>
                            <input
                                id="age"
                                type="number"
                                placeholder="Age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="w-full h-12 rounded-xl bg-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                min="0"
                                required
                            />
                        </div>

                        {/* Lokasi */}
                        <div className="w-full mb-4">
                            <label htmlFor="location" className="block text-left mb-1 font-medium text-gray-700">
                                Location:
                            </label>
                            <input
                                id="location"
                                type="text"
                                placeholder="Location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full h-12 rounded-xl bg-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Nomor Kontak */}
                        <div className="w-full mb-4">
                            <label htmlFor="contactNumber" className="block text-left mb-1 font-medium text-gray-700">
                                Contact Number:
                            </label>
                            <input
                                id="contactNumber"
                                type="tel"
                                placeholder="Contact Number"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                                className="w-full h-12 rounded-xl bg-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                pattern="[0-9]{10,15}"
                                title="Nomor kontak harus terdiri dari 10 hingga 15 digit angka."
                                required
                            />
                        </div>

                        {/* Upload Gambar */}
                        <div className="w-full mb-4">
                            <label htmlFor="image" className="block text-left mb-1 font-medium text-gray-700">
                                Upload Picture:
                            </label>
                            <input
                                id="image"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="w-full h-12 rounded-xl bg-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Pratinjau Gambar */}
                        {imagePreview && (
                            <div className="w-full mb-4">
                                <label className="block text-left mb-1 font-medium text-gray-700">
                                    Pratinjau Gambar:
                                </label>
                                <img src={imagePreview} alt="Pratinjau" className="w-full h-auto rounded-xl" />
                            </div>
                        )}
                        {/* Terms and Conditions */}
                        <p
                        id="terms"
                        className="mt-4 text-sm sm:text-sm md:text-md lg:text-md xl:text-md  "
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
                        <button
                            type="submit"
                            id="btnlgn"
                            className="bg-slate-700 text-white w-32 h-12 rounded-2xl hover:bg-slate-800 mt-6 text-lg transition-transform duration-300"
                        >
                            Add Pets
                        </button>
                    </div>

                    
                    <div className="separator flex items-center justify-between my-8 w-full">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500">Back To Main Menu</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <button
                        
                        onClick={handleBackToHome}
                        className="bg-slate-700 text-white w-56 h-12 rounded-2xl hover:bg-slate-800 mt-6 text-lg transition-transform duration-300 flex items-center justify-center mx-auto"
                    >
                        Back To Main Menu
                    </button>
                </form>
            </section>

            <SponsorHighlightMoving />
        </>
    );

}
export default FormRegistration;
