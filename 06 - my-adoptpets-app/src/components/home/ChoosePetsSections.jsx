import PetsCardTemplate from "../utils/PetsCardTemplate";

function ChoosePetsSection() {
    return (
      <section id="sec-choosepets">
        <div className="container xl:pb-32 lg:pb-32 md:pb-12"></div>
        <div id="pet-lists">
          <div className="container mx-auto px-5 lg:px-8 pb-12 mb-16">
            <div className="mb-16" id="petlist-title">
              <h5 className="text-lightBlue tracking-wider mb-3 md:text-base lg:text-xl font-bold text-sm font-Sawa">
                ADOPT A PET NOW!
              </h5>
              <h1 className="text-secondBlack text-2xl font-semibold md:text-3xl leading-normal lg:leading-normal lg:max-w-md lg:text-4xl font-Inter mb-7">
                We Have Several Friends That Need Companion
              </h1>
              <p className="text-secondGray font-Sawa text-base md:max-w-lg lg:text-xl md:text-lg mb-10">
                What are you waiting for? Let’s discover your perfect companions now!
              </p>
            </div>
  
            <div id="adoptpets-filter" className="grid grid-cols-4 items-center max-w-sm ml-auto mb-16">
              <div className="border-[3px] cursor-pointer bg-paleBlue text-black duration-200 ease-in-out group py-2 hover:bg-slate-700">
                <p className="text-base font-Inter font-medium text-center group-hover:text-white duration-200 ease-in-out">
                  ALL
                </p>
              </div>
              <div className="border-[3px] cursor-pointer border-paleBlue/75 hover:bg-paleBlue text-paleBlue duration-200 ease-in-out group py-2 hover:bg-slate-700">
                <p className="text-base font-Inter font-medium text-center group-hover:text-white duration-200 ease-in-out">
                  CATS
                </p>
              </div>
              <div className="border-[3px] cursor-pointer border-paleBlue/75 hover:bg-paleBlue text-paleBlue duration-200 ease-in-out group py-2 hover:bg-slate-700">
                <p className="text-base font-Inter font-medium text-center group-hover:text-white duration-200 ease-in-out">
                  DOGS
                </p>
              </div>
              <div className="border-[3px] cursor-pointer bg-paleBlue text-black duration-200 ease-in-out group py-2 hover:bg-slate-700">
                <p className="text-base font-Inter font-medium text-center group-hover:text-white duration-200 ease-in-out">
                  OTHERS
                </p>
              </div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center">
              {/* Pet Card Template */}
              <PetsCardTemplate />
              {/* Repeat for other pets... */}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default ChoosePetsSection;
  