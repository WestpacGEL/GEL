import { ApolloProvider } from '@apollo/react-hooks';
import React, { Fragment, useMemo, useEffect } from 'react';
import cookie from 'cookie';
import App from 'next/app';
import Script from 'next/script';
import { Layout as DefaultLayout } from '../components/layout';
import { getApolloClient } from '../apollo';

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Fragment>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=GTM-TKBQFPG"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-TKBQFPG');
        `}
			</Script>
			<ApolloProvider client={apolloClient}>
				<Layout {...pageProps} brand={brand}>
					<Component {...pageProps} />
				</Layout>
			</ApolloProvider>
		</Fragment>
	);
};

GELApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);
	const {
		router,
		ctx: { req, res },
	} = appContext;

	// articles and articles/slug was infinitely redirecting because of the code below
	// so added this condition here to exit early for non /design-system urls
	const { pathname } = router;
	if (!pathname.startsWith('/design-system')) {
		return appProps;
	}

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
