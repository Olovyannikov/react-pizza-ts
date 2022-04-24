import { filters } from './filters';
import { pizzas } from './pizzas';
import { cart } from './cart';

export interface RootModel {
    filters: typeof filters;
    pizzas: typeof pizzas;
    cart: typeof cart;
}

export const models: RootModel = { filters, pizzas, cart };
