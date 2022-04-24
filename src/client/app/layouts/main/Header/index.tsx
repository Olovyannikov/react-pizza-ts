import { getCartTotalCount, getTotalPrice } from '@/store/models/cart/selectors';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from '@/ui';
import { CartButton } from '@/components';
import { useSelector } from 'react-redux';
import Logo from './img/Logo.svg';

import s from './styles.module.scss';

export const Header = (): JSX.Element => {
    const router = useRouter();

    const count = useSelector(getCartTotalCount);
    const total = useSelector(getTotalPrice);

    return (
        <header>
            <Container className={s.container}>
                <div className={s.logo}>
                    {router.pathname === '/' && <Logo />}
                    {router.pathname !== '/' && <Link href='/'><a><Logo /></a></Link>}
                </div>
                {router.pathname === '/' && count > 0 && <CartButton count={count} total={total} />}
            </Container>
        </header>
    );
};
