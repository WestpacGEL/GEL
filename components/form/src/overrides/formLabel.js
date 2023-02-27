import { jsx, useBrand, getLabel } from '@westpac/core';
import { forwardRef } from 'react';
import { VisuallyHidden } from '@westpac/a11y';

// ==============================
// Component
// ==============================

const FormLabel = forwardRef(({ state: { tag, srOnly }, ...rest }, ref) => {
	const Tag = srOnly ? VisuallyHidden : tag;
	return <Tag ref={ref} tag={srOnly ? 'label' : undefined} {...rest} />;
});
FormLabel.displayName = 'FormLabel';

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
		paddingLeft: 0,
		paddingRight: 0,
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
