import { PizzaCard, Placeholder } from '@/components';
import { addToCart } from '@/store/models/cart/actions';
import { getLoadingStatus } from '@/store/models/pizzas/selectors';
import { IPizza } from '@/types/pizza.type';
import { useDispatch, useSelector } from 'react-redux';
import { PizzaListProps } from './props';
import s from './styles.module.scss';

export const PizzaList = ({ pizzas }: PizzaListProps): JSX.Element => {
    const isLoaded = useSelector(getLoadingStatus);

    return (
        <section className={ s.section }>
            <h2>Все пиццы</h2>
            <ul className={ s.list }>
                { isLoaded ? pizzas && pizzas.map((pizza) => (<li key={ pizza.id }>
                    <PizzaCard pizza={ pizza } />
                </li>)) : Array(8).fill('').map((_, index) => <li key={ index }><Placeholder /></li>) }
            </ul>

            { !pizzas.length && 'Not found' }
        </section>
    );
};
