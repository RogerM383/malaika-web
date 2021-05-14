import React from "react";
import {ApolloClient, ApolloLink as authLink, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";

const link = new createHttpLink({
    uri: process.env.NEXT_PUBLIC_API + '/index.php?graphql'
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

export const apolloClient = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache(),
    link: link
});


export const ApolloContextProvider = ({initialValue,...props}) => {
    return (
        <ApolloProvider client={apolloClient}>
            {props.children}
        </ApolloProvider>
    );
};