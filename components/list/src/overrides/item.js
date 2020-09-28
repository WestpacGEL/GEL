/** @jsx jsx */

import { jsx } from '@westpac/core';

const Item = ({ state: _, ...rest }) => <li {...rest} />;

const itemStyles = (_, {}) => null;

const itemAttributes = () => null;

export const defaultItem = {
	component: Item,
	styles: itemStyles,
	attributes: itemAttributes,
};
