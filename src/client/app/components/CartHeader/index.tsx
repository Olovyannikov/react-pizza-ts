import { clearCart } from '@/store/models/cart/actions';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import s from './styles.module.scss';
import CartIcon from './img/cart.svg';
import TrashIcon from './img/trash.svg';
import { CartHeaderProps } from './props';

export const CartHeader = ({className, ...props}: CartHeaderProps): JSX.Element => {
    const dispatch = useDispatch();

    const onCartClearHandler = () => {
        if (window.confirm('Очистить корзину?')) dispatch(clearCart());
    };

    return (
        <header className={cn(s.header, className)} {...props}>
            <h2><CartIcon />Корзина</h2>
            <button onClick={onCartClearHandler}><TrashIcon />Очистить корзину</button>
        </header>
    );
};
