/** @jsx jsx */

import React from 'react';
import { jsx } from '@westpac/core';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { Item } from '@westpac/list';
import { defaultRenderers } from '../../components/pages/single-component/document-renderer';
import {
	Image,
	LeadText,
	Heading,
	BodyText,
	List,
	ArticleCard,
	LayoutContextProvider,
	IndexContextProvider,
} from '../../components/article';

// ============================================================
// Renderers
// ============================================================
const articleRenderers = {
	block: {
		block: React.Fragment,
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
						return <Item key={index}>{React.cloneElement(child, {})}</Item>;
					})}
				</List>
			);
		},
		layout: ({ children, layout }) => {
			console.log(layout);
			return (
				<LayoutContextProvider value={{ layout }}>
					{children.map((element, index) => (
						<IndexContextProvider key={index} value={{ index }}>
							{element}
						</IndexContextProvider>
					))}
				</LayoutContextProvider>
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
	image: ({ image, size, alt, caption, reducedSpacing }) => {
		const imageSrc = image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=30';
		return (
			<Image
				src={imageSrc}
				size={size}
				alt={alt}
				caption={caption}
				reducedSpacing={reducedSpacing}
			/>
		);
	},
};

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
