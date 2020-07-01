/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';

import { blenderReconciler } from './_utils';

// ==============================
// Component
// ==============================

const PanelHeading = ({ state: { headingTag }, ...rest }) => (
	<Heading tag={headingTag} size={9} {...rest} />
);

// ==============================
// Styles
// ==============================
// Base
// ==============================

const baseStyles = () => {
	const { TYPE } = useBrand();

	return { label: 'panel-heading', ...TYPE.bodyFont[400], color: 'inherit' };
};

const headingStyles = () => baseStyles();

const blenderStyles = () => blenderReconciler(baseStyles());

// ==============================
// Attributes
// ==============================

const headingAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultHeading = {
	component: PanelHeading,
	styles: headingStyles,
	attributes: headingAttributes,
};

export const blenderHeading = {
	component: PanelHeading,
	styles: blenderStyles,
	attributes: headingAttributes,
};
