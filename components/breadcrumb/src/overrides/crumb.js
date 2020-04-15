/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Crumb = ({ state, ...rest }) => <li {...rest} />;

const crumbStyles = () => {
	const { COLORS } = useBrand();

	return {
		boxSizing: 'border-box',
		display: 'inline-block',
		position: 'relative',
		color: COLORS.text,
		verticalAlign: 'middle',
	};
};

const crumbAttributes = () => null;

export const defaultCrumb = {
	component: Crumb,
	styles: crumbStyles,
	attributes: crumbAttributes,
};
