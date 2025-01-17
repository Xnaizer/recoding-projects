import {  useNavigate } from 'react-router-dom'; // To handle navigation


import SponsorHighlightMoving from '../utils/SponsorHighlightMoving';

function TermsAndPrivacyBody() {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/'); // Navigate to the home page
    };

    return (
        <>
            {/* Terms and Privacy Section */}
            <section id="sec-terms-privacy" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 md:p-12">
                
                <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
                    {/* Heading */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">AdoptPets’s Conditions of Use</h1>
                        <p className="text-lg text-gray-600">Please read our terms and privacy notice carefully before using our services.</p>
                    </div>

                    {/* Terms Content */}
                    <div className="space-y-8">
                        <h2 className="text-xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
                        <p>
                            By visiting our platform or engaging with our services, you agree to abide by these Conditions of Use. If you do not agree, you may not access or use our services.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800">2. Use of the Platform</h2>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>You must be at least 18 years old or have parental/guardian consent to use our services.</li>
                            <li>All information provided must be accurate, complete, and up-to-date.</li>
                            <li>You agree not to misuse the platform for any illegal activities, including fraud, abuse, or harm to animals.</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-800">3. Animal Welfare Commitment</h2>
                        <p>
                            By adopting a pet, you agree to provide a safe, caring, and appropriate environment for the animal. AdoptPets reserves the right to assess your suitability as an adopter and may deny applications if deemed necessary for the welfare of the animal.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800">4. Intellectual Property</h2>
                        <p>
                            All content on the platform, including text, images, logos, and videos, is the property of AdoptPets and is protected under intellectual property laws. You may not reproduce, distribute, or use content without explicit permission from AdoptPets.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800">5. Limitation of Liability</h2>
                        <p>
                            AdoptPets strives to ensure accurate information and responsible placements but does not guarantee the health or behavior of any pet. We are not liable for any damages, direct or indirect, arising from the use of our services.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800">6. Modifications</h2>
                        <p>
                            AdoptPets reserves the right to update or modify these Conditions of Use at any time. Continued use of the platform constitutes your acceptance of such changes.
                        </p>

                        <h1 className="text-3xl font-bold text-gray-800 mt-12 mb-6">AdoptPets’s Privacy Notice</h1>
                        <p className="text-lg text-gray-600 mb-6">Your privacy is important to us at AdoptPets. This Privacy Notice explains how we collect, use, and safeguard your information.</p>

                        <h2 className="text-xl font-semibold text-gray-800">1. Information We Collect</h2>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li><strong>Personal Information:</strong> Name, contact details, address, and identification provided during adoption or account registration.</li>
                            <li><strong>Usage Information:</strong> Data about your interaction with our website, including IP address, browser type, and browsing behavior.</li>
                            <li><strong>Pet-Related Information:</strong> Details about your preferences or environment to match you with suitable pets.</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-800">2. How We Use Your Information</h2>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>To facilitate the adoption process and ensure the welfare of the pets.</li>
                            <li>To communicate updates, respond to inquiries, and send notifications related to your use of our services.</li>
                            <li>To improve our platform and customize your experience.</li>
                            <li>To comply with legal obligations and enforce our policies.</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-800">3. Sharing Your Information</h2>
                        <p>
                            We do not sell, rent, or trade your personal information. Information may be shared with trusted third parties, such as veterinary clinics or animal welfare organizations, to support the adoption process. Data may be disclosed if required by law or to protect the safety of our users, pets, or platform.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800">4. Data Security</h2>
                        <p>
                            We implement strict security measures to protect your information from unauthorized access, alteration, or disclosure. However, no online platform is completely secure, and we encourage you to take precautions when sharing sensitive data.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800">5. Cookies and Tracking</h2>
                        <p>
                            AdoptPets uses cookies to enhance user experience, analyze website traffic, and provide tailored content. You can manage cookie preferences through your browser settings.
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800">6. Your Rights</h2>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Access, update, or delete your personal information by contacting us directly.</li>
                            <li>Opt-out of marketing communications at any time.</li>
                            <li>Request details about the data we hold about you.</li>
                        </ul>

                        <h2 className="text-xl font-semibold text-gray-800">7. Updates to This Privacy Notice</h2>
                        <p>
                            AdoptPets reserves the right to modify this Privacy Notice as needed. Changes will be posted on our website with the updated date.
                        </p>

                        <p className="text-lg text-gray-600 mt-6">
                            For any questions about our Conditions of Use or Privacy Notice, please contact us at <a href="mailto:support@adoptpets.com" className="text-blue-500">support@adoptpets.com</a>.
                        </p>
                    </div>

                    {/* Back Button */}
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={handleBackToHome}
                            className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </section>

            <SponsorHighlightMoving />
        </>
    );
}

export default TermsAndPrivacyBody;
