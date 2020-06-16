/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

const List = ({ state, ...rest }) => <ol {...rest} />;

const listStyles = () => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('progressRope-list'),
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
			borderLeft: `2px dotted ${COLORS.borderDark}`,
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
