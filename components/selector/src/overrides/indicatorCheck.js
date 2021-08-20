/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const IndicatorCheck = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const indicatorCheckStyles = () => {
	const { COLORS, SPACING } = useBrand();
	const mq = useMediaQuery();

	return mq({
		label: getLabel('selector-option-indicatorCheck'),
		position: 'relative',
		marginLeft: [SPACING(2), null, SPACING(3)], //gap
		flex: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '24px', //medium icon size
		height: '24px', //medium icon size
		flex: 'none',

		'input:checked + div &::after': {
			content: '""',
			display: 'block',
			boxSizing: 'border-box',
			position: 'relative',
			top: '-0.125rem', //tweak
			width: ['1rem', null, '1.25rem'],
			height: ['0.5rem', null, '0.625rem'],
			border: `solid ${COLORS.hero}`,
			borderWidth: '0 0 0.1875rem 0.1875rem',
			transform: 'rotate(-54deg)',
		},
	})[0];
};

// ==============================
// Attributes
// ==============================

const indicatorCheckAttributes = () => ({
	'aria-hidden': 'true',
});

// ==============================
// Exports
// ==============================

export const defaultIndicatorCheck = {
	component: IndicatorCheck,
	styles: indicatorCheckStyles,
	attributes: indicatorCheckAttributes,
};

export const blenderIndicatorCheck = {
	component: IndicatorCheck,
	styles: indicatorCheckStyles,
	attributes: indicatorCheckAttributes,
};
