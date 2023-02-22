import { jsx, useBrand, getLabel } from '@westpac/core';
import { Heading } from '@westpac/heading';

// ==============================
// Component
// ==============================

const PopoverHeading = ({ state: { headingTag }, ...rest }) => (
	<Heading size={9} tag={headingTag} {...rest} />
);

const BlenderPopoverHeading = (props) => (
	<PopoverHeading
		overrides={{
			Heading: {
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

const headingStyles = () => {
	const { SPACING, TYPE } = useBrand();

	return {
		label: getLabel('popover-heading'),
		marginBottom: SPACING(2),
		...TYPE.bodyFont[500],
	};
};

// ==============================
// Attributes
// ==============================

const headingAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultHeading = {
	component: PopoverHeading,
	styles: headingStyles,
	attributes: headingAttributes,
};

export const blenderHeading = {
	component: BlenderPopoverHeading,
	styles: headingStyles,
	attributes: headingAttributes,
};
