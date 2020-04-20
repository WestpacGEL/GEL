/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Cell, Grid } from '@westpac/grid';
import React from 'react';
import createReactRenderer from './react-renderer';
import { Heading } from '@westpac/heading';
import { List, Item } from '@westpac/list';
import dynamic from 'next/dynamic';
import { getShortCodes } from '../../../shortcodes';

const DynamicComponents = dynamic(() => import('./dynamic-components'), { ssr: false });

const Bold = props => <strong css={{ fontWeight: 'bold' }} {...props} />;
const Italic = props => <em css={{ fontStyle: 'italic' }} {...props} />;
const Strike = props => <span css={{ textDecoration: 'strike-through' }} {...props} />;
const Under = props => <span css={{ textDecoration: 'underline' }} {...props} />;

const ApplyShortCodes = ({ text }) => {
	const { BRAND } = useBrand();
	const shortcodes = getShortCodes(BRAND);
	return text.replace(/\[\[([A-Za-z0-9]*)\]\]/g, (match, capture, offset, string) => {
		return shortcodes[capture] || capture;
	});
};

const slateRenderer = (item, _editorValue) => {
	return createReactRenderer([
		// special serialiser for text
		({ node, path }) => {
			if (node.object === 'text') {
				return node.text.split('\n').reduce((array, text, i) => {
					if (i !== 0) array.push(<br key={`${path}_${i}`} />);
					array.push(<ApplyShortCodes key={`sc-${path}_${i}`} text={text} />);
					return array;
				}, []);
			}
		},
		// serialiser for links
		({ node, path, serializeChildren }) => {
			if (node.object === 'inline') {
				switch (node.type) {
					case 'link':
						return (
							<a href={node.data.href} key={path} target="_blank">
								{' '}
								{serializeChildren(node.nodes)}
							</a>
						);
				}
			}
		},
		// serialisers for all the marks
		({ node, path, serializeChildren }) => {
			if (node.object !== 'mark') {
				return;
			}

			switch (node.type) {
				case 'bold':
					return <Bold key={path}>{serializeChildren(node.nodes)}</Bold>;
				case 'italic':
					return <Italic key={path}>{serializeChildren(node.nodes)}</Italic>;
				case 'strikethrough':
					return <Strike key={path}>{serializeChildren(node.nodes)}</Strike>;
				case 'underline':
					return <Under key={path}>{serializeChildren(node.nodes)}</Under>;
				default: {
					console.error(`Unexpected mark '${node.type}' at ${path}`);
				}
			}
		},

		// serialiser for all the blocks
		({ node, path, serializeChildren, value }) => {
			const textStyle = {
				width: '100%',
				lineHeight: 2,
			};
			if (node.object !== 'block') {
				return;
			}

			switch (node.type) {
				case 'paragraph':
					return (
						<Grid columns={12} key={path}>
							<Cell width={[12, 10, 10, 8]} left={[1, 2, 2, 3]}>
								<p css={textStyle}>{serializeChildren(node.nodes)}</p>
							</Cell>
						</Grid>
					);

				case 'heading':
					const headersToOverride = [2, 3, 4];
					const headingSize = headersToOverride.includes(node.data.size)
						? { fontSize: '30px' }
						: null;
					return (
						<Heading key={path} size={node.data.size} style={headingSize}>
							{serializeChildren(node.nodes)}
						</Heading>
					);

				case 'unordered-list':
					return (
						<Grid columns={12} key={path}>
							<Cell width={[12, 10, 10, 8]} left={[1, 2, 2, 3]}>
								<List css={textStyle} type="bullet">
									{serializeChildren(node.nodes)}
								</List>
							</Cell>
						</Grid>
					);

				case 'ordered-list':
					return (
						<Grid columns={12} key={path}>
							<Cell width={[12, 10, 10, 8]} left={[1, 2, 2, 3]}>
								<List css={textStyle} type="ordered">
									{serializeChildren(node.nodes)}
								</List>
							</Cell>
						</Grid>
					);

				case 'list-item':
					return <Item key={path}>{serializeChildren(node.nodes)}</Item>;

				case 'dynamic-components': {
					return (
						<DynamicComponents
							key={path}
							data={node.data}
							item={item}
							content={JSON.parse(_editorValue)}
						/>
					);
				}

				default: {
					console.error(`Unexpected block '${node.type}' at ${path}`);
				}
			}
		},
	]);
};

export const SlateContent = ({ content, item, cssOverrides, ...props }) => {
	return (
		<div
			{...props}
			className="slate-container"
			css={{
				display: 'flex',
				flexDirection: 'column',
				'> *': { marginBottom: '20px !important' },
				...cssOverrides,
			}}
		>
			{slateRenderer(item, content.document)(content)}
		</div>
	);
};
