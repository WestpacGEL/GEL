/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const List = ({ current, instanceId, headingsTag, assistiveText, data, ...rest }) => (
	<ol {...rest} />
);

export const listStyles = () => {
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
