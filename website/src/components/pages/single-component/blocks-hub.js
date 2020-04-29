/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Cell, Grid, Container } from '@westpac/grid';
import { Body } from '@westpac/body';
import React from 'react';
import createReactRenderer from './react-renderer';
import { Heading } from '@westpac/heading';
import { List, Item } from '@westpac/list';
import dynamic from 'next/dynamic';
import { getShortCodes } from '../../../shortcodes';
import { blocksGridStyle, blocksContainerStyle } from '../../_utils';

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

const DynamicComponentsWithShortCode = ({ data, ...rest }) => {
	if (data.props) {
		Object.keys(data.props).forEach(key => {
			if (typeof data.props[key] === 'string') {
				data.props[key] = ApplyShortCodes({ text: data.props[key] });
			}
		});
	}

	return <DynamicComponents data={data} {...rest} />;
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
						let target = '_self';
						if (node.data.href.indexOf('://') !== -1) {
							target = '_blank';
						}

						return (
							<a href={node.data.href} key={path} target={target}>
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
						<Container css={blocksContainerStyle}>
							<Grid columns={12} key={path} css={blocksGridStyle}>
								<Cell width={[12, 10, 8, 8]} left={[1, 2, 3, 3]}>
									<Body>
										<p css={textStyle}>{serializeChildren(node.nodes)}</p>
									</Body>
								</Cell>
							</Grid>
						</Container>
					);

				// the below heading has been replaced with a dynamic block for headings.
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
						<Container css={blocksContainerStyle}>
							<Grid columns={12} key={path} css={blocksGridStyle}>
								<Cell width={[12, 10, 8, 8]} left={[1, 2, 3, 3]}>
									<List
										css={{
											...textStyle,
											'& > li::before': {
												marginTop: '6px',
											},
										}}
										type="bullet"
									>
										{serializeChildren(node.nodes)}
									</List>
								</Cell>
							</Grid>
						</Container>
					);

				case 'ordered-list':
					return (
						<Container css={blocksContainerStyle}>
							<Grid columns={12} key={path} css={blocksGridStyle}>
								<Cell width={[12, 10, 8, 8]} left={[1, 2, 3, 3]}>
									<List css={textStyle} type="ordered">
										{serializeChildren(node.nodes)}
									</List>
								</Cell>
							</Grid>
						</Container>
					);

				case 'list-item':
					return <Item key={path}>{serializeChildren(node.nodes)}</Item>;

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
		<div
			{...props}
			className="slate-container"
			css={{
				display: 'flex',
				flexDirection: 'column',
				'> *': { marginBottom: '20px' },
				...cssOverrides,
			}}
		>
			{slateRenderer(item, content.document)(content)}
		</div>
	);
};

const textOnlySlateRenderer = _editorValue => {
	return createReactRenderer([
		// special serialiser for text
		({ node, path }) => {
			if (node.object === 'text') {
				if (!node.text) {
					return [<br />];
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
							<a href={node.data.href} key={path} target={target}>
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
			};
			if (node.object !== 'block') {
				return;
			}

			switch (node.type) {
				case 'paragraph':
					return (
						<p key={path} css={{ ...textStyle, margin: '0 !important' }}>
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

export const TextOnlySlateContent = ({ content, cssOverrides, ...props }) => {
	return (
		<div
			{...props}
			className="slate-container"
			css={{
				display: 'flex',
				flexDirection: 'column',
				'> *': { marginBottom: '20px' },
				...cssOverrides,
			}}
		>
			<Body>{textOnlySlateRenderer(content.document)(content)}</Body>
		</div>
	);
};
