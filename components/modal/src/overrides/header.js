/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Header = ({ state: _, ...rest }) => <div {...rest} />;

const headerStyles = () => {
	const { COLORS } = useBrand();
	return {
		borderBottom: `1px solid ${COLORS.hero}`,
		padding: '1rem 2.25rem 0.75rem 1.5rem',
	};
};

const headerAttributes = () => null;

export const defaultHeader = {
	component: Header,
	styles: headerStyles,
	attributes: headerAttributes,
};
