/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';

import { blenderReconciler } from './_utils';

// ==============================
// Component
// ==============================

const Footer = ({ state, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const baseStyles = () => {
	const { COLORS } = useBrand();

	return {
		padding: ['0.625rem 0.75rem', null, '0.625rem 1.5rem'],
		backgroundColor: COLORS.light,
		borderTop: `1px solid ${COLORS.border}`,
		borderBottomRightRadius: `calc(0.1875rem - 1px)`,
		borderBottomLeftRadius: `calc(0.1875rem - 1px)`,
	};
};

const blenderStyles = () => blenderReconciler(baseStyles());

const footerStyles = () => {
	const mq = useMediaQuery();

	return mq({
		...baseStyles(),
	})[0];
};

// ==============================
// Attributes
// ==============================

const footerAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultFooter = {
	component: Footer,
	styles: footerStyles,
	attributes: footerAttributes,
};

export const blenderFooter = {
	component: Footer,
	styles: blenderStyles,
	attributes: footerAttributes,
};
