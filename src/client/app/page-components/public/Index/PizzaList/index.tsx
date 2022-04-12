import { PizzaCard } from '@/components';
import { PizzaListProps } from './props';
import s from './styles.module.scss';

export const PizzaList = ({ pizzas }: PizzaListProps): JSX.Element => {
    return (
        <section className={s.section}>
            <h2>Все пиццы</h2>
            <ul className={s.list}>
                {pizzas &&
                    pizzas.map((pizza) => (
                        <li key={pizza.id}>
                            <PizzaCard pizza={pizza} />
                        </li>
                    ))}
            </ul>
        </section>
    );
};
