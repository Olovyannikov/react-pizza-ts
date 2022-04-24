export enum CartActions {
    ADD_TO_CART = 'ADD_TO_CART',
    SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
    REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
    PLUS_CART_ITEM = 'PLUS_CART_ITEM',
    MINUS_CART_ITEM = 'MINUS_CART_ITEM',
    CLEAR_CART = 'CLEAR_CART'
}

export interface CartActionTypes {
    type: CartActions,
    payload: {
        id: number;
        name: string;
        imageUrl: string;
        price: string | number;
    }
}

export interface CartState {
    items: {
        [payload: number]: {
            items: any[];
            totalPrice: number;
        }
    };
    totalPrice: number;
    totalCount: number;
}
