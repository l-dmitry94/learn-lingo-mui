import { yupResolver } from '@hookform/resolvers/yup';
import Input from 'components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

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

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Input
                    register={register}
                    field="name"
                    placeholder="Name"
                    errorMessage={errors.name?.message}
                />
            </div>
        </form>
    );
};

export default RegistrationForm;
