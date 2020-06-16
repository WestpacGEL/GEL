/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

const Header = ({ state, ...rest }) => <div {...rest} />;

const headerStyles = () => {
	const { COLORS } = useBrand();
	return {
		label: getLabel('modal-header'),
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
