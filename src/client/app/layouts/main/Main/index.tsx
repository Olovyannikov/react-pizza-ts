import cn from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MainProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Main = ({ children, className, ...props }: MainProps): JSX.Element => (
    <main className={cn(className)} {...props}>
        {children}
    </main>
);
