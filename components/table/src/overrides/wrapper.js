/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

const Wrapper = ({ state, ...rest }) => <div {...rest} />;

const wrapperStyles = () => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('tableWrapper'),
		'@media screen and (max-width: 480px)': {
			width: '100%',
			marginBottom: '1.125rem',
			overflowY: 'hidden',
			overflowX: 'auto',
			border: `1px solid ${COLORS.border}`,
		},
	};
};

const wrapperAttributes = () => null;

export const defaultWrapper = {
	component: Wrapper,
	styles: wrapperStyles,
	attributes: wrapperAttributes,
};
