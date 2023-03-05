import { jsx, useBrand, getLabel } from '@westpac/core';
import { Heading } from '@westpac/heading';

// ==============================
// Component
// ==============================

const AlertHeading = ({ state: { headingTag }, ...rest }) => (
	<Heading size={9} tag={headingTag} {...rest} />
);

const BlenderHeading = (props) => (
	<AlertHeading
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
	const { SPACING } = useBrand();

	return {
		label: getLabel('alert-heading'),
		marginBottom: SPACING(2),
	};
};

// ==============================
// Attributes
// ==============================

const headingAttibutes = () => null;

// ==============================
// Exports
// ==============================

export const defaultHeading = {
	component: AlertHeading,
	styles: headingStyles,
	attributes: headingAttibutes,
};

export const blenderHeading = {
	component: BlenderHeading,
	styles: headingStyles,
	attributes: headingAttibutes,
};
