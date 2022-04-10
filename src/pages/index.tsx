import { getData } from '@/services';
import { API } from 'client/utils/api';
import { IPizza } from '@/types/pizza.type';
import { Index } from '@/public-app';
import { GetStaticProps } from 'next';

const IndexPage = ({ pizzas }: IndexPageProps[] | any): JSX.Element => <Index pizzas={pizzas as IndexPageProps[]} />;

export default IndexPage;

export const getStaticProps: GetStaticProps = async () => {
    const pizzas = await getData(API.getPizzas);

    return {
        props: { pizzas },
    };
};

interface IndexPageProps extends IPizza {}
