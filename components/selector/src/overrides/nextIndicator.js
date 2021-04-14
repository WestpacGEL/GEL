/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';
import { ArrowRightIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const NextIndicator = ({ state: _, ...rest }) => (
	<ArrowRightIcon size="large" assistiveText={null} {...rest} />
);
// ==============================
// Styles
// ==============================

const nextIndicatorStyles = (_, { checked }) => {
	const { COLORS, SPACING } = useBrand();
	const mq = useMediaQuery();

	return mq({
		label: getLabel('selector-nextIndicator'),
		position: 'relative',
		color: COLORS.primary,
		marginLeft: SPACING(4), //gap
		marginRight: `-${SPACING(1)}`, //tweak
		transition: 'transform 0.2s ease',
		'label:hover &': {
			transform: `translateX(${SPACING(1)})`,
		},
	})[0];
};

// ==============================
// Attributes
// ==============================

const nextIndicatorAttributes = () => ({
	'aria-hidden': 'true',
});

// ==============================
// Exports
// ==============================

export const defaultNextIndicator = {
	component: NextIndicator,
	styles: nextIndicatorStyles,
	attributes: nextIndicatorAttributes,
};
