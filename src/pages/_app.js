import React,{useEffect} from 'react';
import { CacheProvider, Global, ThemeProvider } from "@emotion/react";
import createCache from '@emotion/cache';
import { useRouter } from 'next/router';
import DefaultTheme from 'styles/themes/DefaultTheme';
import { global } from '../styles/GlobalStyles'


const cacheOptions = {
    // prefix styles with "custom-cache" instead of "css"
    key: "custom-cache-fresa",
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

const fresaCache = createCache(cacheOptions);

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

    const initialState = {

        /*        address:
                    {
                        name: "Principal",
                        address: "Carrer de Sant Ferran, 18",
                        zipcode: " 08940",
                        city: "Cornellà de Llobregat",
                        province:  "Barcelona",
                        country:"esp"
                    },
                license:{
                    product_id:1
                },
                user:{
                    name:"ivan",
                    email:"ivang@mail.com",
                    password:"secret",
                    nif:"43234234",
                    phone:"123456"
                }*/

    }

    return (
                <ThemeProvider theme={DefaultTheme}>
                    <CacheProvider value={fresaCache}>
                        <Global styles={global}/>
                        <Component {...pageProps} />
                    </CacheProvider>
                </ThemeProvider>

    )
}
