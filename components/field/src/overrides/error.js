/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ErrorMessage } from '@westpac/form';
// ==============================
// Component
// ==============================

const Error = ({ state: _, ...rest }) => <ErrorMessage {...rest} />;

// ==============================
// Styles
// ==============================

const errorStyles = () => ({ label: 'field-error' });

// ==============================
// Attributes
// ==============================

const errorAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultError = {
	component: Error,
	styles: errorStyles,
	attributes: errorAttributes,
};
