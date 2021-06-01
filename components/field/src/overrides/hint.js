/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Hint as FormHint } from '@westpac/form';
// ==============================
// Component
// ==============================

const Hint = ({ state: _, ...rest }) => <FormHint {...rest} />;

// ==============================
// Styles
// ==============================

const hintStyles = () => ({ label: 'field-hint', marginTop: '-0.75rem', marginBottom: '1.125rem' });

// ==============================
// Attributes
// ==============================

const hintAttributes = (_, { hintId }) => ({ id: hintId });

// ==============================
// Exports
// ==============================

export const defaultHint = {
	component: Hint,
	styles: hintStyles,
	attributes: hintAttributes,
};
