import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const List = ({ state: { separator }, ...rest }) => {
	const Tag = separator ? 'ol' : 'ul';
	return <Tag {...rest} />;
};

// ==============================
// Styles
// ==============================

const listStyles = () => ({
	label: getLabel('repeater-list'),
	listStyle: 'none',
	paddingLeft: 0,
	margin: 0,
});

// ==============================
// Attributes
// ==============================

const listAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultList = {
	component: List,
	styles: listStyles,
	attributes: listAttributes,
};
