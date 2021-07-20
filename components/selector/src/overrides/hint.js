/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Hint = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const hintStyles = () => {
	const { COLORS, PACKS, SPACING } = useBrand();

	return {
		label: getLabel('selector-option-hint'),
		color: COLORS.muted,
		marginTop: SPACING(1),
		...PACKS.typeScale.bodyFont[9],
	};
};

// ==============================
// Attributes
// ==============================

const hintAttributes = (_, { type, hintId }) => ({
	id: type === 'radio' || type === 'checkbox' ? hintId : undefined,
});

// ==============================
// Exports
// ==============================

export const defaultHint = {
	component: Hint,
	styles: hintStyles,
	attributes: hintAttributes,
};
