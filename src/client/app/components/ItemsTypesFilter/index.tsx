import { IFilters } from '@/types/filterByType.type';
import { useState, ChangeEvent } from 'react';
import s from './styles.module.scss';
import { ItemTypesFilterProps } from './props';

export const ItemsTypesFilter = ({ items }: ItemTypesFilterProps): JSX.Element => {
    const [state, setState] = useState<string>('Все');

    return (
        <>
            {items && items.length > 0 && (
                <ul className={s.list}>
                    {items.map((f: IFilters) => (
                        <li key={f.id}>
                            <label className={s.label}>
                                <input
                                    checked={state === f.filter}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setState(e.target.value)}
                                    value={f.filter}
                                    type='radio'
                                    name='filter'
                                    id={f.id}
                                />
                                <span>{f.filter}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};
