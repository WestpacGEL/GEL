import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Hint = ({ state: { tag: Tag }, ...rest }) => <Tag {...rest} />;

// ==============================
// Styles
// ==============================

const hintStyles = (_, { spacing }) => {
	const { COLORS } = useBrand();

	const spacingMap = {
		medium: {
			marginTop: '-0.375rem',
			marginBottom: '0.75rem',
		},
		large: {
			marginTop: '-0.75rem',
			marginBottom: '1.125rem',
		},
	};
	return {
		label: getLabel('form-hint'),
		color: COLORS.muted,
		fontSize: '0.875rem',
		...spacingMap[spacing],
	};
};

// ==============================
// Attributes
// ==============================

const hintAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultHint = {
	component: Hint,
	styles: hintStyles,
	attributes: hintAttributes,
};
