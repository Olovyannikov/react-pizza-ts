import { IFilterState, SortActions, SortInterface } from '@/store/models/filters/types';

const initialState: IFilterState = {
    category: 0, sortBy: {order: 'asc', type: 'rating'},
};

export const filters = (state: IFilterState = initialState, action: SortInterface): IFilterState => {
    switch (action.type) {
        case SortActions.SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            };
        case SortActions.SET_CATEGORY:
            return {
                ...state,
                category: Number(action.payload)
            }
        default:
            return state;
    }
};
