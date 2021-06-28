/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const ErrorMessageItem = ({ state: _, ...rest }) => <li {...rest} />;

// ==============================
// Styles
// ==============================

const errorMessageItemStyles = () => {
	return { label: getLabel('form-error-message-item'), marginBottom: '0.375rem' };
};

// ==============================
// Attributes
// ==============================

const errorMessageItemAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultErrorMessageItem = {
	component: ErrorMessageItem,
	styles: errorMessageItemStyles,
	attributes: errorMessageItemAttributes,
};
