/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Panel = ({ look, heading, headingTag, overrides, ...rest }) => <div {...rest} />;

export const panelStyles = (_, { look }) => {
	const { COLORS } = useBrand();

	const styleMap = {
		hero: {
			borderColor: COLORS.hero,
		},
		faint: {
			borderColor: COLORS.border,
		},
	};

	return {
		marginBottom: '1.3125rem',
		backgroundColor: '#fff',
		border: `1px solid ${styleMap[look].borderColor}`,
		borderRadius: '0.1875rem',
		table: {
			overflow: 'hidden', //clip overflow for rounded corners
			marginBottom: 0,
			borderBottomRightRadius: `calc(0.1875rem - 1px)`,
			borderBottomLeftRadius: `calc(0.1875rem - 1px)`,
		},
		'table caption': {
			padding: ['0.75rem 0.75rem 0 0.75rem', '1.5rem 1.5rem 0 1.5rem'],
		},
	};
};
