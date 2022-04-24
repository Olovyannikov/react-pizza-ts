import { Container } from '@/ui';
import cn from 'classnames';
import s from './styles.module.scss';
import { CartFooter, CartHeader } from '@/components';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CartViewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

export const CartView = ({children, className, ...props}: CartViewProps): JSX.Element => {
    return (
        <div className={cn(className)} {...props}>
            <Container className={s.container}>
                <CartHeader/>
                <ul>{children}</ul>
                <CartFooter/>
            </Container>
        </div>
    );
};
