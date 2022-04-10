import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type ButtonVariant = 'contained' | 'outlined' | 'text';

type ButtonSize = 'sm' | 'md';

type ButtonColor = 'primary' | 'secondary' | 'info';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    href?: string;
    as?: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: ButtonColor;
}
