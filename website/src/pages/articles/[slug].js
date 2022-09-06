/** @jsx jsx */
import { gql } from '@apollo/client';
import { jsx } from '@westpac/core';
import { PageContextProvider } from '../../components/providers/pageContext';
import { Footer as StickyFooter } from '../../components/layout/footer.js';
import { getApolloClient } from '../../apollo';
import {
	CustomRenderer,
	Grid,
	Wrapper,
	HeaderBar,
	Header,
	HeaderImage,
	PageHero,
	PageContent,
} from '../../components/article';

// ============================================================
// Article
// ============================================================
const Article = ({ article, ...props }) => {
	if (!article) {
		return <div>Article not found</div>;
	}

	return (
		<Wrapper {...props}>
			<PageContextProvider>
				<HeaderBar />
				<main css={{ paddingBottom: '3.0625rem' }}>
					<PageHero>
						<Grid rowGap={[0, 0]}>
							<Header title={article.pageTitle} author={article.author?.name} />
							<HeaderImage src={article.pageImage?.publicUrl} />
						</Grid>
					</PageHero>
					{article.content?.document && (
						<PageContent>
							<CustomRenderer document={article.content.document} />
						</PageContent>
					)}
					<StickyFooter type="article" />
				</main>
			</PageContextProvider>
		</Wrapper>
	);
};

export async function getServerSideProps({ query, res }) {
	res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

	const slug = query?.slug;
	if (!slug) {
		return {
			props: {},
		};
	}
	// TODO: remove this url derivation once we add slug as field type
	const articleUrl = `/${slug}`;
	const client = getApolloClient();
	const queryRes = await client.query({
		query: gql`
			query article($url: String!) {
				articles(where: { url: { equals: $url } }) {
					id
					url
					pageTitle
					author {
						name
					}
					pageImage {
						id
						filename
						publicUrl
					}
					content {
						document
					}
				}
			}
		`,
		variables: {
			url: articleUrl,
		},
	});

	const articles = queryRes?.data?.articles || [];
	const article = articles[0] || null;
	return {
		props: { article },
	};
}

export default Article;
