import cn from 'classnames';
import Link from 'next/link';

import s from './styles.module.scss';
import { ButtonProps } from './props';

export const Button = ({
    children,
    className,
    href,
    variant = 'contained',
    size = 'md',
    as,
    color = 'primary',
    ...props
}: ButtonProps): JSX.Element => {
    if (href && href.length > 0)
        return (
            <Link href={href as string}>
                <a className={cn(className)}>{children}</a>
            </Link>
        );

    return (
        <button className={cn(s.btn, className, s[variant], s[size], s[color])} {...props}>
            {children}
        </button>
    );
};
