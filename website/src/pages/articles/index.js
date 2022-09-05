/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';

import {
	CustomRenderer,
	Wrapper,
	Hero,
	ActionBar,
	Footer,
	Container,
	Grid,
} from '../../components/article';
import { PageContextProvider } from '../../components/providers/pageContext';
import { Footer as StickyFooter } from '../../components/layout/footer.js';

import { getApolloClient } from '../../apollo';
import { gql } from '@apollo/client';

const Home = ({ content }) => {
	const mq = useMediaQuery();
	return (
		<Wrapper>
			<PageContextProvider>
				<main css={{ paddingBottom: '3.0625rem' }}>
					<Hero />
					<ActionBar />
					<Container
						css={mq({
							marginTop: ['1.875rem', '2.25rem', '3rem', '3.375rem', '3.75rem'],
							marginBottom: ['6.4375rem', '6rem', '4.25rem', '6rem', '6.1875rem'],
						})}
					>
						<Grid>{content?.document ? <CustomRenderer document={content.document} /> : null}</Grid>
					</Container>
					<Footer />
					<StickyFooter type="article" />
				</main>
			</PageContextProvider>
		</Wrapper>
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
		// revalidate: 10,
	};
}

export default Home;
