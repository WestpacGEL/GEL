/** @jsx jsx */

import React, { Fragment } from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { Heading as GELHeading } from '@westpac/heading';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { ArrowRightIcon } from '@westpac/icon';
import { Cell, Container, Grid as WBCGrid } from '@westpac/grid';
import { List as GELList, Item as ListItem } from '@westpac/list';
import merge from 'lodash.merge';
import { COLORS } from './[slug]';
import { SingleImage } from './[slug]';
import { defaultRenderers } from '../../components/pages/single-component/document-renderer';
import { getTypeScaleMargin } from '../../components/body';

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
				})}
				{...props}
			>
				<p css={{ margin: `0 0 ${SPACING(2)}` }}>{children}</p>
			</div>
		</Cell>
	);
};

const List = (props) => (
	<Cell width={[12, 10, 8]} left={[1, 2, null, 3]}>
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
	</Cell>
);

// ============================================================
// Inline Heading text
// - used in toolbar
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

// Card - moved from './index.js'
export const ArticleCard = ({ article }) => {
	const { TYPE } = useBrand();
	const mq = useMediaQuery();
	if (!article) return null;

	// TODO: ask Jeremy what behaviour should be here
	const imageSrc =
		article.pageImage?.publicUrl ||
		'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=30';
	const title = article.cardTitle || 'Default Title';
	const description = article.cardTitle || 'Default Description';
	const anchorURL = article.url ? `/articles${article.url}` : '#';
	return (
		<Cell width={[12, 4]}>
			<a
				href={anchorURL}
				css={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					textDecoration: 'none',
					':hover img': { borderRadius: 200 },
				}}
			>
				<img
					css={{
						flexGrow: 1,
						width: '100%',
						minHeight: '250px',
						objectFit: 'cover',
						transition: 'border-radius 0.2s',
					}}
					src={imageSrc}
					alt={''}
				/>
				<div
					css={mq({
						paddingTop: ['1.5rem', '2.4375rem'],
						paddingLeft: '0.375rem',
						borderRight: `solid ${COLORS.border}`,
						borderRightWidth: [0, 1],
					})}
				>
					<h4
						css={{
							margin: '0 0 0.75rem 0',
							fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
							fontSize: '1rem',
							textTransform: 'uppercase',
							lineHeight: 1.12,
						}}
					>
						{title}
					</h4>
					<p
						css={{
							margin: '0 1.5rem 0.75rem 0',
							fontSize: '1rem',
							fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
							lineHeight: 1.5,
						}}
					>
						{description}
					</p>
					<ArrowRightIcon
						color={COLORS.icon}
						css={mq({ display: 'block', marginLeft: 'auto', marginRight: [0, '0.375rem'] })}
					/>
				</div>
			</a>
		</Cell>
	);
};

const articleRenderers = {
	block: {
		// if you wanna use a different Heading component/styles for article headings
		heading: ({ children, level }) => {
			const HeadingTag = `h${level}`;

			return <Heading level={HeadingTag}>{children}</Heading>;
		},
		paragraph({ children }) {
			return <BodyText>{children}</BodyText>;
		},
		// if you wanna use a different List component/styles for ul/li elements
		list: ({ type, children }) => {
			// If ul and ol needs to be customised, use type prop as next line
			// const Tag = type === 'unordered' ? 'ul' : 'ol';

			return (
				<List>
					{React.Children.map(React.Children.toArray(children), (child, index) => {
						return <ListItem key={index}>{React.cloneElement(child, {})}</ListItem>;
					})}
				</List>
			);
		},
		layout: ({ children, layout }) => {
			console.log(layout);
			// might use context to pass type of grid so children element can determine what width they need to be?
			// pass index to child elements
			return (
				<Fragment>
					{children.map((element, i) => (
						<Fragment key={i}>{element}</Fragment>
					))}
				</Fragment>
			);
			return (
				<WBCGrid
					columnGap={[12, 18, 24]}
					gap={[24]}
					// style={{
					// 	display: 'grid',
					// 	gridTemplateColumns: layout.map((x) => `${x}fr`).join(' '),
					// }}
				>
					{children.map((element, i) => (
						<Fragment key={i}>{element}</Fragment>
					))}
				</WBCGrid>
			);
		},
	},
};

const articleComponentBlocks = {
	article: ({ article }) => {
		return <ArticleCard article={article?.data} />;
	},
	leadText: ({ content }) => {
		return <LeadText>{content}</LeadText>;
	},
	image: ({ image }) => {
		const imageSrc = image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=30';
		return <SingleImage type="body" src={imageSrc} />;
	},
	// heading({ addTableContent, content, level, size, codeStyles, removeTopMargin }) {
	// 	const props = { addTableContent, content, level, size, codeStyles, removeTopMargin };
	// 	return <CustomHeadingComponent {...props} />;
	// },
};

// TODO: this is used in both './[slug].js' and './index.js' - move it to a shareable dir
export const CustomRenderer = ({ document }) => {
	const renderers = {
		inline: { ...defaultRenderers.inline, ...articleRenderers.inline },
		block: { ...defaultRenderers.block, ...articleRenderers.block },
	};

	const componentBlockRenderers = { ...articleComponentBlocks };

	return (
		<DocumentRenderer
			document={document}
			renderers={renderers}
			componentBlocks={componentBlockRenderers}
		/>
	);
};
