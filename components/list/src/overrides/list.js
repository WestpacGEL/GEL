/** @jsx jsx */

import { jsx } from '@westpac/core';
import React from 'react';

export const List = ({
	look,
	type,
	nested,
	spacing,
	icon,
	assistiveText,
	data,
	overrides,
	...rest
}) => {
	const ListType = type === 'ordered' ? 'ol' : 'ul';

	// As we're using `list-style: none` CSS (below), we need `role="list"` for VoiceOver to announce this as a list (see https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
	return <ListType role={type !== 'ordered' && 'list'} {...rest} />;
};

export const listStyles = (_, { type }) => ({
	listStyle: type !== 'ordered' && 'none',
	margin: 0,
	padding: type === 'ordered' ? '0 0 0 1.25rem' : 0,
});
