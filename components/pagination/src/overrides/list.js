import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const List = ({ state: _, ...rest }) => <ul {...rest} />;

// ==============================
// Styles
// ==============================

const listStyles = () => ({
	label: getLabel('pagination-list'),
	listStyle: 'none',
	display: 'flex',
	paddingLeft: 0,
	margin: '1.3125rem 0',
	alignItems: 'center',
});

// ==============================
// Attributes
// ==============================

const listAttributes = () => ({
	//a11y: as we're using `list-style:none` CSS, we need `role="list"` for VoiceOver to announce this as a list (see https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
	role: 'list',
});

// ==============================
// Exports
// ==============================

export const defaultList = {
	component: List,
	styles: listStyles,
	attributes: listAttributes,
};
