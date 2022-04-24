import { getCartItems } from '@/store/models/cart/selectors';
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlusIcon from './img/plus.svg';
import MinusIcon from './img/minus.svg';
import CrossIcon from './img/cross.svg';
import s from './styles.module.scss';
import { CartItemProps } from './props';
import { decCartItem, incCartItem, removeCartItem } from '@/store/models/cart/actions';

export const CartItem = ({id, image, name, type, size, count = 0, total}: CartItemProps): JSX.Element => {
    const dispatch = useDispatch();
    const typeMap = ['тонкое тесто', 'классическое тесто'];

    const onRemoveCartItemHandler = () => {
        if(window.confirm('Удалить пиццу?')) dispatch(removeCartItem(id));
    };

    const onIncrementCartItemHandler = () => dispatch(incCartItem(id));
    const onDecrementCartItemHandler = () => {
        dispatch(decCartItem(id));
        if (count <= 1) onRemoveCartItemHandler();
    };

    return (
        <li className={s.item}>
            <div className={s.img}>
                <Image width={80} height={80} src={image} alt={name}/>
            </div>
            <div className={s.itemName}>
                <b>{name}</b>
                <span>{typeMap[type]}, {size} см.</span>
            </div>
            <div className={s.itemCounter}>
                <button aria-label='Убрать товар из корзины' onClick={onDecrementCartItemHandler}><MinusIcon/></button>
                <b>{count}</b>
                <button aria-label='Добавить товар в корзину' onClick={onIncrementCartItemHandler}><PlusIcon/></button>
            </div>
            <div className={s.total}>
                <b>{ total } ₽ </b>
            </div>
            <button className={s.cross} aria-label='Убрать товар из корзины' onClick={onRemoveCartItemHandler}><CrossIcon/></button>
        </li>
    );
};
