/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const FormSection = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const formSectionStyles = (_, { noPadding }) => {
	const mq = useMediaQuery();
	const { COLORS } = useBrand();

	return mq({
		label: getLabel('form-section'),
		position: 'relative', //for `.form-section-actions` positioning
		paddingLeft: !noPadding && [null, '3.375rem', '2.875rem', '3.125rem'],
		paddingRight: !noPadding && [null, '3.375rem', '2.875rem', '3.125rem'],

		':not(:first-of-type)': {
			paddingTop: ['1.875rem', '2.25rem'],
		},
		':not(:last-child)': {
			paddingBottom: '0.375rem', //0.6rem assuming there will be a `FormGroup` margin-bottom (3rem)
		},

		// Subequent sections
		'& + &': {
			borderTop: `1px solid ${COLORS.border}`,
		},
	})[0];
};

// ==============================
// Attributes
// ==============================

const formSectionAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultFormSection = {
	component: FormSection,
	styles: formSectionStyles,
	attributes: formSectionAttributes,
};
