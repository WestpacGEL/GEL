/** @jsx jsx */

import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const ErrorList = ({ state: _, ...rest }) => <ul {...rest} />;

// ==============================
// Styles
// ==============================

const errorListStyles = () => ({
	label: 'fieldset-errorList',
	listStyle: 'none',
	margin: '0 0 0.75rem',
	paddingLeft: 0,
});

// ==============================
// Attributes
// ==============================

const errorListAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultErrorList = {
	component: ErrorList,
	styles: errorListStyles,
	attributes: errorListAttributes,
};
