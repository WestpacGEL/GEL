/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';
import { ArrowRightIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const Indicator = ({ state: { type, nextIndicator }, ...rest }) =>
	type === 'radio' && nextIndicator ? (
		<ArrowRightIcon size="large" assistiveText={null} {...rest} />
	) : (
		<div {...rest} />
	);

// ==============================
// Styles
// ==============================

const indicatorStyles = (_, { type, checked, nextIndicator }) => {
	const { COLORS, SPACING } = useBrand();
	const mq = useMediaQuery();

	return {
		label: getLabel('selector-option-indicator'),
		position: 'relative',
		flex: 'none',

		// Next indicator (ArrowNextIcon)
		...(type === 'radio' &&
			nextIndicator && {
				color: COLORS.primary,
				marginRight: `-${SPACING(1)}`, //tweak
				transition: 'transform 0.2s ease',
				'input:hover + div &': {
					transform: `translateX(${SPACING(1)})`,
				},
			}),

		// Check indicator
		...((type === 'checkbox' || (type === 'radio' && !nextIndicator)) && {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '36px', //xlarge icon size
			height: '36px', //xlarge icon size

			'input:checked + div &::after': {
				content: '""',
				display: 'block',
				boxSizing: 'border-box',
				position: 'relative',
				top: '-0.125rem', //tweak
				width: '1.25rem',
				height: '0.625rem',
				border: `solid ${COLORS.hero}`,
				borderWidth: '0 0 0.1875rem 0.1875rem',
				transform: 'rotate(-54deg)',
			},
		}),

		// Note: Temporary fix... mq() array values must come last if `&` selectors are used (as above). This is an issue with our reset specificity solution (`.GEL ` class prepend)
		...mq({
			marginLeft: [SPACING(3), null, SPACING(4)], //gap
		})[0],
	};
};

// ==============================
// Attributes
// ==============================

const indicatorAttributes = (_, { type }) => ({
	'aria-hidden': type === 'radio' ? 'true' : null,
});

// ==============================
// Exports
// ==============================

export const defaultIndicator = {
	component: Indicator,
	styles: indicatorStyles,
	attributes: indicatorAttributes,
};
