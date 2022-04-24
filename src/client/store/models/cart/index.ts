import { CartActions, CartActionTypes, CartState } from '@/store/models/cart/types';

const initialState: CartState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = (arr: any[]) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj: any, path: string) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj: { [s: string]: unknown; } | ArrayLike<unknown>, path: string) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};

export const cart = (state = initialState, action: CartActionTypes) => {
    switch (action.type) {
        case CartActions.ADD_TO_CART: {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case CartActions.REMOVE_CART_ITEM: {
            const newItems = {
                ...state.items,
            };
            const currentTotalPrice = newItems[action.payload as any].totalPrice;
            const currentTotalCount = newItems[action.payload as any].items.length;
            delete newItems[action.payload as any];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            };
        }

        case CartActions.PLUS_CART_ITEM: {
            const newObjItems = [
                ...state.items[action.payload as any].items,
                state.items[action.payload as any].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.payload as any]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case CartActions.MINUS_CART_ITEM: {
            const oldItems = state.items[action.payload as any].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.payload as any].items.slice(1) : oldItems;

            const newItems = {
                ...state.items,
                [action.payload as any]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }

        case CartActions.CLEAR_CART:
            return { totalPrice: 0, totalCount: 0, items: [] };

        default:
            return state;
    }
}
