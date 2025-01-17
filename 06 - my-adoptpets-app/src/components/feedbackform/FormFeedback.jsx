import { useState } from "react";
import SponsorHighlightMoving from "../utils/SponsorHighlightMoving";
import { useNavigate } from "react-router-dom";

function FormFeedback() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simpan data form atau kirim ke server
        console.log(formData);
    };

    function handleBackToHome() {
        navigate('/');; // Close the current tab
    }

    return (
        <>
            <div className="bg-slate-100 pt-20">
            <div className="bg-white p-10 md:p-14 rounded-2xl w-full max-w-2xl mx-auto shadow-xl ">
                <button
                    onClick={handleBackToHome} // Close tab functionality
                    className="text-lg font-semibold text-black hover:text-red-500 mb-8  px-6 py-3 rounded-lg hover:bg-slate-800"
                >
                    ❌ Close Tab
                </button>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center ">Feedback Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nama */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2 text-left">Nama:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full h-12 rounded-xl bg-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            placeholder="Masukkan nama Anda..."
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2 text-left">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full h-12 rounded-xl bg-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            placeholder="Masukkan email Anda..."
                        />
                    </div>

                    {/* Subject */}
                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-gray-700 text-lg font-medium mb-2 text-left">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full h-12 rounded-xl bg-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            placeholder="Masukkan subjek pesan..."
                        />
                    </div>

                    {/* Deskripsi */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 text-lg font-medium mb-2 text-left">Deskripsi:</label>
                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Masukkan feedback atau deskripsi di sini..."
                            required
                        ></textarea>
                    </div>

                    {/* Button Submit */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-2/3 p-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600"
                        >
                            Kirim Feedback
                        </button>
                    </div>
                </form>

            </div>
            <div className="pt-20">
                <SponsorHighlightMoving />  
            </div>
            </div>
        </>
    );
}

export default FormFeedback;
