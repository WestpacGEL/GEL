/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Selector = ({ state: { type, checked, disabled, name }, children, ...rest }) => (
	<div {...rest}>
		{children}
		{type === 'button' ? (
			<input type="hidden" value={checked} disabled={disabled} name={name} />
		) : undefined}
	</div>
);

// ==============================
// Styles
// ==============================

const selectorStyles = () => ({
	label: getLabel('selector'),
	display: 'flex',
	flexDirection: 'column',
});

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
