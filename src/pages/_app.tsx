import type { AppProps } from 'next/app';
import { store } from '@/store/index';
import { Provider } from 'react-redux';

import '../client/assets/styles/general/_variables.scss';
import '@/styles';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <Provider store={ store }>
            <Component { ...pageProps } />
        </Provider>
    );
};

export default MyApp;
