/** @jsx jsx */
import { jsx } from '@westpac/core';
import React from 'react';
import createReactRenderer from './react-renderer';
import { Heading } from '@westpac/heading';
import { List, Item } from '@westpac/list';
import dynamic from 'next/dynamic';

const DynamicComponents = dynamic(() => import('./dynamic-components'), { ssr: false });

const Bold = props => <strong css={{ fontWeight: 'bold' }} {...props} />;
const Italic = props => <em css={{ fontStyle: 'italic' }} {...props} />;
const Strike = props => <span css={{ textDecoration: 'strike-through' }} {...props} />;
const Under = props => <span css={{ textDecoration: 'underline' }} {...props} />;
const leftIndent = {
	paddingLeft: '5rem',
	'@media (max-width: 568px)': {
		paddingLeft: '0rem',
	},
};

const slateRenderer = item =>
	createReactRenderer([
		// special serialiser for text
		({ node, path }) => {
			if (node.object === 'text') {
				return node.text.split('\n').reduce((array, text, i) => {
					if (i !== 0) array.push(<br key={`${path}_${i}`} />);
					array.push(text);
					return array;
				}, []);
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
			if (node.object !== 'block') {
				return;
			}

			switch (node.type) {
				case 'paragraph':
					return (
						<p css={leftIndent} key={path}>
							{serializeChildren(node.nodes)}
						</p>
					);

				case 'heading':
					return (
						<Heading tag="h2" key={path}>
							{serializeChildren(node.nodes)}
						</Heading>
					);

				case 'list-item':
					return <Item key={path}>{serializeChildren(node.nodes)}</Item>;

				case 'unordered-list':
					return (
						<List type="bullet" key={path} css={leftIndent}>
							{serializeChildren(node.nodes)}
						</List>
					);

				case 'ordered-list':
					return (
						<List type="ordered" key={path} css={leftIndent}>
							{serializeChildren(node.nodes)}
						</List>
					);

				case 'dynamic-components': {
					return <DynamicComponents key={path} data={node.data} item={item} />;
				}

				default: {
					console.error(`Unexpected block '${node.type}' at ${path}`);
				}
			}
		},
	]);

export const SlateContent = ({ content, item, ...props }) => {
	return (
		<div
			{...props}
			css={{ display: 'flex', flexDirection: 'column', '> *': { marginBottom: '20px !important' } }}
		>
			{slateRenderer(item)(content)}
		</div>
	);
};
