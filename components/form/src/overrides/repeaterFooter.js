/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const RepeaterFooter = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const repeaterFooterStyles = () => ({
	label: getLabel('repeater-footer'),
	display: 'flex',
	justifyContent: 'space-between',
});

// ==============================
// Attributes
// ==============================

const repeaterFooterAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultRepeaterFooter = {
	component: RepeaterFooter,
	styles: repeaterFooterStyles,
	attributes: repeaterFooterAttributes,
};
