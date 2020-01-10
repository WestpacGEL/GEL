import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import cookie from 'cookie';

import { Layout as DefaultLayout } from '../components/layout';
import withApollo from '../lib/withApollo';

class MyApp extends App {
	static async getInitialProps({ router, ctx: { req, res } }) {
		const brandParam = router.query.brand || '';
		const brandsList = ['BOM', 'BSA', 'BTFG', 'STG', 'WBC', 'WBG'];

		// 1. Check url param for desired brand
		const brandMatch = brandsList.find(b => b === brandParam);
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

			// render Layout with brand param
			return {};
		}

		// 2. If no brand found in url, look for a cookie!
		if (!brandMatch) {
			// Check for cookie (on server or client)
			const brandCookie = cookie.parse((req ? req.headers.cookie : document.cookie) || '')[
				'gel_selected_brand'
			];
			const brandCookieMatch = brandsList.find(b => b === brandCookie);

			// 3. If found, update URL param
			if (brandCookieMatch) {
				if (res) {
					res.writeHead(302, { Location: `${router.route}?brand=${brandCookieMatch}` });
					res.end();
				} else {
					router.push(`${router.asPath.split('?')[0]}?brand=${brandCookieMatch}`);
				}
			} else {
				// 4. If no cookie either, render the Brand Picker component instead of Layout!
				console.log('no URL param, and no cookie. Show brand picker!');
				return {};
			}
		}
	}

	render() {
		const { Component, pageProps, apollo } = this.props;
		const Layout = Component.layout || DefaultLayout;

		return (
			<ApolloProvider client={apollo}>
				<Layout {...pageProps}>
					<Component {...pageProps} />
				</Layout>
			</ApolloProvider>
		);
	}
}

export default withApollo(MyApp);
