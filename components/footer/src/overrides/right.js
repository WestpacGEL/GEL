/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { Cell } from '@westpac/grid';

// ==============================
// Component
// ==============================

const Right = ({ state: _, ...rest }) => <Cell width={[12, null, 3]} {...rest} />;

// ==============================
// Styles
// ==============================

const rightStyles = () => ({ label: getLabel('footer-right') });

// ==============================
// Attributes
// ==============================

const rightAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultRight = {
	component: Right,
	styles: rightStyles,
	attributes: rightAttributes,
};
