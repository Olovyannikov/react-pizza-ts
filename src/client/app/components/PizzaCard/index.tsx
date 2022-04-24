import { addToCart } from '@/store/models/cart/actions';
import { AddToCart } from '@/types/addToCart.type';
import { Button } from '@/ui';
import cn from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Plus from './img/Plus.svg';
import s from './styles.module.scss';
import { PizzaCardProps } from './props';

export const PizzaCard = ({ pizza }: PizzaCardProps): JSX.Element => {
    const dispatch = useDispatch();

    const types = ['Тонкое', 'Традиционное'];
    const sizes: [number, number, number] = [26, 30, 40];

    const [pizzasCount, setPizzasCount] = useState<number>(0);
    const [type, setType] = useState<0 | 1>(pizza.types[0]);
    const [size, setSize] = useState<26 | 30 | 40>(pizza.sizes[0]);
    const [toCart, setToCart] = useState<AddToCart | null>(null);

    const addPizzaToCart = (object: AddToCart | null) => {
        object !== null && dispatch(addToCart(object));
    }

    useEffect(() => {
        addPizzaToCart(toCart);
    }, [toCart, pizzasCount]);

    const onTypeChangeClick = (type: 0 | 1) => setType(type);
    const onSizeChangeClick = (size: 26 | 30 | 40) => setSize(size);

    return (
        <article className={s.pizza}>
            <div className={s.image}>
                <Image width={260} height={260} src={pizza.imageUrl} />
            </div>
            <h2 className={s.name}>{pizza.name}</h2>
            <div className={s.options}>
                <ul className={s.group}>
                    {types.map((pizzaType, idx) => (
                        <li key={`${type}_${idx}`}>
                            <button
                                onClick={() => onTypeChangeClick(idx as 0 | 1)}
                                className={cn(type === idx && s.active)}
                                disabled={!pizza.types.includes(idx as 0 | 1)}>
                                {pizzaType}
                            </button>
                        </li>
                    ))}
                </ul>
                <ul className={s.group}>
                    {sizes.map((pizzaSize, i) => (
                        <li key={`${pizzaSize}_${i}`}>
                            <button
                                onClick={() => onSizeChangeClick(pizzaSize as 26 | 30 | 40)}
                                className={cn(pizzaSize === size && s.active)}
                                disabled={!pizza.sizes.includes(pizzaSize as 26 | 30 | 40)}>
                                {pizzaSize} см.
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={s.controls}>
                <span className={s.price}>
                    от {pizza.price} <span className='rouble'>₽</span>
                </span>
                <Button
                    className={s.add}
                    onClick={() => {
                        setToCart({
                            id: pizza.id,
                            name: pizza.name,
                            type: type,
                            size,
                            price: pizza.price,
                            pizzasCount: pizzasCount + 1,
                            img: pizza.imageUrl
                        });
                        setPizzasCount(pizzasCount + 1);
                    }}
                    size='sm'
                    variant='outlined'
                >
                    <Plus />
                    Добавить
                    {pizzasCount > 0 && <span className={s.count}>{pizzasCount}</span>}
                </Button>
            </div>
        </article>
    );
};
