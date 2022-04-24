import { setSortBy } from '@/store/models/filters/actions';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import s from './styles.module.scss';
import { PopupProps } from './props';

export const Popup = ({ list, className, setChecked, checked, ...props }: PopupProps): JSX.Element => {
    const dispatch = useDispatch();

    return (
        <ul className={cn(s.list, className)} {...props}>
            {list &&
                list.map((item) => (
                    <li key={item.id}>
                        <button className={cn(checked === item.id && s.checked)} onClick={() => {
                            setChecked && setChecked(item.id);
                            dispatch(setSortBy(item.value))
                        }}>
                            {item.title}
                        </button>
                    </li>
                ))}
        </ul>
    );
};
