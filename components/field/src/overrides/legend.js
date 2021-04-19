/** @jsx jsx */

import { jsx } from '@westpac/core';
import { FormLabel } from '@westpac/form';

// ==============================
// Component
// ==============================

const Legend = ({ state: _, ...rest }) => <FormLabel tag="legend" {...rest} />;

// ==============================
// Styles
// ==============================

const legendStyles = () => ({ label: 'fieldset-legend', marginBottom: '1.125rem' });

// ==============================
// Attributes
// ==============================

const legendAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultLegend = {
	component: Legend,
	styles: legendStyles,
	attributes: legendAttributes,
};
