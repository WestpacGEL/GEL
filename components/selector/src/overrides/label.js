/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { Body } from '@westpac/body';

// ==============================
// Component
// ==============================

const Label = ({ state: _, ...rest }) => <Body {...rest} />;

// ==============================
// Styles
// ==============================

const labelStyles = () => {
	const { PACKS } = useBrand();

	return {
		label: getLabel('selector-option-label'),
		...PACKS.typeScale.bodyFont[8],
	};
};

// ==============================
// Attributes
// ==============================

const labelAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultLabel = {
	component: Label,
	styles: labelStyles,
	attributes: labelAttributes,
};
