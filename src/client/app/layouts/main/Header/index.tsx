import { useRouter } from 'next/router';
import { Container } from '@/ui';
import { CartButton } from '@/components';
import Logo from './img/Logo.svg';

import s from './styles.module.scss';

export const Header = (): JSX.Element => {
    const router = useRouter();
    const count = 3;

    return (
        <header>
            <Container className={s.container}>
                <div className={s.logo}>
                    <Logo />
                </div>
                {router.pathname === '/' && count > 0 && <CartButton count={count} total={520} />}
            </Container>
        </header>
    );
};
