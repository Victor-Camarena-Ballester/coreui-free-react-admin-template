import 'react-app-polyfill/stable'
import 'core-js'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import '../src/scss/style.scss'


const MyApp = ({ Component, pageProps }) => {
  return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>                
            </Head>
            <RecoilRoot>                
                <Component {...pageProps} />    
            </RecoilRoot>
        </>
    )    
};
export default MyApp;
