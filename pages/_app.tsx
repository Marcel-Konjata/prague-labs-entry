import {GlobalStyles} from '../styles/globalStyles'
import type {AppProps} from 'next/app'
import {Layout} from "../src/features/layout";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <GlobalStyles/>
        {/*if needed insert theme provider here*/}
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
}

export default MyApp
