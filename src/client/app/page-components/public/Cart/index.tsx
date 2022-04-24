import { CartEmpty } from '@/components';
import { getCartItems } from '@/store/models/cart/selectors';
import { Layout } from 'client/app/layouts/main/Layout';
import { useSelector } from 'react-redux';
import { CartItems } from './CartItems';

export const Cart = (): JSX.Element => {
    const cart = useSelector(getCartItems);

    return (
        <Layout>
            {Object.keys(cart).length > 0 ?  <CartItems/> : <CartEmpty/>}
        </Layout>
    );
};
