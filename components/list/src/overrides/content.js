import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const Content = ({ state: { href, tag }, children, ...rest }) => {
	const Tag = tag || 'a';
	return href ? <Tag {...rest}>{children}</Tag> : children;
};

// ==============================
// Styles
// ==============================

const contentStyles = () => ({});

// ==============================
// Attributes
// ==============================

const contentAttributes = (_, { href }) => ({
	href,
});

// ==============================
// Exports
// ==============================

export const defaultContent = {
	component: Content,
	styles: contentStyles,
	attributes: contentAttributes,
};
