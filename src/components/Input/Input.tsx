import { FC, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<any>;
    field: string;
    errorMessage?: string;
}

const Input: FC<IInput> = ({ register, field, errorMessage, ...rest }) => {
    return (
        <div>
            <input {...rest} {...register(field)} />
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default Input;
