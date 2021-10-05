import React,{useEffect} from 'react';
import { CacheProvider, Global, ThemeProvider } from "@emotion/react";
import createCache from '@emotion/cache';
import { useRouter } from 'next/router';
import DefaultTheme from 'styles/themes/DefaultTheme';
import { global } from '../styles/GlobalStyles'
import {ApolloContextProvider} from "../contexts/apollo/ApolloContext";
import {LaunguageContext, LaunguageContextProvider} from "../contexts/LanguageContext";



const cacheOptions = {
    // prefix styles with "custom-cache" instead of "css"
    key: "custom-cache-malaika",
    // only prefix the following style properties
    prefix: key => {
        switch (key) {
            case "appearance":
            case "user-select":
            case ":placeholder":
                return true;
            default:
                return false;
        }
    }
};

const malaikaCache = createCache(cacheOptions);

/*
//Binding Router events.
Router.events.on('routeChangeStart', () => alert('START'));
Router.events.on('routeChangeComplete', () => alert('START'));
Router.events.on('routeChangeError', () => alert('START'));
*/

export default function App ({ Component, pageProps }) {

    const router = useRouter();

    // Soft scroll en cambio de pagina
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [router]);

    const {initialState} = pageProps;

    return (
        <ApolloContextProvider initialValue={initialState}>
            <LaunguageContextProvider>
                <ThemeProvider theme={DefaultTheme}>
                    <CacheProvider value={malaikaCache}>
                        <Global styles={global}/>
                        <Component {...pageProps} />
                    </CacheProvider>
                </ThemeProvider>
            </LaunguageContextProvider>
        </ApolloContextProvider>
    )
}
