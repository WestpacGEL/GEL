import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Text = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const textStyles = () => ({
	label: getLabel('progressBar-text'),
	position: 'relative',
	zIndex: 1,
	display: 'inline-block',
	margin: '0 0.75rem',

	'@media print': {
		backgroundColor: '#000 !important',
		color: '#fff !important',
	},
});

// ==============================
// Attributes
// ==============================

const textAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultText = {
	component: Text,
	styles: textStyles,
	attributes: textAttributes,
};
