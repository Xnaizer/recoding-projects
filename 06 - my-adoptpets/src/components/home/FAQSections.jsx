import  { useState} from 'react';

function FAQSections() {
    // State untuk melacak FAQ yang terbuka
    const [openFAQ, setOpenFAQ] = useState(null);

    // Data FAQ
    const faqs = [
        {
            id: 1,
            question: "What is AdoptPets?",
            answer: "AdoptPets is a platform dedicated to connecting animals in need with loving families. We facilitate the adoption of pets from shelters and rescue organizations, helping to find them forever homes."
        },
        {
            id: 2,
            question: "How does AdoptPets work?",
            answer: "AdoptPets connects users with shelters and rescue organizations to browse available pets. You can search for pets based on your location, preferences, and type of pet you’re looking for. Once you find a match, you can begin the adoption process directly through the platform."
        },
        {
            id: 3,
            question: "Is there a fee to adopt a pet through AdoptPets?",
            answer: "AdoptPets itself does not charge any fees. However, individual shelters or rescue organizations may have their own adoption fees to cover medical care, vaccinations, or other expenses."
        },
        {
            id: 4,
            question: "Can I use AdoptPets to list a pet I’ve found that needs rescuing?",
            answer: "Yes! If you’ve found a pet in need of rescue, you can contact us through our platform or social media, and we will guide you on the next steps to get the pet listed for adoption."
        },
        {
            id: 5,
            question: "How can I support AdoptPets?",
            answer: "You can support AdoptPets by following our social media, sharing our content, or by donating to local shelters and rescues. We also welcome volunteers who want to help spread awareness about animal adoption."
        },
        {
            id: 6,
            question: "Can I foster a pet through AdoptPets?",
            answer: "Yes, fostering is often an option! Some shelters and rescues use AdoptPets to find temporary homes for pets in need. You can contact the shelter or rescue directly through the platform to inquire about fostering opportunities."
        },
        {
            id: 7,
            question: "What types of pets are available for adoption?",
            answer: "AdoptPets works with shelters and rescues that have a wide variety of animals, including dogs, cats, birds, rabbits, and sometimes even more exotic animals like reptiles or farm animals."
        },
        {
            id: 8,
            question: "How do I ensure that the pet I adopt is a good fit for my home?",
            answer: "Each pet listing on AdoptPets provides detailed information about the animal’s personality, needs, and care requirements. We encourage potential adopters to communicate with the shelter or rescue to ensure a good match."
        },
    ];



    // Fungsi untuk menangani toggle FAQ
    const toggleFAQ = (id) => {
        if (openFAQ === id) {
            setOpenFAQ(null); // Tutup jika sudah terbuka
        } else {
            setOpenFAQ(id); // Buka FAQ yang dipilih
        }
    };

    

    return (
        <section id="sec-faq">
            <div className="container xl:pb-24 lg:pb-24 md:pb-12"></div>
            <div className="">
                <div className="container mx-auto px-5 lg:px-8 pt-16 pb-24">
                    <div className="text-center" id="accordion-title">
                        <h5 className="text-lightBlue tracking-wider mb-3 md:text-base lg:text-lg font-bold text-lg font-Sawa">FAQ</h5>
                        <h1 className="text-secondBlack text-2xl font-semibold md:text-3xl xl:max-w-lg mx-auto xl:leading-relaxed lg:text-4xl font-Inter mb-5">Frequently Asked Questions</h1>
                        <p className="text-secondGray font-Sawa text-base md:max-w-xl mx-auto lg:text-2xl md:text-lg mb-8 font-semibold">Discover what others are asking in our FAQ section!</p>
                    </div>
                    <div className="grid grid-cols-1 max-w-4xl cursor-pointer mx-auto" id="accordions">

                        {faqs.map((faq) => (
                            <div key={faq.id} className="group rounded-xl border border-gray-200 bg-slate-100 p-5">
                                <dt
                                    className="flex justify-between items-center cursor-pointer"
                                    aria-controls={`faq-${faq.id}`}
                                    onClick={() => toggleFAQ(faq.id)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            toggleFAQ(faq.id);
                                        }
                                    }}
                                >
                                    <p className="font-semibold text-lg">{`${faq.id}. ${faq.question}`}</p>
                                    <i
                                        className={`ri-arrow-up-s-line text-2xl transition-transform duration-300 ${
                                            openFAQ === faq.id ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    ></i>
                                </dt>
                                <dd
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        openFAQ === faq.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                                    }`}
                                    id={`faq-${faq.id}`}
                                >
                                    <p className="text-lg font-light">{faq.answer}</p>
                                </dd>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQSections;
