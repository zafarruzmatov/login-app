import LoginForm from "./components/LoginForm";
import LoginAlert from "./components/LoginAlert";

const LoginPage = () => {
    return (
        <div className="login">
            <div className="container">
                <div className="login__wrap">
                    <h2 className="login__title">Assalomu Alaykum</h2>
                    <LoginForm />
                </div>
            </div>

            <LoginAlert />
        </div>
    );
};

export default LoginPage;
