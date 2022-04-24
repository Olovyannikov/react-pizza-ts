export type FilterTypes = 'Все' | 'Мясные' | 'Вегетарианская' | 'Острые' | 'Закрытые' | 'Гриль';

export interface IFilters {
    id: number;
    filter: FilterTypes;
}
