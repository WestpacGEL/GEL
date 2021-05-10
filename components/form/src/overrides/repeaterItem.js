/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const RepeaterItem = ({ state: _, ...rest }) => <li {...rest} />;

// ==============================
// Styles
// ==============================

const repeaterItemStyles = () => ({
	label: getLabel('repeater-item'),
	position: 'relative',
});

// ==============================
// Attributes
// ==============================

const repeaterItemAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultRepeaterItem = {
	component: RepeaterItem,
	styles: repeaterItemStyles,
	attributes: repeaterItemAttributes,
};
