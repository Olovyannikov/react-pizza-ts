import { getCart } from '@/store/models/cart/selectors';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Chevron from './img/chevron.svg';
import { Button } from '@/ui';
import s from './styles.module.scss';

export const CartFooter = (): JSX.Element => {
    const router = useRouter();
    const order = useSelector(getCart);
    const {totalPrice, totalCount} = useSelector(getCart);

    const onBackClick = () => router.back();

    const orderCart = Object.values(order.items).map((item: any) => item.items[0]);

    const onOrderClickHandler = () => {
        if (window.confirm('Оплатить заказ?')) console.log(orderCart);
    }

    return (
        <footer>
            <div className={s.info}>
                <span className={s.count}>Всего пицц: <b>{totalCount} шт.</b></span>
                <span className={s.bill}>Сумма заказа: <b>{ totalPrice } ₽</b></span>
            </div>
            <div className={s.controls}>
                <Button onClick={onBackClick} color='secondary' variant='outlined'><Chevron/>Вернуться назад</Button>
                <Button onClick={onOrderClickHandler}>Оплатить сейчас</Button>
            </div>
        </footer>
    );
};
