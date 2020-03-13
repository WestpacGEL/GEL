/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';

const Footer = ({ state, ...rest }) => <div {...rest} />;

const footerStyles = () => {
	const { COLORS } = useBrand();
	const mq = useMediaQuery();

	return mq({
		padding: ['0.625rem 0.75rem', '0.625rem 1.5rem'],
		backgroundColor: COLORS.light,
		borderTop: `1px solid ${COLORS.border}`,
		borderBottomRightRadius: `calc(0.1875rem - 1px)`,
		borderBottomLeftRadius: `calc(0.1875rem - 1px)`,
	})[0];
};

const footerAttributes = () => null;

export const defaultFooter = {
	component: Footer,
	styles: footerStyles,
	attributes: footerAttributes,
};
