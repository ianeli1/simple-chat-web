import React, { Suspense } from 'react';
import Loading from './screens/loading';
import SignIn from './screens/signIn';
import {
  ApolloProvider,
  HttpLink,
  split,
  ApolloLink,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { graphQlServer } from './secretKey';
import { WebSocketLink } from '@apollo/client/link/ws';
import Main from './screens/main';

interface AppProps {}

const wsLink = new WebSocketLink({
  uri: graphQlServer.ws,
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({
  uri: graphQlServer.url,
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  (wsLink as unknown) as ApolloLink,
  httpLink,
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: 'include',
  link: splitLink,
});

function App({}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}

export default App;
