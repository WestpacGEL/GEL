/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

const Crumb = ({ state: _, ...rest }) => <li {...rest} />;

const crumbStyles = () => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('breadcrumb-crumb'),
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
