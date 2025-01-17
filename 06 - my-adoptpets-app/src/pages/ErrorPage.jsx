
import ErrorHeader from "../components/error/ErrorHeader";
import Footer from "../components/utils/Footer";
import ErrorBody from "../components/error/ErrorBody";

function ErrorPage() {
    return (
        <>
            
            <div className="scrollbar-thin scrollbar-thumb-linearBlue scrollbar-thumb-rounded-lg bg-slate-300  ">
                <ErrorHeader />

                <ErrorBody />

                <Footer />
            </div>
        </>
    );
}

export default ErrorPage;
