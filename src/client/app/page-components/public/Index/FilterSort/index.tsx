import { ItemsTypesFilter, SortByCategories } from '@/components';
import { filters, categories } from './data';
import s from './styles.module.scss';

export const FilterSort = (): JSX.Element => {
    return (
        <section className={s.sort}>
            <ItemsTypesFilter items={filters} />
            <SortByCategories list={categories} />
        </section>
    );
};
