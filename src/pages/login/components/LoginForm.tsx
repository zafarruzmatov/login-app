import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const SignUpSchema = z.object({
    password: z
        .string()
        .min(3, { message: "Parol 3 belgidan kam bo'lmasligi kerak !" }),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;
const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

    const onSubmit: SubmitHandler<SignUpSchemaType> = (data) =>
        console.log(data);

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
            <button className="login-form__btn">Kirish</button>
        </form>
    );
};

export default LoginForm;
