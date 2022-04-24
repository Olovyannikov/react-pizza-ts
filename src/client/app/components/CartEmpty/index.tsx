import ShopImg from './img/shop.svg';
import { Button } from '@/ui';
import s from './styles.module.scss';

export const CartEmpty = (): JSX.Element => {
    return (
        <div className={s.empty}>
            <h2>Корзина пустая 😕</h2>
            <p>Вероятней всего, вы не заказывали ещё пиццу.
                Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <ShopImg/>
            <Button href='/' variant='contained' color='secondary'>Вернуться назад</Button>
        </div>
    );
};

