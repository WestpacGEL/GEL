import { jsx, useBrand, getLabel } from '@westpac/core';
import { Heading } from '@westpac/heading';

// ==============================
// Component
// ==============================

const ButtonDropdownHeading = ({ state: { tag }, ...rest }) => (
	<Heading size={10} tag={tag} {...rest} />
);

const BlenderButtonDropdownHeading = (props) => (
	<ButtonDropdownHeading
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
	const { COLORS, TYPE } = useBrand();

	return {
		label: getLabel('buttonDropdown-heading'),
		margin: '1.5rem -0.375rem 1.125rem -0.375rem',
		padding: '0.4375rem',
		backgroundColor: COLORS.background,
		color: COLORS.hero,
		...TYPE.bodyFont[500],

		':first-of-type': {
			marginTop: '-0.375rem',
		},
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
	component: ButtonDropdownHeading,
	styles: headingStyles,
	attributes: headingAttributes,
};

export const blenderHeading = {
	component: BlenderButtonDropdownHeading,
	styles: headingStyles,
	attributes: headingAttributes,
};
