/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';

export const Header = ({ look, heading, headingTag, overrides, ...rest }) => <div {...rest} />;

export const headerStyles = (_, { look }) => {
	const mq = useMediaQuery();
	const { COLORS } = useBrand();

	const styleMap = {
		hero: {
			color: '#fff',
			backgroundColor: COLORS.hero,
			borderColor: COLORS.hero,
		},
		faint: {
			color: COLORS.text,
			backgroundColor: COLORS.background,
			borderColor: COLORS.border,
		},
	};

	return mq({
		padding: ['0.625rem 0.75rem', '0.625rem 1.5rem'],
		backgroundColor: styleMap[look].backgroundColor,
		borderBottom: `1px solid ${styleMap[look].borderColor}`,
		color: styleMap[look].color,
		borderTopRightRadius: `calc(0.1875rem - 1px)`,
		borderTopLeftRadius: `calc(0.1875rem - 1px)`,
		fontSize: '1rem',
		fontWeight: 'normal',
		'@media print': {
			borderBottom: '1px solid #000',
		},
	})[0];
};
