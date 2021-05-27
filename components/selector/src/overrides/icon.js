/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Icon = ({ icon: Icon, state: { iconSize }, ...rest }) => (
	<Icon size={iconSize} color="hero" assistiveText={null} {...rest} />
);

// ==============================
// Styles
// ==============================

const iconStyles = () => {
	const { SPACING } = useBrand();
	const mq = useMediaQuery();

	return mq({
		label: getLabel('selector-option-icon'),
		marginRight: SPACING(4), //gap
		flex: 'none',
	});
};

// ==============================
// Attributes
// ==============================

const iconAttributes = () => ({
	'aria-hidden': 'true',
});

// ==============================
// Exports
// ==============================

export const defaultIcon = {
	component: Icon,
	styles: iconStyles,
	attributes: iconAttributes,
};
