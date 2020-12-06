import React, { createContext } from 'react';
import {
  useMeQuery,
  MeQuery,
  useMyEmotesQuery,
  MyEmotesQuery,
} from '../../generated/graphql';
import type { ApolloQueryResult } from '@apollo/client';

export const userContext = createContext<{
  user: Exclude<MeQuery['me']['user'], undefined>;
  error: Exclude<MeQuery['me']['error'], undefined>;
  loading: boolean;
  refetch: ReturnType<typeof useMeQuery>['refetch'];
  emotes: {
    list: Exclude<MyEmotesQuery['myEmotes']['emotes'], undefined>;
    error: Exclude<MyEmotesQuery['myEmotes']['error'], undefined>;
    refetch(): Promise<ApolloQueryResult<MyEmotesQuery>>;
  };
}>(undefined!);

//TODO: Use User subscription
export function UserProvider({ children }: { children: React.ReactNode }) {
  const { data, loading, refetch } = useMeQuery();
  const { data: emoteData, refetch: emoteRefetch } = useMyEmotesQuery();
  return (
    <userContext.Provider
      value={{
        user: data?.me.user ?? null,
        error: data?.me.error ?? null,
        loading,
        refetch: async (k) => {
          const result = await refetch(k);
          console.log({ result });
          return result;
        },
        emotes: {
          list: emoteData?.myEmotes.emotes ?? null,
          error: emoteData?.myEmotes.error ?? null,
          refetch: emoteRefetch,
        },
      }}
    >
      {children}
    </userContext.Provider>
  );
}
