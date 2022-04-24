import { SortType } from '@/store/models/filters/types';
import { PizzasActionsTypes } from '@/store/models/pizzas/types';
import { IPizza } from '@/types/pizza.type';
import axios from 'axios';
import { API } from 'client/utils/api';

export const setPizzas = (items: IPizza[]) => ({
    type: PizzasActionsTypes.SET_PIZZAS, payload: items,
});

export const setLoaded = (payload: boolean) => ({
    type: PizzasActionsTypes.SET_LOADED, payload,
});

export const fetchPizzas = (sortBy: SortType, category: number) =>
    async (dispatch: (arg0: { type: PizzasActionsTypes; payload: boolean | IPizza[]; }) => void) => {
    dispatch(setLoaded(false));

    axios
        .get(`${API.getPizzas}?${category !== 0 ? `category=${ category }` : '' }&_sort=${ sortBy.type ?? 'rating' }&_order=${ sortBy.order ?? 'asc' }`)
        .then(({ data }) => {
            dispatch(setPizzas(data));
        });
};

