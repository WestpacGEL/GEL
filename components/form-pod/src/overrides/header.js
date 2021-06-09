/** @jsx jsx */

import { jsx, getLabel, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

const Header = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const headerStyles = (_, { icon }) => {
	const mq = useMediaQuery();
	return mq({
		label: getLabel('formPod-header'),
		position: 'relative',
		marginBottom: ['1.5rem', null, '1.875rem'],
		textAlign: icon && ['center', 'left'],
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
