

function Footer() {
    return (
        <section id="sec-footer" className="">
            <div className="border-t-[1px] border-black pb-6 pt-2 bg-slate-800 ">
                <div
                    id="footer"
                    className="container mx-auto px-3 lg:px-6 flex flex-col md:flex-col lg:flex-row items-center justify-between pt-5 space-y-4 lg:space-y-0 space-x-0 lg:space-x-4"
                >
                    {/* Hak Cipta */}
                    <p className="text-base text-white font-Inter md:text-md  flex items-center">
                        <i className="ri-copyright-line text-white text-md mr-2"></i>
                        2014-2024, AdoptPets.com
                    </p>
                    
                    {/* Kontak Telepon */}
                    <p className="text-base text-white font-Inter md:text-md  flex items-center">
                        <i className="ri-customer-service-fill text-white text-md mr-2"></i>
                        +(62) 813 4245 9204 
                    </p>
                    
                    {/* Kontak Email */}
                    <p className="text-base text-white font-Inter md:text-md  flex items-center">
                        <i className="ri-mail-fill text-white text-md mr-2"></i>
                        adoptpets.business@gmail.com
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
