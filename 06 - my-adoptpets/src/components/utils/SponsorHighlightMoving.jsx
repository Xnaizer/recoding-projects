// SponsorHighlightMoving.jsx


import SponsorHighlight from './SponsorHighlight'; // Pastikan path sudah benar

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

import '../../assets/css/SponsorHighlightMoving.css'; 

const sponsors = [
    googlePicture,
    facebookPicture,
    samsungPicture,
    spotifyPicture,
    linkedinPicture,
    amazonPicture,
    instagramPicture,
    paypalPicture,
    soundcloudPicture,
    walmartPicture,
    xboxPicture,
    ebayPicture,
];

function SponsorHighlightMoving() {
    // Duplikasi array sponsors dua kali untuk seamless looping
    const duplicatedSponsors = [...sponsors, ...sponsors];

    return (
        <div className='w-full bg-slate-100 text-center pb-8 hidden lg:block'>
            <h1 className='font-semibold text-lg pb-4'>HIGHLY SUPPORTED BY</h1>
            <div className='w-full overflow-hidden'>
                <div className="flex flex-nowrap animate-marquee ">
                    {duplicatedSponsors.map((sponsor, index) => (
                        <SponsorHighlight key={index} links={sponsor} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SponsorHighlightMoving;
