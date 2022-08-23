/** @jsx jsx */
import { gql } from '@apollo/client';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';
import { CustomRenderer } from './custom-renderer';

import { BASE_URL } from '../../config.js';
import { PageContextProvider } from '../../components/providers/pageContext';
import { Footer as StickyFooter } from '../../components/layout/footer.js';
import { getApolloClient } from '../../apollo';

import { Grid, Wrapper, HeaderBar, Header, PageHero, PageContent } from '../../components/article';

// Refactor to add into brand passed in the GEL Wrapper i.e. { ...wbc, GEL: {COLORS}}
export const COLORS = {
	primary: '#C80038',
	background: '#F3F5F6',
	border: '#CFD8DC',
	icon: '#1976D2',
	text: '#122935',
	muted: '#575F65',
};

export const SingleImage = ({ src, type, caption, ...props }) => {
	const mq = useMediaQuery();
	const { TYPE } = useBrand();
	const sizeMap = {
		hero: { width: 12 },
		bodyWide: { width: [12, 10], left: [1, 2] },
		body: { width: [12, 10, null, 8], left: [1, 2, null, 3] },
	};
	const srcURL = src || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=30';
	// src={srcURL}
	return (
		<Cell {...sizeMap[type]} css={mq({ marginBottom: ['2.625rem', '3.375rem'] })}>
			<figure css={{ margin: 0 }}>
				<img
					src={`${BASE_URL}/images/lego.png`}
					css={{ width: '100%', height: 'auto' }}
					{...props}
				/>
				{caption && (
					<figcaption
						css={{
							marginTop: '0.75rem',
							fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
							fontSize: '0.875rem',
							color: COLORS.muted,
							lineHeight: 1.07,
						}}
					>
						{caption}
					</figcaption>
				)}
			</figure>
		</Cell>
	);
};

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
							<SingleImage type="hero" src={article.pageImage?.publicUrl} />
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
	};
}

export default Article;
