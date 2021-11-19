/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Compacta = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const compactaStyles = () => ({
	label: getLabel('compacta'),
});

// ==============================
// Attributes
// ==============================

const compactaAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultCompacta = {
	component: Compacta,
	styles: compactaStyles,
	attributes: compactaAttributes,
};
