/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ErrorMessage } from '@westpac/form';

// ==============================
// Component
// ==============================

const ErrorListItem = ({ state: _, ...rest }) => <ErrorMessage tag="li" {...rest} />;

// ==============================
// Styles
// ==============================

const errorListItemStyles = () => ({
	label: 'fieldset-errorList-item',
	marginBottom: '0.375rem',
});

// ==============================
// Attributes
// ==============================

const errorListItemAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultErrorListItem = {
	component: ErrorListItem,
	styles: errorListItemStyles,
	attributes: errorListItemAttributes,
};
