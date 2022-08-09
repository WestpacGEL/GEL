/** @jsx jsx */
import { gql } from '@apollo/client';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { GEL, jsx, Global, useBrand, useMediaQuery } from '@westpac/core';
import { Cell, Grid, Container } from '@westpac/grid';
import React, { Fragment } from 'react';
import wbc from '@westpac/wbc';
import { useRouter } from 'next/router';
import { ArrowLeftIcon } from '@westpac/icon';
import { BASE_URL } from '../../config.js';
import { List as GELList, Item } from '@westpac/list';
import { PageContextProvider, usePageContext } from '../../components/providers/pageContext';
import { Footer as StickyFooter } from '../../components/layout/footer.js';
import { getApolloClient } from '../../apollo';

// ============================================================
// Base
// ============================================================
// Refactor to add into brand passed in the GEL Wrapper i.e. { ...wbc, GEL: {COLORS}}
const COLORS = {
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

// ============================================================
// Base
// ============================================================
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

// ============================================================
// Blocks
// ============================================================
// ============================================================
// Title
// ============================================================
//Title, byline,
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
			<p
				css={mq({
					fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
					color: COLORS.muted,
					marginTop: 0,
					marginBottom: ['2.625rem', '3rem'],
				})}
			>
				{author}
			</p>
		</Cell>
	);
};

// ============================================================
// Lead text
// ============================================================
// TODO: wot dis? what is it used for?
// TODO: component block inline
// TODO: custom renderer
const LeadText = ({ children, ...props }) => {
	const mq = useMediaQuery();
	const { TYPE } = useBrand();
	return (
		<Cell width={[12, 10]} left={[1, 2]}>
			<p
				css={mq({
					marginTop: 0,
					marginBottom: ['2.635rem', '3.375rem'],
					fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
					fontSize: ['1.125rem', '1.5rem'],
					lineHeight: 1.6,
					color: COLORS.text,
				})}
				{...props}
			>
				{children}
			</p>
		</Cell>
	);
};

// ============================================================
// Body text
// ============================================================
// Look into overriding GEL Body?
// - graphik
// TODO: should this wrap over the entire content or just over all paragraphs?
const BodyText = ({ children, ...props }) => {
	const mq = useMediaQuery();
	const { TYPE, SPACING } = useBrand();
	return (
		<Cell width={[12, 10, 8]} left={[1, 2, null, 3]}>
			<div
				css={mq({
					marginBottom: ['2.635rem', '3.375rem'],
					fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
					lineHeight: 2,
					p: {
						margin: `0 0 ${SPACING(2)}`,
					},
				})}
				{...props}
			>
				{children}
			</div>
		</Cell>
	);
};

// TODO: custom renderer
const List = (props) => (
	<GELList
		overrides={{
			List: {
				styles: (styles, { type }) => ({
					...styles,
					'> li::before': {
						...(type === 'bullet' && { backgroundColor: COLORS.icon }),
						borderColor: COLORS.icon,
					},
				}),
			},
		}}
		{...props}
	/>
);

// ============================================================
// Heading text
// ============================================================
// TODO: Custom renderer for headings - DONE
const Heading = ({ level, children, ...props }) => {
	const mq = useMediaQuery();
	const { TYPE } = useBrand();
	const spacingMap = {
		h2: ['1.5rem', '1.875rem'],
		h3: '1.125rem',
		h4: '1.125rem',
	};

	const fontSizeMap = {
		h2: ['1.5rem', '1.875rem'],
		h3: ['1.125rem', '1.5rem'],
		h4: '1.125rem',
	};

	const Level = level;

	return (
		<Cell width={[12, 10, null, 8]} left={[1, 2, null, 3]}>
			<Level
				css={mq({
					fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
					fontSize: fontSizeMap[level],
					marginTop: 0,
					marginBottom: spacingMap[level],
				})}
				{...props}
			>
				{children}
			</Level>
		</Cell>
	);
};

// ============================================================
// Single Image
// ============================================================
// TODO: Custom renderer for image - need cloudinary dev environment access to build this
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

// ============================================================
// Double Image
// ============================================================

