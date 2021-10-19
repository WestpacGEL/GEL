/** @jsx jsx */

import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const Fieldset = ({ state: _, ...rest }) => <fieldset {...rest} />;

// ==============================
// Styles
// ==============================

const fieldsetStyles = () => ({ label: 'fieldset', border: 'none', margin: 0, padding: 0 });

// ==============================
// Attributes
// ==============================

const fieldsetAttributes = (_, { ariaDescribedByValue, error }) => ({
	role: 'group', //a11y: for JAWS support of fieldset wrapped text inputs
	'aria-describedby': ariaDescribedByValue ? ariaDescribedByValue : undefined,
	// 'aria-invalid': !!error,
});

// ==============================
// Exports
// ==============================

export const defaultFieldset = {
	component: Fieldset,
	styles: fieldsetStyles,
	attributes: fieldsetAttributes,
};
