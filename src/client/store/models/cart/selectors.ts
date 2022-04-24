import { RootState } from '@/store/index';

export const getCartTotalCount = (state: RootState) => state.cart.totalCount;
export const getTotalPrice = (state: RootState) => state.cart.totalPrice;
export const getCartItems = (state: RootState) => state.cart.items;
export const getCart = (state: RootState) => state.cart;