// TODO: remove, replace with layouts in document-editor
const DoubleImage = ({ type, caption1, caption2, reducedSpacing, ...props }) => {
	const mq = useMediaQuery();
	const { TYPE } = useBrand();
	const sizeMap = {
		bodyWide: { width: [12, 5], left: [1, 2], right: [1, 7] },
		body: { width: [12, 5, null, 4], left: [1, 2, null, 3], right: [1, 7] },
	};

	return (
		<Fragment>
			<Cell
				width={sizeMap[type].width}
				left={sizeMap[type].left}
				css={mq({
					marginBottom: reducedSpacing ? ['1.375rem', '1.875rem'] : ['1.5rem', '3.375rem'],
				})}
			>
				<figure css={{ margin: 0 }}>
					<img
						src={`${BASE_URL}/images/article-image-1.png`}
						css={{ width: '100%', height: 'auto' }}
						{...props}
					/>
					<figcaption
						css={{
							marginTop: '0.75rem',
							fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
							fontSize: '0.875rem',
							color: COLORS.muted,
							lineHeight: 1.07,
						}}
					>
						{caption1}
					</figcaption>
				</figure>
			</Cell>
			<Cell
				width={sizeMap[type].width}
				left={sizeMap[type].right}
				css={mq({
					marginBottom: reducedSpacing ? ['1.375rem', '1.875rem'] : ['2.625rem', '3.375rem'],
				})}
			>
				<figure css={{ margin: 0 }}>
					<img
						src={`${BASE_URL}/images/article-image-2.png`}
						css={{ width: '100%', height: 'auto' }}
						{...props}
					/>
					<figcaption
						css={{
							marginTop: '0.75rem',
							fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
							fontSize: '0.875rem',
							color: COLORS.muted,
							lineHeight: 1.07,
						}}
					>
						{caption2}
					</figcaption>
				</figure>
			</Cell>
		</Fragment>
	);
};

// ============================================================
// Content Wrappers
// ============================================================
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

/* Custom Document Renderer to render document field */
const renderers = {
	block: {
		heading: ({ children, level }) => {
			const HeadingTag = `h${level}`;

			return <Heading level={HeadingTag}>{children}</Heading>;
		},
		paragraph({ children }) {
			return <BodyText>{children}</BodyText>;
		},
		list: ({ type, children }) => {
			// If ul and ol needs to be customised, use type prop as next line
			// const Tag = type === 'unordered' ? 'ul' : 'ol';

			return (
				<List>
					{React.Children.map(React.Children.toArray(children), (child, index) => {
						return <li>{React.cloneElement(child, {})}</li>;
					})}
				</List>
			);
		},
	},
};

const componentBlockRenderers = {
	leadText: ({ content }) => {
		return <LeadText>{content}</LeadText>;
	},
};

const CustomRenderer = ({ document }) => {
	return (
		<DocumentRenderer
			document={document}
			renderers={renderers}
			componentBlocks={componentBlockRenderers}
		/>
	);
};

const Content = ({ children, content, ...props }) => {
	if (!content.document) return null;
	return (
		<div css={{ background: COLORS.background }}>
			<Container {...props}>
				<CustomRenderer document={content.document} />
			</Container>
		</div>
	);
};

// TODO: if rendering document editor, when do the relationship queries resolve?
// at the point of saving?
// or when rendering?

const Article = ({ pageTitle, pageImage, content, author }) => {
	return (
		<PageContextProvider>
			<HeaderBar />
			<main css={{ paddingBottom: '3.0625rem' }}>
				<Hero>
					<Grid rowGap={[0, 0]}>
						{author ? <Header title={pageTitle} author={author.name} /> : null}
						<SingleImage type="hero" src={pageImage && pageImage.url ? pageImage.url : ''} />
					</Grid>
				</Hero>
				{content && <Content content={content} />}
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

	// TODO: cleanup unnecessary fields once we figure what needs to go into og: tags
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

	const articles = res.data ? res.data.articles : [];
	const article = articles.length ? articles[0] : null;
	return {
		props: { article },
	};
}

export default Wrapper;
