import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Caption = ({ state: _, ...rest }) => <caption {...rest} />;

// ==============================
// Styles
// ==============================

const captionStyles = () => {
	const { TYPE } = useBrand();

	return {
		label: getLabel('table-caption'),
		fontSize: '1.125rem',
		textAlign: 'left',
		marginBottom: '0.75rem',
		...TYPE.bodyFont[300],
	};
};

// ==============================
// Attributes
// ==============================

const captionAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultCaption = {
	component: Caption,
	styles: captionStyles,
	attributes: captionAttributes,
};
