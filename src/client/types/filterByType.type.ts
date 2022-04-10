export type FilterTypes = 'Все' | 'Мясные' | 'Вегетарианская' | 'Гриль' | 'Острые' | 'Закрытые';

export interface IFilters {
    id: string;
    filter: FilterTypes;
}
