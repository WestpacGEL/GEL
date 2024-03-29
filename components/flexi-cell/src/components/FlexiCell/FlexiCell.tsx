import { useBrand, useMediaQuery } from '@westpac/core';
import { ArrowRightIcon } from '@westpac/icon';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { FlexiCellAdornment } from '../FlexiCellAdornment';
import { FlexiCellBody } from '../FlexiCellBody';
import { FlexiCellButton } from '../FlexiCellButton';
import { FlexiCellCircle } from '../FlexiCellCircle';
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
	withArrow,
	badgeZIndex = 9,
	...props
}: FlexiCellProps) => {
	const { SPACING, PACKS, COLORS } = useBrand();
	const isLink = useMemo(() => ['a', 'button'].includes(Tag), [Tag]);
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
				transition: 'borderColor 0.2s ease',
				...(withBorder && { border: `solid 1px ${COLORS.borderDark}`, borderRadius: '3px' }),
				':focus': { ...PACKS.focus },
				...(isLink && {
					':hover': {
						borderColor: COLORS.hero,
						...(!withBorder && {
							'.flexi-cell-label': {
								color: COLORS.link,
							},
						}),
					},
				}),
			}),
		[COLORS.borderDark, COLORS.hero, COLORS.link, PACKS.focus, SPACING, isLink, mq, withBorder]
	);

	return (
		<Tag css={css} {...props}>
			{badge && (
				<div css={{ top: 0, right: 0, position: 'absolute', zIndex: badgeZIndex }}>{badge}</div>
			)}
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
			{withArrow && (
				<FlexiCellAdornment align="top">
					<ArrowRightIcon color={COLORS.link} aria-hidden="true" />
				</FlexiCellAdornment>
			)}
		</Tag>
	);
};

FlexiCell.Body = FlexiCellBody;
FlexiCell.Footer = FlexiCellFooter;
FlexiCell.Adornment = FlexiCellAdornment;
FlexiCell.Hint = FlexiCellHint;
FlexiCell.Label = FlexiCellLabel;
FlexiCell.Button = FlexiCellButton;
FlexiCell.Circle = FlexiCellCircle;

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
	 * zIndex for badge
	 */
	badgeZIndex: PropTypes.oneOfType([
		PropTypes.oneOf([
			'-moz-initial',
			'auto',
			'inherit',
			'initial',
			'revert-layer',
			'revert',
			'unset',
		]),
		PropTypes.arrayOf(
			PropTypes.oneOfType([
				PropTypes.oneOf([
					'-moz-initial',
					'auto',
					'inherit',
					'initial',
					'revert-layer',
					'revert',
					'unset',
				]),
				PropTypes.number,
			])
		),
		PropTypes.number,
	]),
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
	/**
	 * Adds an arrow on top right
	 */
	withArrow: PropTypes.bool,
	/**
	 * Adds a border radius and a border
	 */
	withBorder: PropTypes.bool,
};
