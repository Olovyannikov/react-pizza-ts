import { CartItem, CartView } from '@/components';
import { getCartItems } from '@/store/models/cart/selectors';
import { useSelector } from 'react-redux';

export const CartItems = (): JSX.Element => {
    const items = useSelector(getCartItems);
    const pizzasGroup = Object.keys(items).map(k => items[k]);

    return (
        <CartView>
            {
                pizzasGroup.map(item =>
                    <CartItem
                        key={item.items[0].id}
                        id={item.items[0].id}
                        image={item.items[0].img}
                        name={item.items[0].name}
                        type={item.items[0].type}
                        size={item.items[0].size}
                        count={item.items.length}
                        total={item.totalPrice}
                    />
                )
            }
        </CartView>
    );
};
