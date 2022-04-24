import { ItemsTypesFilter, SortByCategories } from '@/components';
import { setCategory } from '@/store/models/filters/actions';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { filters, categories } from './data';
import s from './styles.module.scss';

export const FilterSort = (): JSX.Element => {
    const dispatch = useDispatch();

    const onSelectCategory = useCallback((index: number) => {
        dispatch(setCategory(index));
    }, [dispatch]);

    return (
        <section className={ s.sort }>
            <ItemsTypesFilter onChange={ onSelectCategory } items={ filters } />
            <SortByCategories list={ categories } />
        </section>
    );
};
