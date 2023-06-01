import { useBrand, useMediaQuery } from '@westpac/core';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { FlexiCellAdornment } from '../FlexiCellAdornment';
import { FlexiCellBody } from '../FlexiCellBody';
import { FlexiCellFooter } from '../FlexiCellFooter';
import { FlexiCellHint } from '../FlexiCellHint';
import { FlexiCellLabel } from '../FlexiCellLabel';
import { FlexiCellProps } from './FlexiCell.types';

/** Flexi Cell: Flexi Cell */
export const FlexiCell = ({
	withBorder,
	before,
	after,
	children,
	body,
	tag: Tag = 'div',
	badge,
	...props
}: FlexiCellProps) => {
	const { SPACING, PACKS, COLORS } = useBrand();
	const mq = useMediaQuery();
	const css = useMemo(
		() =>
			mq({
				position: 'relative',
				display: 'flex',
				padding: [SPACING(2), SPACING(3)],
				background: 'white',
				gap: SPACING(2),
				color: 'inherit',
				textDecoration: 'inherit',
				...(withBorder && { border: `solid 1px ${COLORS.border}`, borderRadius: '3px' }),
				':focus': { ...PACKS.focus },
			}),
		[COLORS.border, PACKS.focus, SPACING, mq, withBorder]
	);

	return (
		<Tag css={css} {...props}>
			{badge && <div css={{ top: 0, right: 0, position: 'absolute', zIndex: 9 }}>{badge}</div>}
			{before}
			<div
				css={{
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				{body ? <FlexiCellBody>{children}</FlexiCellBody> : children}
			</div>
			{after}
		</Tag>
	);
};

FlexiCell.Body = FlexiCellBody;
FlexiCell.Footer = FlexiCellFooter;
FlexiCell.Adornment = FlexiCellAdornment;
FlexiCell.Hint = FlexiCellHint;
FlexiCell.Label = FlexiCellLabel;

FlexiCell.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Renders an element on the right
	 */
	after: PropTypes.node,
	/**
	 * Renders an element on the top right corner
	 */
	badge: PropTypes.node,
	/**
	 * Renders an element on the left
	 */
	before: PropTypes.node,
	/**
	 * Injects the FlexiCell.Body inside of the children
	 */
	body: PropTypes.bool,
	/**
	 * the middle content of FlexiCell
	 */
	children: PropTypes.node,
	/**
	 * The native tag that flexicell will be rendered
	 */
	tag: PropTypes.oneOf([
		'a',
		'abbr',
		'address',
		'animate',
		'animateMotion',
		'animateTransform',
		'area',
		'article',
		'aside',
		'audio',
		'b',
		'base',
		'bdi',
		'bdo',
		'big',
		'blockquote',
		'body',
		'br',
		'button',
		'canvas',
		'caption',
		'center',
		'circle',
		'cite',
		'clipPath',
		'code',
		'col',
		'colgroup',
		'data',
		'datalist',
		'dd',
		'defs',
		'del',
		'desc',
		'details',
		'dfn',
		'dialog',
		'div',
		'dl',
		'dt',
		'ellipse',
		'em',
		'embed',
		'feBlend',
		'feColorMatrix',
		'feComponentTransfer',
		'feComposite',
		'feConvolveMatrix',
		'feDiffuseLighting',
		'feDisplacementMap',
		'feDistantLight',
		'feDropShadow',
		'feFlood',
		'feFuncA',
		'feFuncB',
		'feFuncG',
		'feFuncR',
		'feGaussianBlur',
		'feImage',
		'feMerge',
		'feMergeNode',
		'feMorphology',
		'feOffset',
		'fePointLight',
		'feSpecularLighting',
		'feSpotLight',
		'feTile',
		'feTurbulence',
		'fieldset',
		'figcaption',
		'figure',
		'filter',
		'footer',
		'foreignObject',
		'form',
		'g',
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'head',
		'header',
		'hgroup',
		'hr',
		'html',
		'i',
		'iframe',
		'image',
		'img',
		'input',
		'ins',
		'kbd',
		'keygen',
		'label',
		'legend',
		'li',
		'line',
		'linearGradient',
		'link',
		'main',
		'map',
		'mark',
		'marker',
		'mask',
		'menu',
		'menuitem',
		'meta',
		'metadata',
		'meter',
		'mpath',
		'nav',
		'noindex',
		'noscript',
		'object',
		'ol',
		'optgroup',
		'option',
		'output',
		'p',
		'param',
		'path',
		'pattern',
		'picture',
		'polygon',
		'polyline',
		'pre',
		'progress',
		'q',
		'radialGradient',
		'rect',
		'rp',
		'rt',
		'ruby',
		's',
		'samp',
		'script',
		'section',
		'select',
		'slot',
		'small',
		'source',
		'span',
		'stop',
		'strong',
		'style',
		'sub',
		'summary',
		'sup',
		'svg',
		'switch',
		'symbol',
		'table',
		'tbody',
		'td',
		'template',
		'text',
		'textarea',
		'textPath',
		'tfoot',
		'th',
		'thead',
		'time',
		'title',
		'tr',
		'track',
		'tspan',
		'u',
		'ul',
		'use',
		'var',
		'video',
		'view',
		'wbr',
		'webview',
	]),
	/**
	 * Adds a border radius and a border
	 */
	withBorder: PropTypes.bool,
};
