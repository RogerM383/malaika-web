import React, {useMemo} from "react";
import {ApolloClient, ApolloLink as authLink, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";

const link = new createHttpLink({
    uri: process.env.NEXT_PUBLIC_MALAIKA_API + '/index.php?graphql',

});

/*const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});*/

/*export const apolloClient = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache(),
    link: link,
});*/

export let apolloClient;

const createApolloClient = () => {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        cache: new InMemoryCache(),
        link: link,
        queryDeduplication: false,
        defaultOptions: {
            query: {
                fetchPolicy: 'cache-first',
            },
        },
    })
}

export const initializeApollo = (initialState = null, token) => {
    const _apolloClient = apolloClient ?? createApolloClient(token)
    if (initialState) {
        _apolloClient.cache.restore(initialState)
    }
    if (typeof window === 'undefined') return _apolloClient
    if (!apolloClient) apolloClient = _apolloClient
    return _apolloClient
}

export const ApolloContextProvider = ({initialValue,...props}) => {
    let apolloClient = initializeApollo(initialValue);
    return (
        <ApolloProvider client={apolloClient}>
            {props.children}
        </ApolloProvider>
    );
};

export function useApollo(initialState) {
    const store = useMemo(() => initializeApollo(initialState), [initialState])
    return store
}
