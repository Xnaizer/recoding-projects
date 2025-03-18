import ChoosePetsSections from "../components/home/ChoosePetsSections";
import CommunitySections from "../components/home/CommunitySections";
import FAQSections from "../components/home/FAQSections";
import HomeSections from "../components/home/HomeSections";
import Navbar from "../components/home/Navbar";
import SupportSections from "../components/home/SupportSections";
import  Footer from "../components/utils/Footer";
import ScrollUpButton from "../components/utils/ScrollUpButton";

function HomePage() {
    return (
        <>
            <div id="bodybag">
                <div className="bg-gradient-to-b from-slate-300 to-white ">
                    <Navbar />
                    <HomeSections />
                </div>
                <CommunitySections />
                <ChoosePetsSections />
                <FAQSections />
                <SupportSections />
                <Footer />
            </div>
            <ScrollUpButton />
        </>
    );
}

export default HomePage;