/** @jsx jsx */

import { jsx, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Selector = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const selectorStyles = () => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('selector'),
		display: 'flex',
		flexDirection: 'column',
	})[0];
};

// ==============================
// Attributes
// ==============================

const selectorAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultSelector = {
	component: Selector,
	styles: selectorStyles,
	attributes: selectorAttributes,
};
