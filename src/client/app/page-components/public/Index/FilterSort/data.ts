import { IFilters } from '@/types/filterByType.type';
import { PopupListItem } from 'client/app/components/Popup/props';

export const filters: IFilters[] = [
    { id: 0, filter: 'Все' },
    { id: 1, filter: 'Мясные' },
    {
        id: 2,
        filter: 'Вегетарианская',
    },
    { id: 3, filter: 'Острые' },
    { id: 4, filter: 'Закрытые' },
    { id: 5, filter: 'Гриль' },
];

export const categories: PopupListItem[] = [
    { id: 0, title: 'популярности', value: {order: 'asc', type: 'rating'} },
    { id: 1, title: 'цене', value: {order: 'asc', type: 'price'} },
    {
        id: 2,
        title: 'алфавиту',
        value: {order: 'asc', type: 'name'},
    },
];
