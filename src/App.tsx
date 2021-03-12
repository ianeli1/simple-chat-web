import React, { Suspense } from 'react';
import {
  ApolloProvider,
  HttpLink,
  split,
  ApolloLink,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import Main from './screens/main';
import { DialogContextProvider } from './components/Providers/DialogProvider';
import { UserProvider } from './components/Providers/UserProvider';
import ServerProvider from './components/Providers/ServerProvider';
import { ChannelProvider } from './components/Providers/ChannelProvider';
import { config } from 'dotenv';

config();

interface AppProps {}

const wsLink = new WebSocketLink({
  uri: process.env.WS_ENDPOINT!,
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({
  uri: process.env.GQL_ENDPOINT!,
  credentials: 'include',
  fetchOptions: {
    mode: 'no-cors',
  },
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
      <UserProvider>
        <ServerProvider>
          <ChannelProvider>
            <DialogContextProvider>
              <Main />
            </DialogContextProvider>
          </ChannelProvider>
        </ServerProvider>
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;
