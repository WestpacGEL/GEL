/** @jsx jsx */

import { jsx } from '@westpac/core';

const Item = ({ state, ...rest }) => <li {...rest} />;

const itemStyles = (_, {}) => null;

const itemAttributes = () => null;

export const defaultItem = {
	component: Item,
	styles: itemStyles,
	attributes: itemAttributes,
};
