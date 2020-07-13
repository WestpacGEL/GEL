/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';

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

const headingStyles = () => {
	const { TYPE } = useBrand();

	return { label: 'panel-heading', ...TYPE.bodyFont[400], color: 'inherit' };
};

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
