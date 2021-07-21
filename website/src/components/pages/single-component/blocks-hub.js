/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Cell, Grid, Container } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import { List, Item } from '../../list';
import { Body } from '../../body';
import { ExternalLinkIcon } from '../../external-link-icon';
import { Section } from '../../section';
import dynamic from 'next/dynamic';
import React from 'react';
import reactStringReplace from 'react-string-replace';

import createReactRenderer from './react-renderer';
import { getShortCodes } from '../../../shortcodes';
import { Separator } from '../../separator';

const DynamicComponents = dynamic(() => import('./dynamic-components'), { ssr: false });

const Bold = (props) => <strong css={{ fontWeight: 'bold' }} {...props} />;
const Italic = (props) => <em css={{ fontStyle: 'italic' }} {...props} />;
const Strike = (props) => <span css={{ textDecoration: 'strike-through' }} {...props} />;
const Under = (props) => <span css={{ textDecoration: 'underline' }} {...props} />;

const ApplyShortCodes = ({ text }) => {
	const { BRAND } = useBrand();
	const shortcodes = getShortCodes(BRAND);
	const textCodes = [...text.matchAll(/\[\[[A-Za-z0-9]*\]\]/g)].map((m) => m[0]);
	let shortCodedText = text;

	textCodes.forEach((shortCode, index) => {
		shortCodedText = reactStringReplace(shortCodedText, shortCode, (match, i) => {
			const code = shortCode.slice(2, shortCode.length - 2);
			if (typeof shortcodes[code] === 'function') {
				const Component = shortcodes[code];
				return <Component key={`${shortCodedText}${index}`} />;
			} else {
				return shortcodes[code] || code;
			}
		});
	});

	return shortCodedText;
};

const DynamicComponentsWithShortCode = ({ data, ...rest }) => {
	if (data.props) {
		Object.keys(data.props).forEach((key) => {
			if (typeof data.props[key] === 'string') {
				data.props[key] = ApplyShortCodes({ text: data.props[key] });
			}
		});
	}

	return <DynamicComponents data={data} {...rest} />;
};

const slateRenderer = (item, _editorValue) => {
	const { SPACING } = useBrand();

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
						let target = '_self';
						if (node.data.href.indexOf('://') !== -1) {
							target = '_blank';
						}

						return (
							<a href={node.data.href} key={path} target={target}>
								{serializeChildren(node.nodes)}
								{target === '_blank' && <ExternalLinkIcon />}
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
		({ node, parents, path, serializeChildren }) => {
			if (node.object !== 'block') {
				return;
			}
			switch (node.type) {
				case 'paragraph':
					if (!node.nodes[0].text) {
						return null;
					}

					const nested =
						parents.findIndex((parent) => parent.type === 'blockquote') >= 0 ? true : false;

					return nested ? (
						<p key={path}>{serializeChildren(node.nodes)}</p>
					) : (
						<Cell key={path} width={[12, 11, 8, 7, 9]}>
							<Body>
								<p>{serializeChildren(node.nodes)}</p>
							</Body>
						</Cell>
					);

				// the below heading has been replaced with a dynamic block for headings.
				case 'heading':
					return (
						<Heading key={path} size={node.data.size || 6}>
							{serializeChildren(node.nodes)}
						</Heading>
					);

				case 'unordered-list':
					return (
						<Cell key={path} width={[12, 11, 8, 7, 9]}>
							<List type="bullet" css={{ marginBottom: SPACING(2) }}>
								{serializeChildren(node.nodes)}
							</List>
						</Cell>
					);

				case 'ordered-list':
					return (
						<Cell key={path} width={[12, 11, 8, 7, 9]}>
							<List type="ordered" css={{ marginBottom: SPACING(2) }}>
								{serializeChildren(node.nodes)}
							</List>
						</Cell>
					);

				case 'list-item':
					return <Item key={path}>{serializeChildren(node.nodes)}</Item>;

				case 'blockquote':
					return (
						<Cell key={path} width={[12, 11, 8, 7, 9]}>
							<Body>
								<blockquote>{serializeChildren(node.nodes)}</blockquote>
							</Body>
						</Cell>
					);

				case 'section':
					return (
						<Section key={path}>
							<Container>
								<Grid rowGap="0 !important">{serializeChildren(node.nodes)}</Grid>
							</Container>
						</Section>
					);
				case 'dynamic-components': {
					return (
						<DynamicComponentsWithShortCode
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
		<div {...props} className="slate-container" css={cssOverrides}>
			{slateRenderer(item, content.document)(content)}
		</div>
	);
};

const textOnlySlateRenderer = (_editorValue) => {
	return createReactRenderer([
		// special serialiser for text
		({ node, path }) => {
			if (node.object === 'text') {
				if (!node.text) {
					return [<br key={`br-${path}`} />];
				}
				const x = node.text.split('\n').reduce((array, text, i) => {
					if (i !== 0) array.push(<br key={`${path}_${i}`} />);
					array.push(<ApplyShortCodes key={`sc-${path}_${i}`} text={text} />);
					return array;
				}, []);
				return x;
			}
		},
		// serialiser for links
		({ node, path, serializeChildren }) => {
			if (node.object === 'inline') {
				switch (node.type) {
					case 'link':
						let target = '_self';
						if (node.data.href.indexOf('://') !== -1) {
							target = '_blank';
						}

						return (
							<a href={node.data.href} key={`inline-${path}`} target={target}>
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
					return <Bold key={`bold-${path}`}>{serializeChildren(node.nodes)}</Bold>;
				case 'italic':
					return <Italic key={`italic-${path}`}>{serializeChildren(node.nodes)}</Italic>;
				case 'strikethrough':
					return <Strike key={`strike-${path}`}>{serializeChildren(node.nodes)}</Strike>;
				case 'underline':
					return <Under key={`under-${path}`}>{serializeChildren(node.nodes)}</Under>;
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
						<p key={`block-${path}`} css={{ margin: '0 !important' }}>
							{serializeChildren(node.nodes)}
						</p>
					);
				default: {
					console.error(`Unexpected block '${node.type}' at ${path}`);
				}
			}
		},
	]);
};

export const TextOnlySlateContent = ({ item, content, ...rest }) => {
	return (
		<Body className="slate-container" {...rest}>
			{textOnlySlateRenderer(content.document)(content)}
		</Body>
	);
};
