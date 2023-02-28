import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Panel = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const panelStyles = (_, { isOpen }) => {
	return {
		label: getLabel('formCheckReveal-panel'),
		display: !isOpen ? 'none' : 'inline-block',
	};
};

// ==============================
// Attributes
// ==============================

const panelAttributes = (_, { instanceId, isOpen }) => ({
	id: `${instanceId}-panel`,
	'aria-hidden': !isOpen,
});

const blenderAttributes = (_, props) => ({
	...panelAttributes(_, props),
	'data-js': 'formCheckReveal-panel__version__',
});

// ==============================
// Exports
// ==============================

export const defaultPanel = {
	component: Panel,
	styles: panelStyles,
	attributes: panelAttributes,
};

export const blenderPanel = {
	component: Panel,
	styles: panelStyles,
	attributes: blenderAttributes,
};
