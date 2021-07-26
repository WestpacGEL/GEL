/** @jsx jsx */

import { jsx, getLabel, formatClassName } from '@westpac/core';

// ==============================
// Component
// ==============================

const Collapsible = ({ state: _, ...rest }) => <div {...rest} />;

const BlenderCollapsible = ({ className, ...rest }) => (
	<Collapsible className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const collapsibleStyles = () => ({
	label: getLabel('collapsible'),
	position: 'relative',
	display: 'inline-block',
});

// ==============================
// Attributes
// ==============================

const collapsibleAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultCollapsible = {
	component: Collapsible,
	styles: collapsibleStyles,
	attributes: collapsibleAttributes,
};

export const blenderCollapsible = {
	component: BlenderCollapsible,
	styles: collapsibleStyles,
	attributes: collapsibleAttributes,
};
