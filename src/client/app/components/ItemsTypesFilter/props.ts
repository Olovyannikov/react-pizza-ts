import { IFilters } from '@/types/filterByType.type';

export interface ItemTypesFilterProps {
    items: IFilters[];
    onChange: (a: number) => void;
}
