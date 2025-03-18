import HeaderLogin from "../components/login/HeaderLogin";
import FormLogin from "../components/login/FormLogin";
import Footer from "../components/utils/Footer";

function LoginPage() {
    return (
        <>
            
            <div className="scrollbar-thin scrollbar-thumb-linearBlue scrollbar-thumb-rounded-lg bg-slate-300  ">
                <HeaderLogin />

                <FormLogin />

                <Footer />
            </div>
        </>
    );
}

export default LoginPage;
