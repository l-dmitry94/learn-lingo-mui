import { FC } from 'react';
import clsx from 'clsx';
import { icons } from 'assets/icons';
import { IButton, Style } from './Button.types';
import scss from './Button.module.scss';

const Button: FC<IButton> = ({ buttonStyle, children, ...rest }) => {
    return (
        <button
            {...rest}
            className={clsx(
                scss.button,
                buttonStyle === Style.Primary && scss.buttonPrimary,
                buttonStyle === Style.Secondary && scss.buttonSecondary,
                buttonStyle === Style.Login && scss.buttonLogin,
                buttonStyle === Style.Registration && scss.buttonRegistration,
                buttonStyle === Style.Burger && scss.buttonBurger,
                buttonStyle === Style.Close && scss.buttonClose
            )}
        >
            {buttonStyle === Style.Login && (
                <svg className={scss.loginIcon}>
                    <use href={`${icons}#icon-login`}></use>
                </svg>
            )}
            {children}
        </button>
    );
};

export default Button;
