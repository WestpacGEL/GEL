/** @jsx jsx */

import { jsx } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';
import { FormLabel } from '@westpac/form';

// ==============================
// Component
// ==============================

const Label = ({ state: { hideLabel }, ...rest }) =>
	hideLabel ? <VisuallyHidden tag="label" {...rest} /> : <FormLabel {...rest} />;

// ==============================
// Styles
// ==============================

const labelStyles = () => ({ label: 'field-label', marginBottom: '1.125rem' });

// ==============================
// Attributes
// ==============================

const labelAttributes = (_, { instanceId }) => ({
	for: instanceId,
});

// ==============================
// Exports
// ==============================

export const defaultLabel = {
	component: Label,
	styles: labelStyles,
	attributes: labelAttributes,
};
