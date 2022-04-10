import { PropsWithChildren } from 'react';
import { Header } from './Header';
import { Main } from './Main';

export interface LayoutProps {}

export const Layout = ({ children }: PropsWithChildren<LayoutProps>): JSX.Element => {
    return (
        <>
            <Header />
            <Main>{children}</Main>
        </>
    );
};
