/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { Body } from '@westpac/body';

// ==============================
// Component
// ==============================

const PopoverBody = ({ state, ...rest }) => <Body {...rest} />;

const BlenderPopoverBody = (props) => (
	<PopoverBody
		overrides={{
			Body: {
				styles: (styles) => {
					const blenderStyles = { ...styles };
					delete blenderStyles.label;
					return blenderStyles;
				},
			},
		}}
		{...props}
	/>
);

// ==============================
// Styles
// ==============================

const bodyStyles = (_, {}) => {
	const { COLORS } = useBrand();
	return {
		label: getLabel('popover-body'),
		color: COLORS.neutral,
	};
};

// ==============================
// Attributes
// ==============================

const bodyAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultBody = {
	component: PopoverBody,
	styles: bodyStyles,
	attributes: bodyAttributes,
};

export const blenderBody = {
	component: BlenderPopoverBody,
	styles: bodyStyles,
	attributes: bodyAttributes,
};
