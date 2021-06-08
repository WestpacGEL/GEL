/** @jsx jsx */

import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const Field = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const fieldStyles = () => ({ label: 'field' });

// ==============================
// Attributes
// ==============================

const fieldAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultField = {
	component: Field,
	styles: fieldStyles,
	attributes: fieldAttributes,
};
