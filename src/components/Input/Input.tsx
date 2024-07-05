import { FC, HTMLInputTypeAttribute, InputHTMLAttributes, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { icons } from 'assets/icons';
import scss from './Input.module.scss';
import clsx from 'clsx';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<any>;
    field: string;
    errorMessage?: string;
    inputType?: HTMLInputTypeAttribute;
}

const Input: FC<IInput> = ({ register, field, inputType, errorMessage, ...rest }) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

    const handleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <>
            {inputType === 'password' ? (
                <div className={scss.wrapper}>
                    <div className={scss.inputWrapper}>
                        <input
                            {...rest}
                            type={isShowPassword ? 'text' : 'password'}
                            {...register(field)}
                            className={clsx(scss.input, errorMessage && scss.inputError)}
                        />
                        <button
                            type="button"
                            onClick={handleShowPassword}
                            className={scss.eyeButton}
                        >
                            <svg className={scss.eyeIcon}>
                                {isShowPassword ? (
                                    <use href={`${icons}#icon-eye-off`}></use>
                                ) : (
                                    <use href={`${icons}#icon-eye`}></use>
                                )}
                            </svg>
                        </button>
                    </div>
                    {errorMessage && <p className={scss.error}>{errorMessage}</p>}
                </div>
            ) : (
                <div className={scss.wrapper}>
                    <input
                        {...rest}
                        {...register(field)}
                        className={clsx(scss.input, errorMessage && scss.inputError)}
                    />
                    {errorMessage && <p className={scss.error}>{errorMessage}</p>}
                </div>
            )}
        </>
    );
};

export default Input;
