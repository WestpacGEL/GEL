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

export async function getStaticPaths() {
	const client = getApolloClient();

	const res = await client.query({
		query: gql`
			query {
				articles {
					id
					url
				}
			}
		`,
	});

	const articles = res.data ? res.data.articles : [];
	const paths = articles.map((a) => ({
		// TODO: temp fix until we add slug as a field to schema
		params: { slug: a.url.replace('/', '') },
	}));

	return {
		paths: paths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const client = getApolloClient();

	// TODO: remove this url derivation once we add slug as field type
	const slug = context.params.slug;
	const articleUrl = `/${slug}`;

	const res = await client.query({
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

	const articles = res?.data?.articles || [];
	const article = articles[0] || null;
	return {
		props: { article },
		// revalidate: 10,
	};
}

export default Article;
