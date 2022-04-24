export interface SortType {
    order: 'asc' | 'desc',
    type: 'price' | 'rating' | 'name'
};

export interface IFilterState {
    category: number;
    sortBy: SortType;
}

export enum SortActions {
    SET_SORT_BY = "SET_SORT_BY",
    SET_CATEGORY = "SET_CATEGORY"
}

export interface SortInterface {
    type: SortActions;
    payload: SortType;
}
