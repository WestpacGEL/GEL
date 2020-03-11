/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const List = ({ state, ...rest }) => <ol {...rest} />;

const listStyles = () => {
	const { COLORS } = useBrand();

	return {
		position: 'relative',
		listStyle: 'none',
		paddingLeft: 0,
		margin: 0,

		// line
		'::after': {
			content: '""',
			display: 'block',
			position: 'absolute',
			zIndex: 0,
			borderLeft: `2px solid ${COLORS.border}`,
			top: '17px',
			bottom: '24px',
			left: '36px',
		},
	};
};

const listAttributes = () => null;

export const defaultList = {
	component: List,
	styles: listStyles,
	attributes: listAttributes,
};
