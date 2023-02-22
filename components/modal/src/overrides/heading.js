import { jsx, useBrand, getLabel } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { forwardRef } from 'react';

// ==============================
// Component
// ==============================

const ModalHeading = forwardRef(({ state: _, ...rest }, ref) => (
	<Heading ref={ref} tag="h1" size={8} {...rest} />
));
ModalHeading.displayName = 'ModalHeading';

const BlenderModalHeading = forwardRef((props, ref) => (
	<ModalHeading
		ref={ref}
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
));
BlenderModalHeading.displayName = 'BlenderModalHeading';
// ==============================
// Styles
// ==============================

const headingStyles = () => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('modal-heading'),
		color: COLORS.text,
	};
};

// ==============================
// Attributes
// ==============================

const headingAttributes = () => ({ tabIndex: '-1' }); //a11y: heading receives focus on open

const blenderAttributes = () => ({
	...headingAttributes(),
	'data-js': 'modal-heading__version__',
});

// ==============================
// Exports
// ==============================

export const defaultHeading = {
	component: ModalHeading,
	styles: headingStyles,
	attributes: headingAttributes,
};

export const blenderHeading = {
	component: BlenderModalHeading,
	styles: headingStyles,
	attributes: blenderAttributes,
};
