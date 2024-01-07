const LoginForm = () => {
    return (
        <form className="login-form">
            <div className="login-form__item">
                <label className="login-form__label" htmlFor="password">
                    Parolni kiriting
                </label>
                <input
                    className="login-form__input"
                    type="text"
                    id="password"
                />
            </div>
            <button className="login-form__btn">Kirish</button>
        </form>
    );
};

export default LoginForm;
