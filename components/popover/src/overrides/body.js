import { jsx, useBrand, getLabel } from '@westpac/core';
import { Body } from '@westpac/body';

// ==============================
// Component
// ==============================

const PopoverBody = ({ state: _, ...rest }) => <Body {...rest} />;

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

const bodyStyles = () => ({
	label: getLabel('popover-body'),
});

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
