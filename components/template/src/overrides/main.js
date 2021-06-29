/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Main = ({ state: _, ...rest }) => <main {...rest} />;

// ==============================
// Styles
// ==============================

const mainStyles = () => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('template-main'),
		flex: '1 0 auto',
		paddingTop: ['1.875rem', null, null, '3.75rem'],
		paddingBottom: ['1.875rem', null, null, '3.75rem'],
	})[0];
};

// ==============================
// Attributes
// ==============================

const mainAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultMain = {
	component: Main,
	styles: mainStyles,
	attributes: mainAttributes,
};
