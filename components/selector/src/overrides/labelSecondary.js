/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const LabelSecondary = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const labelSecondaryStyles = () => {
	const { SPACING, TYPE } = useBrand();

	return {
		label: getLabel('selector-option-label-secondary'),
		width: '50%',
		textAlign: 'right',
		marginLeft: SPACING(2),
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		...TYPE.bodyFont[400],
		fontFeatureSettings: '"tnum"', //enable tabular (monospaced) figures
	};
};

// ==============================
// Attributes
// ==============================

const labelSecondaryAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultLabelSecondary = {
	component: LabelSecondary,
	styles: labelSecondaryStyles,
	attributes: labelSecondaryAttributes,
};
