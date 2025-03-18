import FormCreateAccount from "../components/createaccount/FormCreateAccount";
import HeaderCreateAccount from "../components/createaccount/HeaderCreateAccount";
import Footer from "../components/utils/Footer";

function CreateAccount() {
    return (
        <div>
            <HeaderCreateAccount />
            <FormCreateAccount />
            <Footer />
        </div>
    );
}

export default CreateAccount;