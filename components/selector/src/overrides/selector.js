/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Selector = ({ state: { type, checked, disabled, name }, children, ...rest }) => (
	<div {...rest}>
		{type === 'button' ? (
			<input type="hidden" value={checked} disabled={disabled} name={name} />
		) : undefined}
		{children}
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

const selectorAttributes = () => ({
	'data-js': 'selector__version__',
});

// ==============================
// Exports
// ==============================

export const defaultSelector = {
	component: Selector,
	styles: selectorStyles,
	attributes: selectorAttributes,
};
