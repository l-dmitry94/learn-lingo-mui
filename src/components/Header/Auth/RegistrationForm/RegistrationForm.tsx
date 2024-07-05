import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from 'components/Input';
import Button, { Style } from 'components/Button';
import scss from './RegistrationForm.module.scss';

interface IRegistrationForm {
    name: string;
    email: string;
    password: string;
}
const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
});

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegistrationForm>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<IRegistrationForm> = (data) => console.log(data);

    const fields = [
        {
            field: 'name',
            placeholder: 'Name',
            errorMessage: errors.name?.message,
        },
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

            <Button buttonStyle={Style.Primary}>Sign Up</Button>
        </form>
    );
};

export default RegistrationForm;
