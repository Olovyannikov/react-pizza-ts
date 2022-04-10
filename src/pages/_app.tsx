import type { AppProps } from 'next/app';

import "../client/assets/styles/general/_variables.scss";
import "@/styles";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => <Component { ...pageProps } />

export default MyApp;
