/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Body = ({ state, ...rest }) => <div {...rest} />;

const bodyStyles = () => {
	const { TYPE, COLORS } = useBrand();
	return {
		padding: '1.125rem 1.5rem',
		lineHeight: 1.428571429,
		color: COLORS.text,
		fontFeatureSettings: '"liga" 1', // Enable OpenType ligatures in IE
		...TYPE.bodyFont[400],
	};
};

const bodyAttributes = () => null;

export const defaultBody = {
	component: Body,
	styles: bodyStyles,
	attributes: bodyAttributes,
};
