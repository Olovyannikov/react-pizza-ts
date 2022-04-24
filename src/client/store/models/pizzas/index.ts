import { PizzasActions, PizzasActionsTypes, PizzasState } from '@/store/models/pizzas/types';

const initialState: PizzasState = {
    items: [], isLoaded: false,
};

export const pizzas = (state = initialState, action: PizzasActions) => {
    switch (action.type) {
        case PizzasActionsTypes.SET_PIZZAS:
            return {
                ...state, items: action.payload, isLoaded: true,
            };
        case (PizzasActionsTypes.SET_LOADED):
            return {
                ...state, isLoaded: action.payload,
            };
        default:
            return state;
    }
};
