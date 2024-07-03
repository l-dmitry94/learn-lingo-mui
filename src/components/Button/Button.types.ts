import { ButtonHTMLAttributes } from 'react';

export enum Style {
    Primary,
    Secondary,
    Registration,
    Login,
    Burger,
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonStyle: Style;
}
