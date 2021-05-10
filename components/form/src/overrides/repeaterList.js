/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const RepeaterList = ({ state: _, ...rest }) => <ol {...rest} />;

// ==============================
// Styles
// ==============================

const repeaterListStyles = () => ({
	label: getLabel('repeater-list'),
	listStyle: 'none',
	paddingLeft: 0,
	margin: 0,
});

// ==============================
// Attributes
// ==============================

const repeaterListAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultRepeaterList = {
	component: RepeaterList,
	styles: repeaterListStyles,
	attributes: repeaterListAttributes,
};
