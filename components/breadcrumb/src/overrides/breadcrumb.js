import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Breadcrumb = ({ state: _, ...rest }) => <nav {...rest} />;

// ==============================
// Styles
// ==============================

const breadcrumbStyles = () => ({
	label: getLabel('breadcrumb'),
});

// ==============================
// Attributes
// ==============================

const breadcrumbAttributes = (_, { assistiveText }) => ({ 'aria-label': assistiveText });

// ==============================
// Exports
// ==============================

export const defaultBreadcrumb = {
	component: Breadcrumb,
	styles: breadcrumbStyles,
	attributes: breadcrumbAttributes,
};
