import { CartActions } from '@/store/models/cart/types';
import { AddToCart } from '@/types/addToCart.type';

export const addToCart = (payload: AddToCart) => ({
    type: CartActions.ADD_TO_CART,
    payload
});

export const clearCart = () => ({
    type: CartActions.CLEAR_CART
});

export const setTotalCount = (payload: number) => ({
    type: CartActions.SET_TOTAL_COUNT,
    payload
});

export const removeCartItem = (payload: number) => ({
    type: CartActions.REMOVE_CART_ITEM,
    payload
});

export const incCartItem = (payload: number) => ({
    type: CartActions.PLUS_CART_ITEM,
    payload
});

export const decCartItem = (payload: number) => ({
    type: CartActions.MINUS_CART_ITEM,
    payload
});
