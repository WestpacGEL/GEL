import { jsx, getLabel } from '@westpac/core';
import { Cell } from '@westpac/grid';

// ==============================
// Component
// ==============================

const Left = ({ state: _, ...rest }) => <Cell width={[12, null, 9]} {...rest} />;

// ==============================
// Styles
// ==============================

const leftStyles = () => ({ label: getLabel('footer-left') });

// ==============================
// Attributes
// ==============================

const leftAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultLeft = {
	component: Left,
	styles: leftStyles,
	attributes: leftAttributes,
};
