/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { blenderReconciler } from './_utils';

// ==============================
// Component
// ==============================
const Header = ({ state, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const baseStyles = () => {
	return {
		label: 'panel-header',
		padding: ['0.625rem 0.75rem', null, '0.625rem 1.5rem'],
		borderBottom: '1px solid',
		borderTopRightRadius: `calc(0.1875rem - 1px)`,
		borderTopLeftRadius: `calc(0.1875rem - 1px)`,
		'@media print': {
			borderBottom: '1px solid #000',
		},
	};
};

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
		...baseStyles(),
		backgroundColor: styleMap[look].backgroundColor,
		borderBottom: `1px solid ${styleMap[look].borderColor}`,
	})[0];
};

export const blenderStyles = () => {
	return blenderReconciler(baseStyles());
};

// ==============================
// Attributes
// ==============================

const headerAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultHeader = {
	component: Header,
	styles: headerStyles,
	attributes: headerAttributes,
};

export const blenderHeader = {
	component: Header,
	styles: blenderStyles,
	attributes: headerAttributes,
};
