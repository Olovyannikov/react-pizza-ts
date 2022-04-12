import { Container } from '@/ui';
import { Layout } from 'client/app/layouts/main/Layout';
import { FilterSort } from './FilterSort';
import { PizzaList } from './PizzaList';
import { IndexProps } from './props';

export const Index = ({ pizzas }: IndexProps): JSX.Element => {
    return (
        <Layout>
            <Container>
                <FilterSort />
                <PizzaList pizzas={pizzas} />
            </Container>
        </Layout>
    );
};
