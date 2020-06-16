/** @jsx jsx */

import { jsx } from '@westpac/core';

const Item = ({ state, ...rest }) => <li {...rest} />;

const itemStyles = (_, {}) => ({});

const itemAttributes = (_, { type }) => ({
	...(type === 'link' && {
		'data-js': 'list-link-item__version__',
		'data-testing': 'list-link-item',
	}),
});

export const defaultItem = {
	component: Item,
	styles: itemStyles,
	attributes: itemAttributes,
};
