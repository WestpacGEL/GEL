import { jsx, getLabel, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

const Header = ({ state: _, ...rest }) => <header {...rest} />;

// ==============================
// Styles
// ==============================

const headerStyles = (_, { fixed }) => {
	const mq = useMediaQuery();
	return mq({
		label: getLabel('header'),
		flex: 'none',
		display: 'flex',
		backgroundColor: '#fff',
		...(fixed && { height: ['calc(3.375rem + 1px)', null, 'calc(4.0625rem + 1px)'] }),
	})[0];
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
