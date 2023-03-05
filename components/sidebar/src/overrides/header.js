import { jsx, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Header = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const headerStyles = () => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('sidebar-header'),
		display: ['flex', null, null, 'none'],
		alignItems: 'center',
		padding: '.375rem .75rem',
		height: '3.375rem',
		backgroundColor: 'transparent',
		transition: 'all .2s ease-out',
		paddingLeft: [null, null, '1.5rem'],
		paddingRight: [null, null, '1.5rem'],
		cursor: 'pointer',
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
