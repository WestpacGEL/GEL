/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const List = ({ current, instanceIdPrefix, headingsTag, assistiveText, data, ...rest }) => (
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
			borderLeft: `2px dashed ${COLORS.border}`,
			top: '17px',
			bottom: '24px',
			// right: '2.25rem',
			left: '36px',
			// transform: grouped && !end ? 'translateY(0.875rem)' : 'translateY(0.625rem)',
		},
	};
};
