/** @jsx jsx */

import { jsx, getLabel, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

const Collapsible = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const collapsibleStyles = () => {
	const { SPACING } = useBrand();

	return {
		label: getLabel('collapsible'),
		position: 'relative',
		display: 'inline-block',
		marginBottom: SPACING(4),
	};
};

// ==============================
// Attributes
// ==============================

const collapsibleAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultCollapsible = {
	component: Collapsible,
	styles: collapsibleStyles,
	attributes: collapsibleAttributes,
};
