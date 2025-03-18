// src/components/home/CommunitySections.jsx


import communityPetsPict from "../../assets/img/compets.png";

import Counter from "../utils/Counter"; // Import Counter

function CommunitySections() {
    return (
        <section id="sec-community">
            <div className="container xl:pb-24 lg:pb-24 md:pb-16"></div>
            <div className="container mx-auto px-5 lg:px-8 pt-16 pb-24">
                <div className="flex-col lg:flex lg:flex-row gap-12 justify-between items-center mb-14 lg:mb-28">
                    <div className="mb-5 lg:mb-0 lg:w-1/2" id="mission-title">
                        <h5 className="text-lightBlue tracking-wider mb-6 md:text-base lg:text-2xl font-bold font-Sawa">
                            OUR ADOPTPETS COMMUNITY
                        </h5>
                        <h1 className="text-secondBlack text-2xl font-semibold md:text-3xl lg:text-4xl font-Inter">
                            We Connect Pets Around the World
                        </h1>
                    </div>
                    <div className="lg:w-1/2" id="mission-paragraph">
                        <p className="text-secondGray font-Sawa text-base md:max-w-lg md:text-lg lg:text-xl">
                            We proudly offer a thriving community for AdoptPets enthusiasts to engage, share their passion for pets, and access valuable resources. Our social media fosters meaningful interactions, connecting you with like-minded individuals and discussions about pet care, adoption stories, and more.
                        </p>
                    </div>
                </div>
                <div className="flex-col lg:flex lg:flex-row gap-12 justify-between items-center">
                    <div className="mb-8 lg:mb-0 lg:w-1/2" id="mission-img">
                        <img
                            className="mx-auto"
                            src={communityPetsPict}
                            alt="community-pets-pict"
                            draggable="false"
                        />
                    </div>
                    <div className="lg:w-1/2" id="mission-community">
                        <div>
                            <h5 className="text-lightBlue tracking-wider mb-6 md:text-base lg:text-2xl font-bold text-sm font-Sawa">
                                ADOPTPETS HALL OF FAME
                            </h5>
                            <h1 className="text-secondBlack text-2xl font-semibold md:text-3xl lg:text-4xl font-Inter mb-5 max-w-lg">
                                Its Been A Tremendous Year For AdoptPets!
                            </h1>
                            <p className="text-secondGray font-Sawa text-base md:max-w-lg lg:text-xl md:text-lg mb-8">
                                Since 2014, AdoptPets has been committed to rescuing animals in need and finding loving companions for them across the globe. Our mission is to connect pets with caring families, ensuring that every animal has a chance for a better life. Through our dedicated efforts, we have helped countless pets find their forever homes, creating lasting bonds between animals and their new owners.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 items-center md:grid-cols-3 md:max-w-sm font-Sawa gap-10" id="stats">
                            
                            <div className="lg:text-center" id="section-c">
                                <h3 className="counter text-paleBlue text-2xl lg:text-3xl mb-3 font-bold">
                                    <Counter end={9824} duration={20000} />
                                </h3>
                                <p className="text-secondGray text-base lg:text-lg">Volunteers</p>
                            </div>

                            <div className="lg:text-center">
                                <h3
                                    className="counter text-paleBlue text-2xl lg:text-3xl mb-3 font-bold"
                                >
                                    <Counter end={10247} duration={20000} />
                                </h3>
                                <p className="text-secondGray text-base lg:text-lg whitespace-nowrap">
                                    Pets Rescued
                                </p>
                            </div>

                            <div className="lg:text-center">
                                <h3
                                    className="counter text-paleBlue text-2xl mb-3 lg:text-3xl font-bold"
                                >
                                    <Counter end={458} duration={2000} />
                                </h3>
                                <p className="text-secondGray text-base lg:text-lg whitespace-nowrap">
                                    Adoption Stores
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CommunitySections;
