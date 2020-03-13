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

		// default line
		'::after': {
			content: '""',
			display: 'block',
			position: 'absolute',
			zIndex: 0,
			borderLeft: `2px dashed ${COLORS.border}`,
			top: '1.0625rem',
			bottom: '1.5rem',
			left: '2.25rem',
		},
	};
};

const listAttributes = () => null;

export const defaultList = {
	component: List,
	styles: listStyles,
	attributes: listAttributes,
};
