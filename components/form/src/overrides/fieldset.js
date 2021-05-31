/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Fieldset = ({ state: _, ...rest }) => <fieldset {...rest} />;

// ==============================
// Styles
// ==============================

const fieldsetStyles = () => ({
	label: getLabel('form-fieldset'),
});

// ==============================
// Attributes
// ==============================

const fieldsetAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultFieldset = {
	component: Fieldset,
	styles: fieldsetStyles,
	attributes: fieldsetAttributes,
};
