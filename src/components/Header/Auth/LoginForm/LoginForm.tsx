import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from 'components/Input';
import Button, { Style } from 'components/Button';
import scss from './LoginForm.module.scss';

interface ILoginForm {
    email: string;
    password: string;
}
const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginForm>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<ILoginForm> = (data) => console.log(data);

    const fields = [
        {
            field: 'email',
            placeholder: 'Email',
            errorMessage: errors.email?.message,
        },
        {
            field: 'password',
            placeholder: 'Password',
            errorMessage: errors.password?.message,
            inputType: 'password',
        },
    ];
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
            <div className={scss.inputList}>
                {fields.map((field) => (
                    <Input key={field.field} register={register} {...field} />
                ))}
            </div>

            <Button buttonStyle={Style.Primary}>Log In</Button>
        </form>
    );
};

export default LoginForm;
