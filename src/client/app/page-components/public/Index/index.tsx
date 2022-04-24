import { getFilterByCategory, getFilterByType } from '@/store/models/filters/selectors';
import { fetchPizzas } from '@/store/models/pizzas/actions';
import { getPizzas } from '@/store/models/pizzas/selectors';
import { Container } from '@/ui';
import { Layout } from 'client/app/layouts/main/Layout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterSort } from './FilterSort';
import { PizzaList } from './PizzaList';
import { IndexProps } from './props';

export const Index = ({pizzas}: IndexProps): JSX.Element => {
    const dispatch = useDispatch();
    const items = useSelector(getPizzas);
    const category = useSelector(getFilterByCategory);
    const type = useSelector(getFilterByType);

    useEffect(() => {
        dispatch(fetchPizzas(type, category));
    }, [type, category]);

    return (
        <Layout>
            <Container>
                <FilterSort />
                <PizzaList pizzas={ items } />
            </Container>
        </Layout>);
};
