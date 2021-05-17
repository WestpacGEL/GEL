/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Item as ListItem } from '@westpac/list';

const Item = (props) => <ListItem {...props} />;

const itemStyles = () => {
	const { COLORS } = useBrand();

	return {
		label: 'listGroup-item',
		margin: 0,
		borderBottom: `1px solid ${COLORS.border}`,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',

		'@media print': {
			borderColor: '#000',
		},
	};
};

const itemAttributes = () => null;

export const defaultItem = {
	component: Item,
	styles: itemStyles,
	attributes: itemAttributes,
};
