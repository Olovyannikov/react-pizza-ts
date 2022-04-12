import cn from 'classnames';
import { useState } from 'react';
import s from './styles.module.scss';
import { PopupProps } from './props';

export const Popup = ({ list, className, setChecked, checked, ...props }: PopupProps): JSX.Element => {
    return (
        <ul className={cn(s.list, className)} {...props}>
            {list &&
                list.map((item) => (
                    <li key={item.id}>
                        <button className={cn(checked === item.id && s.checked)} onClick={() => setChecked && setChecked(item.id)}>
                            {item.title}
                        </button>
                    </li>
                ))}
        </ul>
    );
};
