import { useAuthContext } from "~context/AuthProvider";

const HomePage = () => {
    const { logout } = useAuthContext();
    return (
        <div className="home">
            <div className="container">
                <div className="home__wrap">
                    <h1 className="home__title">Saytga xush keldingiz )</h1>
                    <button className="home__btn" onClick={logout}>
                        Login page ga qaytish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
