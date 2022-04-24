import cn from 'classnames';
import { Popup } from '@/components';
import { useEffect, useRef, useState } from 'react';
import Arrow from './img/arrow.svg';
import s from './styles.module.scss';
import { SortByCategoriesModel } from './props';

export const SortByCategories = ({ list }: SortByCategoriesModel): JSX.Element => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null);
    const [checked, setChecked] = useState<number>(0);
    const activeLabel = list[checked].title;

    const onTogglePopupVisible = () => setPopupVisible(!isPopupVisible);

    const onClickOutsideHandler = (e: MouseEvent) => {
        if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
            setPopupVisible(false);
        }
    };

    useEffect(() => {
        document.documentElement.addEventListener('click', (e: MouseEvent) => onClickOutsideHandler(e));

        return document.documentElement.removeEventListener('click', (e: MouseEvent) => onClickOutsideHandler(e));
    }, []);

    useEffect(() => {
        setPopupVisible(false);
    }, [checked]);

    return (
        <div ref={sortRef} className={cn(s.sort, isPopupVisible && s.open)}>
            <Arrow />
            <span>Сортировка по: </span>
            <button className={s.checked} onClick={onTogglePopupVisible}>
                {activeLabel}
            </button>
            {isPopupVisible && <Popup checked={checked} setChecked={setChecked} list={list} />}
        </div>
    );
};
