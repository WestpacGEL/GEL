import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import React, { useMemo, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import cookie from 'cookie';
import App from 'next/app';

import { Layout as DefaultLayout } from '../components/layout';

const getApolloClient = (initialState) =>
	new ApolloClient({
		link: new HttpLink({
			fetch,
			uri: `${process.env.APOLLO_CLIENT_GRAPHQL_URI || 'http://localhost:3000/admin/api'}`,
		}),
		cache: new InMemoryCache().restore(initialState || {}),
	});

const GELApp = ({ Component, pageProps, apollo, brand }) => {
	const Layout = Component.layout || DefaultLayout;
	const apolloClient = useMemo(() => apollo || getApolloClient(), [apollo]);

	const scrollMap = {
		small: 150,
		large: 162,
	};

	useEffect(() => {
		const setScrollClass = () => {
			if (window.scrollY > scrollMap.small) {
				document.body.classList.add('hasScrolledSmall');
			} else {
				document.body.classList.remove('hasScrolledSmall');
			}
			if (window.scrollY >= scrollMap.large) {
				document.body.classList.add('hasScrolledLarge');
			} else {
				document.body.classList.remove('hasScrolledLarge');
			}
		};

		window.addEventListener('scroll', setScrollClass, { passive: true });
		setScrollClass();
		return () => {
			window.removeEventListener('scroll', setScrollClass);
		};
	}, []);

	return (
		<ApolloProvider client={apolloClient}>
			<Layout {...pageProps} brand={brand}>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
};

GELApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);
	const {
		router,
		ctx: { req, res },
	} = appContext;

	const brandParam = router.query.b || '';
	const brandsList = ['BOM', 'BSA', 'BTFG', 'STG', 'WBC', 'WBG', 'RAMS'];

	// 1. Check url param for desired brand
	const brandMatch = brandsList.find((b) => b === brandParam);
	if (brandMatch) {
		// Set/update the cookie
		res
			? res.setHeader(
					'Set-Cookie',
					cookie.serialize('gel_selected_brand', brandMatch, {
						httpOnly: false,
						path: '/',
						maxAge: 60 * 60 * 24 * 7, // 1 week
					})
			  )
			: (document.cookie = `gel_selected_brand=${brandMatch}`);
	}

	let brandCookieMatch = false;
	// 2. If no brand found in url, look for a cookie!
	if (!brandMatch) {
		// Check for cookie (on server or client)
		const brandCookie = cookie.parse((req ? req.headers.cookie : document.cookie) || '')[
			'gel_selected_brand'
		];

		const brandCookieMatch = brandsList.find((b) => b === brandCookie);
		// 3. If found, update URL param

		if (brandCookieMatch) {
			if (res) {
				res.writeHead(302, { Location: `${router.asPath.split('?')[0]}?b=${brandCookieMatch}` });
				res.end();
			} else {
				router.push(`${router.asPath.split('?')[0]}?b=${brandCookieMatch}`);
			}
		} else {
			if (res) {
				if (router.query.b) {
					res.writeHead(302, { Location: `${router.asPath.split('?')[0]}` });
					res.end();
				}
			} else {
				router.push(`${router.asPath.split('?')[0]}`);
			}
		}
	}
	return { ...appProps, brand: brandMatch || brandCookieMatch };
};

export default GELApp;
