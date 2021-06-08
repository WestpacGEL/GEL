/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const InputCluster = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const inputClusterStyles = (_, { horizontal }) => {
	return {
		label: getLabel('form-input-cluster'),
		display: horizontal && 'flex',
		flexWrap: horizontal && 'wrap',
	};
};

// ==============================
// Attributes
// ==============================

const inputClusterAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultInputCluster = {
	component: InputCluster,
	styles: inputClusterStyles,
	attributes: inputClusterAttributes,
};
