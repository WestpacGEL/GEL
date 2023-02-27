import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Page = ({ state: _, ...rest }) => <li {...rest} />;

// ==============================
// Styles
// ==============================

const pageStyles = () => ({
	label: getLabel('pagination-page'),
});

// ==============================
// Attributes
// ==============================

const pageAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultPage = {
	component: Page,
	styles: pageStyles,
	attributes: pageAttributes,
};
