import Head from 'next/head'
import React, { useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';


Router.onRouteChangeStart = (url) => {
    if (typeof window != 'undefined' && (window.location.pathname == url)) {
        window.location.reload();
    } else {
        NProgress.start();
    }
}

const MyApp = ({ Component, pageProps, router }) => {        
    return (
        <div>            
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Head>
            <Component {...pageProps} key={router.route} />
        </div>
    );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = {};

    if (Component.getInitialProps) {
        Object.assign(pageProps, await Component.getInitialProps(ctx));
    }

    return { pageProps };
}

export default MyApp;