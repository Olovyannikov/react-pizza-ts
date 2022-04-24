import { IPizza } from '@/types/pizza.type';

export interface PizzasState {
    items: IPizza[];
    isLoaded: boolean;
}

export enum PizzasActionsTypes {
    SET_PIZZAS = 'SET_PIZZAS',
    SET_LOADED = 'SET_LOADED'
}

export interface PizzasActions {
    type: PizzasActionsTypes;
    payload: IPizza[];
}
