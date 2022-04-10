import CartIcon from './img/cart.svg';

import s from './styles.module.scss';
import { CartButtonProps } from './props';

export const CartButton = ({ total, count }: CartButtonProps): JSX.Element => {
    return (
        <button className={s.cart} aria-label={`Итоговая сумма заказа ${total} рублей. Перейти в корзину.`}>
            <span className={s.total}>
                {total} <span className='rouble'>₽</span>
            </span>
            <span className={s.count}>
                <CartIcon />
                {count}
            </span>
        </button>
    );
};
