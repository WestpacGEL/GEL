import { jsx, getLabel } from '@westpac/core';
import { forwardRef } from 'react';
// ==============================
// Component
// ==============================

const PrimaryHeading = forwardRef(({ state: { titleTag: Tag }, ...rest }, ref) => (
	<Tag ref={ref} {...rest} />
));

PrimaryHeading.displayName = 'PrimaryHeading';

// ==============================
// Styles
// ==============================

const primaryHeadingStyles = () => ({
	label: getLabel('repeater-primary-heading'),
	fontSize: '1rem',
	display: 'flex',
});

// ==============================
// Attributes
// ==============================

const primaryHeadingAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultPrimaryHeading = {
	component: PrimaryHeading,
	styles: primaryHeadingStyles,
	attributes: primaryHeadingAttributes,
};
