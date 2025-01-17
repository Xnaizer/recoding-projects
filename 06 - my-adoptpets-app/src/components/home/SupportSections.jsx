import thanksPetsPicture from "../../assets/img/thankpets.png";
import MediaSocialCircle from "../utils/MediaSocialCircle";
import SponsorHighlight from "../utils/SponsorHighlight";

import googlePicture from '../../assets/img/Google_2015_logo.svg';
import facebookPicture from '../../assets/img/facebook-1-logo-svgrepo-com.svg';
import samsungPicture from '../../assets/img/samsung-logo-svgrepo-com.svg';
import spotifyPicture from '../../assets/img/spotify-1-logo-svgrepo-com.svg';
import linkedinPicture from '../../assets/img/linkedin-logo-svgrepo-com.svg';
import amazonPicture from '../../assets/img/Amazon_logo.svg';
import instagramPicture from '../../assets/img/instagram-logo-svgrepo-com.svg';
import paypalPicture from '../../assets/img/paypal-logo-svgrepo-com.svg';
import soundcloudPicture from '../../assets/img/soundcloud-logo-svgrepo-com.svg';
import walmartPicture from '../../assets/img/walmart-logo-svgrepo-com.svg';
import xboxPicture from '../../assets/img/xbox-9-logo-svgrepo-com.svg';
import ebayPicture from '../../assets/img/ebay-logo-svgrepo-com.svg';
import FeedBack from "../utils/FeedBack";



function SupportSections() {
    return (
        <section id="sec-support" className="xl:pb-32 lg:pt-16 lg:pb-28 sm:pt-16 sm:pb-20 bg-gradient-to-b from-white to-blue-50 items-center">
            <div className="container xl:pb-8 lg:pb-8 md:pb-8"></div>
            <div className="container mx-auto px-5 lg:px-8 pt-8 pb-4">
                <div className="w-full px-4">
                    <div className="mx-auto text-center mb-8">
                        <h4 className="font-Inter font-bold text-slate-700 text-3xl mb-4 lg:text-4xl">Support Us!</h4>
                        <p className="mt-12 text-xl max-w-2xl mx-auto">Want to help our community grow? Support us by following our social media and reaching out if you find pets in need of rescue!</p>
                        <img 
                            src={thanksPetsPicture} 
                            alt="thankpets-logo" 
                            className="w-[650px] mx-auto mb-10 md:scale-95" 
                            draggable="false"
                        />
                        <div className="mx-auto px-10 lg:px-8 pt-2 pb-24">
                            <div className="flex items-center justify-center">
                                <MediaSocialCircle 
                                nameClass="ri-youtube-fill" 
                                colour="hover:text-red-500"
                                link={"https://www.youtube.com/"}
                                />
                                <MediaSocialCircle 
                                nameClass="ri-instagram-fill" 
                                colour="hover:text-pink-500" 
                                link={"https://www.instagram.com/"}
                                />
                                <MediaSocialCircle 
                                nameClass="ri-linkedin-box-fill" 
                                colour="hover:text-blue-500"
                                link={"https://www.linkedin.com/"}
                                />
                                <MediaSocialCircle 
                                nameClass="ri-line-fill" 
                                colour="hover:text-green-500"
                                link={"https://line.me/en/"}
                                />
                                <MediaSocialCircle 
                                nameClass="ri-whatsapp-fill" 
                                colour="hover:text-green-500"
                                link={"https://web.whatsapp.com/"}
                                />
                            </div>
                        </div>

                        <div className="mx-auto">
                            <FeedBack />
                        </div>
                        
                        <h2 className="font-Inter font-bold text-slate-700 text-3xl mb-4 mt-24 lg:text-3xl">SPECIAL THANKS TO OUR PARTNERSHIPS</h2>
                        <p className="porto-p lg:text-xl font-semibold">Thank You For Trusting AdoptPets.</p>
                    </div>
                </div>

               

                <div className="w-full px-4 mt-12">
                    <div className="flex flex-wrap items-center justify-center max-w-3xl mx-auto">
                        <SponsorHighlight links={googlePicture} />
                        <SponsorHighlight links={facebookPicture} />
                        <SponsorHighlight links={samsungPicture} />
                        <SponsorHighlight links={spotifyPicture} />
                        <SponsorHighlight links={linkedinPicture} />
                        <SponsorHighlight links={amazonPicture} />
                        <SponsorHighlight links={instagramPicture} />
                        <SponsorHighlight links={paypalPicture} />
                        <SponsorHighlight links={soundcloudPicture} />
                        <SponsorHighlight links={walmartPicture} />
                        <SponsorHighlight links={xboxPicture} />
                        <SponsorHighlight links={ebayPicture} />
                    </div>
                </div>
            </div>
        </section>
    );
}



export default SupportSections;