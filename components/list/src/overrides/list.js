/** @jsx jsx */

import { jsx } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';

const List = ({ state: { type, assistiveText }, children, ...rest }) => {
	const ListType = type === 'ordered' ? 'ol' : 'ul';

	//a11y: tick bullet meaning must be conveyed; render a (configurable) VisuallyHidden first item
	const hiddenItem =
		type === 'tick' ? (
			<VisuallyHidden tag="li">{assistiveText || 'The following items are ticked:'}</VisuallyHidden>
		) : null;

	return (
		<ListType {...rest}>
			{hiddenItem}
			{children}
		</ListType>
	);
};

const listStyles = (_, { type }) => ({
	listStyle: type !== 'ordered' && 'none',
	margin: 0,
	padding: type === 'ordered' ? '0 0 0 1.25rem' : 0,
});

const listAttributes = (_, { type, assistiveText }) => ({
	//a11y: as we're using `list-style:none` CSS, we need `role="list"` for VoiceOver to announce this as a list (see https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
	role: type !== 'ordered' ? 'list' : undefined,
});

export const defaultList = {
	component: List,
	styles: listStyles,
	attributes: listAttributes,
};
