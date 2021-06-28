/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Repeater = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const repeaterStyles = () => ({ label: getLabel('repeater') });

// ==============================
// Attributes
// ==============================

const repeaterAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultRepeater = {
	component: Repeater,
	styles: repeaterStyles,
	attributes: repeaterAttributes,
};
