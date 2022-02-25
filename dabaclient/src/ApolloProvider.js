import React from 'react';
import App from './App';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
    gql
} from '@apollo/client'; 
import {setContext} from 'apollo-link-context' ;

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn{
    isLoggedin @client
  }`;

const httpLink = new createHttpLink({
    uri: "https://pacific-temple-42079.herokuapp.com/"
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",  
      }  
    }
  });

const client = new ApolloClient({
    link:authLink.concat(httpLink),
    cache: new InMemoryCache(),
    typeDefs,
    resolvers
});

client.writeQuery({ 
    query:IS_LOGGED_IN,  
    data:{
        isLoggedin:!!localStorage.getItem('token'),  
                                       
    }      
});

export default (
    <ApolloProvider client={client}>
           <App />
    </ApolloProvider>
);