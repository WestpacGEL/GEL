import { jsx, useBrand, getLabel } from '@westpac/core';
import { Heading } from '@westpac/heading';

// ==============================
// Component
// ==============================

const PanelHeading = ({ state: { headingTag }, ...rest }) => (
	<Heading tag={headingTag} size={9} {...rest} />
);

const BlenderHeading = ({ state: { headingTag }, ...rest }) => (
	<Heading
		tag={headingTag}
		size={9}
		overrides={{
			Heading: {
				styles: (styles) => {
					const blenderStyles = { ...styles };
					delete blenderStyles.label; // removing existing label so outputs 'panel-heading' instead of 'heading-size-9-panel-heading'
					return blenderStyles;
				},
			},
		}}
		{...rest}
	/>
);

// ==============================
// Styles
// ==============================

const headingStyles = () => {
	const { TYPE } = useBrand();
	return { label: getLabel('panel-heading'), ...TYPE.bodyFont[400], color: 'inherit' };
};

// ==============================
// Attributes
// ==============================

const headingAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultHeading = {
	component: PanelHeading,
	styles: headingStyles,
	attributes: headingAttributes,
};

export const blenderHeading = {
	component: BlenderHeading,
	styles: headingStyles,
	attributes: headingAttributes,
};
