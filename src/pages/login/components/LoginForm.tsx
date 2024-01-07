import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useAlertContext } from "~context/AlertProvider";
import { useAuthContext } from "~context/AuthProvider";
import { fakeApi } from "~utils/helpers";

const LoginSchema = z.object({
    password: z
        .string()
        .min(3, { message: "Parol 3 belgidan kam bo'lmasligi kerak !" }),
});

type SignUpSchemaType = z.infer<typeof LoginSchema>;
const LoginForm = () => {
    const { setUser } = useAuthContext();
    const { openAlert } = useAlertContext();
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpSchemaType>({ resolver: zodResolver(LoginSchema) });

    const onSubmit: SubmitHandler<SignUpSchemaType> = async (values) => {
        const { password } = values;

        try {
            setLoading(true);
            const res = await fakeApi(password);
            setUser(res);
        } catch (error) {
            openAlert();
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="login-form__item">
                <label className="login-form__label" htmlFor="password">
                    Parolni kiriting
                </label>
                <input
                    className="login-form__input"
                    type="text"
                    id="password"
                    {...register("password")}
                />

                {errors.password && (
                    <span className="login-form__error">
                        {errors.password.message}
                    </span>
                )}
            </div>
            <button disabled={loading} className="login-form__btn">
                Kirish
            </button>
        </form>
    );
};

export default LoginForm;
