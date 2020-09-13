/** @jsx jsx */

import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const Item = ({ state, ...rest }) => <li {...rest} />;

// ==============================
// Styles
// ==============================

const itemStyles = (_, {}) => null;

// ==============================
// Attributes
// ==============================

const itemAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultItem = {
	component: Item,
	styles: itemStyles,
	attributes: itemAttributes,
};
