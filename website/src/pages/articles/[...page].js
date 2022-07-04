/** @jsx jsx */
import { GEL, jsx, Global, useBrand, useMediaQuery } from '@westpac/core';
import { Cell, Grid, Container } from '@westpac/grid';
import { Fragment } from 'react';
import wbc from '@westpac/wbc';
import { useRouter } from 'next/router';
import { ArrowLeftIcon } from '@westpac/icon';
import { BASE_URL } from '../../config.js';
import { List as GELList, Item } from '@westpac/list';
import { PageContextProvider, usePageContext } from '../../components/providers/pageContext';
import { Footer as StickyFooter } from '../../components/layout/footer.js';

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

const Wrapper = (props) => {
	return (
		<GEL brand={wbc} {...props}>
			<Global styles={{ 'body div': { color: COLORS.text } }} />
			<Article />
		</GEL>
	);
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
const SingleImage = ({ type, caption, ...props }) => {
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
// Double Image
// ============================================================

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

const Content = ({ children, ...props }) => {
	return (
		<div css={{ background: COLORS.background }}>
			<Container {...props}>{children}</Container>
		</div>
	);
};

const Article = (props) => {
	// const router = useRouter();
	// const path = router.query.page.join('/');
	return (
		<PageContextProvider>
			<HeaderBar />
			<main css={{ paddingBottom: '3.0625rem' }}>
				<Hero>
					<Grid rowGap={[0, 0]}>
						<Header title="Page title" author="Author" />
						<SingleImage type="hero" />
					</Grid>
				</Hero>
				<Content>
					<Grid rowGap={[0, 0]}>
						<LeadText>
							Our global visual language is shared across all our brands. We have a library of
							carefully crafted user interface icons for use in your designs. This article explains
							when and how to use the icons, and details our process for making icons. For
							information about embedding and sizing icons see Design System Icons.
						</LeadText>
						<BodyText>
							<p>
								User Interface icons are designed to communicate meaning and aid navigation. They
								can symbolise a command, file, device or directory. They’re also used to represent
								common actions like search, print and edit.
							</p>
							<p>
								Simplicity is the key design requirement for UI icons. Each icon in this library is
								reduced to its minimal form, just enough to capture the essence of its meaning. This
								ensures readability and clarity even at small sizes. It also optimises the vector
								file size by limiting the number of points required to draw the graphic.
							</p>
						</BodyText>
						<Heading level="h2">Heading two</Heading>
						<BodyText>
							<p>
								The icon grid has been developed to facilitate consistency while also offering a
								certain amount of flexibility. All the icons in this library have been designed and
								crafted on a 24px grid. This allows us to use the icons at the following sizes:
								XSmall (12px), Small (18px), Medium (24px), Large (36px) and XLarge (48px). Using
								the icons at these pre-defined sizes will ensure that horizontal and vertical edges
								align with the pixel grid, with the exception of the Small (18px). This results in a
								sharper more legible graphic. If icons are not used at these intended sizes they
								will no longer align to the pixel grid which will result in a blurred effect. Using
								a fixed set of icon sizes also helps us to maintain consistency across all our
								applications.
							</p>
						</BodyText>
						<DoubleImage
							type="bodyWide"
							caption1="This is a caption"
							caption2="This is a caption"
						/>
						<Heading level="h2">Heading two</Heading>
						<BodyText>
							<p>
								Legibility, consistency and simplicity are key design principals for all UI icons.
								We use simple geometric shapes to construct icons. This gives them a unified
								symmetry and visual consistency.
							</p>
						</BodyText>
						<DoubleImage type="body" caption1="This is a caption" caption2="This is a caption" />
						<Heading level="h3">Heading three</Heading>
						<BodyText>
							<p>
								Legibility, consistency and simplicity are key design principals for all UI icons.
								We use simple geometric shapes to construct icons. This gives them a unified
								symmetry and visual consistency.
							</p>
						</BodyText>
						<DoubleImage type="body" caption1="This is a caption" caption2="This is a caption" />
						<Heading level="h3">Heading three</Heading>
						<BodyText>
							<p>
								Always use a 2px width for strokes and counter strokes. This includes curves and
								angles, interior and exterior.
							</p>
						</BodyText>
						<DoubleImage
							type="body"
							caption1="This is a caption"
							caption2="This is a caption"
							reducedSpacing
						/>
						<DoubleImage type="body" caption1="This is a caption" caption2="This is a caption" />

						<Heading level="h2">Heading two</Heading>
						<BodyText>
							<p>
								Some scenarios may call for a little ‘artistic licence’ to break these guidelines to
								aid legibility of an icon. In spite of this it remains important to only use the
								consistent geometric forms on which all other icons are based. Don’t skew or distort
								the forms.
							</p>
						</BodyText>
						<SingleImage type="body" caption="This is a caption" />
						<Heading level="h2">Heading two</Heading>
						<BodyText>
							<p>
								Some scenarios may call for a little ‘artistic licence’ to break these guidelines to
								aid legibility of an icon. In spite of this it remains important to only use the
								consistent geometric forms on which all other icons are based. Don’t skew or distort
								the forms.
							</p>
						</BodyText>
						<SingleImage type="bodyWide" caption="This is a caption" />
						<Heading level="h2">Heading two</Heading>
						<BodyText>
							<p>
								Some Some article body text, Lorem ipsum dolor sit amet, consectetur adipiscing
								elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
								minim veniam, quis nostrud exercitation ullamco.
							</p>
						</BodyText>
						<Heading level="h3">This is a heading three</Heading>
						<BodyText>
							<List>
								<Item>This is the first bullet list item.</Item>
								<Item>And this is the second bullet list item.</Item>
							</List>
						</BodyText>
						<Heading level="h3">Another heading three</Heading>
						<BodyText>
							<List type="link">
								<Item>This is the first link list item.</Item>
								<Item>And this is the second link list item.</Item>
							</List>
						</BodyText>
						<BodyText>
							<p>
								Some Some article body text, Lorem ipsum dolor sit amet, consectetur adipiscing
								elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
								minim veniam, quis nostrud exercitation ullamco.
							</p>
						</BodyText>
						<Heading level="h4">I'm a heading four</Heading>
						<BodyText>
							<p>
								Some article body text, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
								do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
								Some article body.
							</p>
							<p>
								New paragraph of text, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
								do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
							</p>
						</BodyText>
						<Heading level="h4">I'm another heading four</Heading>
						<BodyText>
							<p>
								Some article body text, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
								do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
								Some article body.
							</p>
						</BodyText>
					</Grid>
				</Content>
				<StickyFooter type="article" />
			</main>
		</PageContextProvider>
	);
};

export default Wrapper;
