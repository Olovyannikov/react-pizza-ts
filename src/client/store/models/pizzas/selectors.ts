import { RootState } from '@/store/index';

export const getPizzasLength = (state: RootState) => state.pizzas.items.length;
export const getPizzas = (state: RootState) => state.pizzas.items;
export const getLoadingStatus = (state: RootState) => state.pizzas.isLoaded;
