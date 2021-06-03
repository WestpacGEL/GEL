/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';

// ==============================
// Component
// ==============================

const FormLabel = ({ state: { tag, srOnly }, ...rest }) => {
	const Tag = srOnly ? VisuallyHidden : tag;
	return <Tag {...rest} />;
};

// ==============================
// Styles
// ==============================

const formLabelStyles = (_, { subLabel, spacing }) => {
	const { TYPE } = useBrand();

	const mapSpacing = {
		medium: {
			marginBottom: subLabel ? '0.375rem' : '0.75rem',
		},
		large: {
			marginBottom: subLabel ? '0.375rem' : '1.125rem',
		},
	};

	return {
		label: getLabel('form-label'),
		display: 'block',
		fontSize: subLabel ? '0.875rem' : '1rem',
		marginBottom: mapSpacing[spacing].marginBottom,
		...TYPE.bodyFont[500],
	};
};

// ==============================
// Attributes
// ==============================

const formLabelAttributes = (_, { htmlFor }) => ({ htmlFor });

// ==============================
// Exports
// ==============================

export const defaultFormLabel = {
	component: FormLabel,
	styles: formLabelStyles,
	attributes: formLabelAttributes,
};
