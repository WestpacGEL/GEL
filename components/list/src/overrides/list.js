/** @jsx jsx */

import { jsx } from '@westpac/core';

const List = ({ state: { type }, ...rest }) => {
	const ListType = type === 'ordered' ? 'ol' : 'ul';
	return <ListType {...rest} />;
};

const listStyles = (_, { type }) => ({
	listStyle: type !== 'ordered' && 'none',
	margin: 0,
	padding: type === 'ordered' ? '0 0 0 1.25rem' : 0,
});

const listAttributes = (_, { type, assistiveText }) => ({
	//a11y: as we're using `list-style:none` CSS, we need `role="list"` for VoiceOver to announce this as a list (see https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
	role: type !== 'ordered' ? 'list' : undefined,
	//a11y: tick bullet meaning must be conveyed; setting a default (but configurable) aria-label value
	'aria-label': type === 'tick' ? assistiveText || 'The following items are ticked' : undefined,
});

export const defaultList = {
	component: List,
	styles: listStyles,
	attributes: listAttributes,
};
