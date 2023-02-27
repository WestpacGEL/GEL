import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const InputClusterItem = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const inputClusterItemStyles = (_, { horizontal }) => {
	return {
		label: getLabel('form-input-cluster-item'),
		marginRight: horizontal && '1.125rem',
		display: horizontal && 'flex',
		flexDirection: horizontal && 'column',
		justifyContent: horizontal && 'flex-end',

		// Subequent items
		'& + &': {
			marginTop: !horizontal && '1.125rem',
		},
	};
};

// ==============================
// Attributes
// ==============================

const inputClusterItemAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultInputClusterItem = {
	component: InputClusterItem,
	styles: inputClusterItemStyles,
	attributes: inputClusterItemAttributes,
};
