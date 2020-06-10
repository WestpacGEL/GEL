/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { Item as ListItem } from '@westpac/list';

const Item = (props) => <ListItem {...props} />;

const itemStyles = () => ({
	label: getLabel('listGroup-item'),
});

const itemAttributes = () => null;

export const defaultItem = {
	component: Item,
	styles: itemStyles,
	attributes: itemAttributes,
};
