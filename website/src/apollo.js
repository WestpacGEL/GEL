import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

export const getApolloClient = (initialState) =>
	new ApolloClient({
		link: new HttpLink({
			fetch,
			uri: `${process.env.APOLLO_CLIENT_GRAPHQL_URI || 'http://localhost:3001/api/graphql'}`,
		}),
		cache: new InMemoryCache().restore(initialState || {}),
	});
