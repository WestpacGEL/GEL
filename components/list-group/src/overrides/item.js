/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Item as ListItem } from '@westpac/list';

const Item = props => <ListItem {...props} />;

const itemStyles = () => ({});

const itemAttributes = () => null;

export const defaultItem = {
	component: Item,
	styles: itemStyles,
	attributes: itemAttributes,
};
