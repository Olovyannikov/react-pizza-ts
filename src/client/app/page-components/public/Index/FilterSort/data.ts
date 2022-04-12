import { IFilters } from '@/types/filterByType.type';
import { PopupListItem } from 'client/app/components/Popup/props';

export const filters: IFilters[] = [
    { id: '0', filter: 'Все' },
    { id: '1', filter: 'Мясные' },
    {
        id: '2',
        filter: 'Вегетарианская',
    },
    { id: '3', filter: 'Острые' },
    { id: '4', filter: 'Закрытые' },
    { id: '5', filter: 'Гриль' },
];

export const categories: PopupListItem[] = [
    { id: 0, title: 'популярности', value: 'popular' },
    { id: 1, title: 'цене', value: 'price' },
    {
        id: 2,
        title: 'алфавиту',
        value: 'abc',
    },
];
