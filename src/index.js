import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter
} from 'react-router-dom';
import {
  setContext
} from '@apollo/client/link/context';
import {
  ApolloLink,
  from,
  split
} from '@apollo/client';
import {
  WebSocketLink
} from '@apollo/client/link/ws';
import {
  getMainDefinition
} from '@apollo/client/utilities';
import {
  CookiesProvider
} from 'react-cookie';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { AUTH_TOKEN, SERVER_API_ENDPOINT,SERVER_SUBSCRIPTIONS_ENDPOINT } from './Utilis/data';


const httpLink = createHttpLink({
  uri: SERVER_API_ENDPOINT,
  // headers:{

  // }
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ?token : ''
    }
  };
});


const formatDateLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {

    // const context = operation.getContext();
    // const authHeader = context.response.headers.get("Authorization");

    // // We would see this log in the SSR logs in the terminal
    // // but in the browser console it would always be null!
    
    // console.log("=============================> auth header from server ",context);
    // console.log("=============================> auth header from server ",context.response);
    // console.log("=============================> auth header from server ",context.response.headers);
    // console.log("=============================> auth header from server ",authHeader);

    return response;
  });
});



const wsLink = new WebSocketLink({
  uri: SERVER_SUBSCRIPTIONS_ENDPOINT,
  options: {
    reconnect: true,
    connectionParams: {
      authToken: localStorage.getItem(AUTH_TOKEN)
    }
  }
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return (
      kind === 'OperationDefinition' &&
      operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link:from([
    formatDateLink,
    link
  ]),
  cache: new InMemoryCache({
    typePolicies: {
      Link: {
        keyFields: ["id"]
      }
    }
  }),
  credentials: 'include',
});


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
      <CookiesProvider>
      <App/>
    </CookiesProvider>
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);