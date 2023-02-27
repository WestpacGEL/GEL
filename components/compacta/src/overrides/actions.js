import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Actions = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const actionsStyles = () => ({
	label: getLabel('compacta-actions'),
	marginLeft: 'auto',
});

// ==============================
// Attributes
// ==============================

const actionsAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultActions = {
	component: Actions,
	styles: actionsStyles,
	attributes: actionsAttributes,
};
