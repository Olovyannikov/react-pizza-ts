import { RootState } from '@/store/index';

export const getFilterByType = (state: RootState) => state.filters.sortBy;
export const getFilterByCategory = (state: RootState) => state.filters.category;
