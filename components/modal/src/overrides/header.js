/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Header = ({ state, ...rest }) => <div {...rest} />;

const headerStyles = (_, {}) => {
	const { COLORS } = useBrand();
	return {
		borderBottom: `1px solid ${COLORS.hero}`,
		padding: '1.5rem 2.25rem 1.125rem 1.5rem',
	};
};

const headerAttributes = () => null;

export const defaultHeader = {
	component: Header,
	styles: headerStyles,
	attributes: headerAttributes,
};
