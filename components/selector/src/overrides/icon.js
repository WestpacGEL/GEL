/** @jsx jsx */

import { jsx, useBrand, getLabel, useMediaQuery, classNames } from '@westpac/core';

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
	const mq = useMediaQuery();
	const { SPACING } = useBrand();

	return mq({
		label: getLabel('selector-option-icon'),
		marginRight: [SPACING(2), null, SPACING(3)], //gap
		flex: 'none',
	})[0];
};

// ==============================
// Attributes
// ==============================

const iconAttributes = () => ({
	'aria-hidden': 'true',
});

const blenderAttributes = (_, { iconSize }) => ({
	...iconAttributes(),
	className: classNames({
		'__convert__selector-option-icon': true,
		'__convert__icon-hero': true,
		[`__convert__icon-${iconSize}`]: iconSize && iconSize !== 'medium',
	}),
});

// ==============================
// Exports
// ==============================

export const defaultIcon = {
	component: Icon,
	styles: iconStyles,
	attributes: iconAttributes,
};

export const blenderIcon = {
	component: Icon,
	styles: iconStyles,
	attributes: blenderAttributes,
};
