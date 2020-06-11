/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';

const Header = ({ state, ...rest }) => <div {...rest} />;

const headerStyles = (_, { look }) => {
	const { COLORS } = useBrand();
	const mq = useMediaQuery();

	const styleMap = {
		hero: {
			backgroundColor: COLORS.hero,
			borderColor: COLORS.hero,
		},
		faint: {
			backgroundColor: COLORS.background,
			borderColor: COLORS.border,
		},
	};

	return mq({
		label: getLabel('panel-header', { look }),
		padding: ['0.625rem 0.75rem', null, '0.625rem 1.5rem'],
		backgroundColor: styleMap[look].backgroundColor,
		borderBottom: `1px solid ${styleMap[look].borderColor}`,
		borderTopRightRadius: `calc(0.1875rem - 1px)`,
		borderTopLeftRadius: `calc(0.1875rem - 1px)`,
		'@media print': {
			borderBottom: '1px solid #000',
		},
	})[0];
};

const headerAttributes = () => null;

export const defaultHeader = {
	component: Header,
	styles: headerStyles,
	attributes: headerAttributes,
};
