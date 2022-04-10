import { Layout } from 'client/app/layouts/main/Layout';
import { FilterSort } from './FilterSort';
import { IndexProps } from './props';

export const Index = ({ pizzas }: IndexProps): JSX.Element => {
    return (
        <Layout>
            <FilterSort />
        </Layout>
    );
};
