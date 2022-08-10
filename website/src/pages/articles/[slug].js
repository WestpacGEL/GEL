/** @jsx jsx */
import { gql } from '@apollo/client';
import { GEL, jsx, Global, useBrand, useMediaQuery } from '@westpac/core';
import { Cell, Grid, Container } from '@westpac/grid';
import React, { Fragment } from 'react';
import wbc from '@westpac/wbc';
import { CustomRenderer } from './custom-renderer';
import { ArrowLeftIcon } from '@westpac/icon';
import { BASE_URL } from '../../config.js';
import { PageContextProvider, usePageContext } from '../../components/providers/pageContext';
import { Footer as StickyFooter } from '../../components/layout/footer.js';
import { getApolloClient } from '../../apollo';

// Refactor to add into brand passed in the GEL Wrapper i.e. { ...wbc, GEL: {COLORS}}
export const COLORS = {
	primary: '#C80038',
	background: '#F3F5F6',
	border: '#CFD8DC',
	icon: '#1976D2',
	text: '#122935',
	muted: '#575F65',
};

// will have to take a prop for color to use the white or black version
const GELLogo = (props) => (
	<svg
		width="45"
		height="18"
		viewBox="0 0 45 18"
		fill="none"
		role="img"
		focusable="false"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 9.0977V8.90267C0 3.58565 3.9039 0 9.1501 0C13.2742 0 16.934 1.8782 17.2756 6.41472H12.3225C12.0784 4.7805 11.0288 3.92677 9.17477 3.92677C6.71035 3.92677 5.22153 5.82963 5.22153 8.9759V9.17093C5.22153 12.0004 6.27077 14.1954 9.29663 14.1954C11.7368 14.1954 12.6638 12.9509 12.7617 11.561H9.49212V8.07323H17.6905V10.2197C17.6905 14.6587 14.7869 18 9.1501 18C3.22061 18 0 14.3172 0 9.0977ZM19.1549 0.268756H31.209V4.12192H24.1327V7.12211H29.7692V10.6831H24.1327V13.8537H31.5993V17.7072H19.1549V0.268756ZM38.1393 0.268756H33.1129V17.7072H44.7278V13.8294H38.1393V0.268756Z"
			fill="#fff"
		/>
	</svg>
);

const HeaderBar = (props) => {
	const mq = useMediaQuery();
	const { pageHeadingRef } = usePageContext();
	return (
		<header
			ref={pageHeadingRef}
			css={mq({
				height: [54, 66],
				backgroundColor: COLORS.primary,
				display: 'flex',
				alignItems: 'flex-end',
			})}
			{...props}
		>
			<a href="#">
				<div href="#" css={mq({ height: [42, 54], display: 'flex', alignItems: 'center' })}>
					<ArrowLeftIcon color="#fff" css={mq({ marginLeft: ['1.25rem'] })} />
					<GELLogo
						css={mq({
							height: '100%',
							borderLeft: '1px solid #fff',
							paddingLeft: 18,
							marginLeft: [20, 25],
						})}
					/>
				</div>
			</a>
		</header>
	);
};

const Header = ({ title, author, ...props }) => {
	const { TYPE } = useBrand();
	const mq = useMediaQuery();
	return (
		<Cell width={12}>
			<h1
				css={mq({
					margin: '0 0 1.125rem',
					fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
					fontSize: ['1.875rem', '3rem'],
					lineHeight: 1.1,
					letterSpacing: '-1px',
				})}
				{...props}
			>
				{title}
			</h1>
			{author ? <p
				css={mq({
					fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
					color: COLORS.muted,
					marginTop: 0,
					marginBottom: ['2.625rem', '3rem'],
				})}
			>
				{author}
			</p> : null}
		</Cell>
	);
};

const SingleImage = ({ src, type, caption, ...props }) => {
	const mq = useMediaQuery();
	const { TYPE } = useBrand();
	const sizeMap = {
		hero: { width: 12 },
		bodyWide: { width: [12, 10], left: [1, 2] },
		body: { width: [12, 10, null, 8], left: [1, 2, null, 3] },
	};
	return (
		<Cell {...sizeMap[type]} css={mq({ marginBottom: ['2.625rem', '3.375rem'] })}>
			<figure css={{ margin: 0 }}>
				<img src={src} css={{ width: '100%', height: 'auto' }} {...props} />
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

const Hero = ({ children, ...props }) => {
	const mq = useMediaQuery();
	return (
		<div
			css={mq({
				background: `linear-gradient(180deg, #FFFFFF 24.71%, ${COLORS.background} 100%)`,
				paddingTop: ['3.375rem', '4.125rem'],
			})}
		>
			<Container {...props}>{children}</Container>
		</div>
	);
};

const Content = ({ document, children, ...props }) => {
	return (
		<div css={{ background: COLORS.background }}>
			<Container {...props}>
				<CustomRenderer document={document} />
			</Container>
		</div>
	);
};

const Article = ({ pageTitle, pageImage, content, author }) => {
	// TODO: ask Jeremy what behaviour should be here
	const imageSrc = pageImage?.publicUrl || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=30';

	return (
		<PageContextProvider>
			<HeaderBar />
			<main css={{ paddingBottom: '3.0625rem' }}>
				<Hero>
					<Grid rowGap={[0, 0]}>
						<Header title={pageTitle} author={author?.name} />
						<SingleImage type="hero" src={imageSrc} />
					</Grid>
				</Hero>
				{content?.document && <Content content={content.document} />}
				<StickyFooter type="article" />
			</main>
		</PageContextProvider>
	);
};

const Wrapper = ({ article, ...props }) => {
	if (!article) {
		return <div>Article not found</div>;
	}

	return (
		<GEL brand={wbc} {...props}>
			<Global styles={{ 'body div': { color: COLORS.text } }} />
			<Article {...article} />
		</GEL>
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

export default Wrapper;
