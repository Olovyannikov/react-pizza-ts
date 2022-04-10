import cn from 'classnames';

import s from './styles.module.scss';
import { ContainerProps } from './props';

export const Container = ({ children, className, ...props }: ContainerProps): JSX.Element =>
    <div className={ cn(s.container, className) } { ...props }>
        { children }
    </div>;