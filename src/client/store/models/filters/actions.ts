import { SortActions, SortType } from '@/store/models/filters/types';

export const setSortBy = ({type, order}: SortType) => ({
    type: SortActions.SET_SORT_BY,
    payload: {type, order}
});

export const setCategory = (payload: number) => ({
    type: SortActions.SET_CATEGORY,
    payload
})
