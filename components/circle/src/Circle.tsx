import { useBrand } from '@westpac/core';
import PropTypes from 'prop-types';
import { CircleProps } from './Circle.types';

/** Circle: Circle */
export const Circle = ({
	tag: Tag = 'div',
	size = '1.875rem',
	background,
	children,
	...props
}: CircleProps) => {
	const { COLORS } = useBrand();
	return (
		<Tag
			css={{
				width: size,
				height: size,
				borderRadius: '50%',
				backgroundColor: background ?? COLORS.background,
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			{...props}
		>
			{children}
		</Tag>
	);
};

Circle.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Adds a background color
	 */
	background: PropTypes.string,
	/**
	 * JSX element to be render inside of circle
	 */
	children: PropTypes.node,
	/**
	 * Size of the circle
	 */
	size: PropTypes.oneOfType([PropTypes.oneOf([0]), PropTypes.string]),
	/**
	 * The native tag that the circle will be rendered as
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
};
