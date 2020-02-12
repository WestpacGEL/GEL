import { getDataFromTree } from '@apollo/react-ssr';
import Head from 'next/head';
import React from 'react';
import fetch from 'isomorphic-unfetch';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const getApolloClient = initialState =>
	new ApolloClient({
		link: new HttpLink({
			fetch,
			uri: `${process.env.KEYSTONE_URI || 'http://localhost:3000'}/admin/api`,
		}),
		cache: new InMemoryCache().restore(initialState || {}),
	});

export default App => {
	return class WithApollo extends React.Component {
		constructor(props) {
			super(props);
			this.apollo = props.apollo || getApolloClient();
		}

		render() {
			return <App {...this.props} apollo={this.apollo} />;
		}
	};
};
