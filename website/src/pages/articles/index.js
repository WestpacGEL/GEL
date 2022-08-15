/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { PageContextProvider } from '../../components/providers/pageContext';
import { Footer as StickyFooter } from '../../components/layout/footer.js';
import { Wrapper, Hero, ActionBar, Footer, Container, Grid } from '../../components/article';
import { gql } from '@apollo/client';
import { GEL, jsx, Global, useMediaQuery } from '@westpac/core';
import wbc from '@westpac/wbc';
import { CustomRenderer } from './custom-renderer';
import { PageContextProvider } from '../../components/providers/pageContext';
import { Footer as StickyFooter } from '../../components/layout/footer.js';
import { getApolloClient } from '../../apollo';

/*
TO DO
Later
- footer links
    - hook up to correct links
- Action bar
    - hook up to correct links
- Refactor out cards
- GEL wrapper issues at layout level
- fix semantic html
*/

// fix main container and footer spacing
const Home = ({ content }) => {
	const mq = useMediaQuery();
	return (
		<PageContextProvider>
			<div css={{ paddingBottom: '3.0625rem' }}>
				<Hero />
				<ActionBar />
				<Container
					css={mq({
						marginTop: ['1.875rem', '2.25rem', '3rem', '3.375rem', '3.75rem'],
						marginBottom: ['6.4375rem', '6rem', '4.25rem', '6rem', '6.1875rem'],
					})}
				>
					{content?.document ? <CustomRenderer document={content.document} /> : null}
				</Container>
				<Footer />
				<StickyFooter type="article" />
			</div>
		</PageContextProvider>
	);
};

const Wrapper = ({ content }) => {
	return (
		<GEL brand={wbc}>
			<Global styles={{ 'body div': { color: COLORS.text } }} />
			<Home content={content} />
		</GEL>
	);
};

export async function getStaticProps() {
	const client = getApolloClient();

	const res = await client.query({
		query: gql`
			query article($url: String!) {
				articles(where: { url: { equals: $url } }) {
					id
					content {
						document(hydrateRelationships: true)
					}
				}
			}
		`,
		variables: {
			url: '/home',
		},
	});

	const homeArticle = res?.data?.articles[0] || null;
	const content = homeArticle?.content || null;
	return {
		props: {
			content,
		},
	};
}

export default Wrapper;
