/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { defaultProps } from '../FormCheck';

// ==============================
// Component
// ==============================

const Panel = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const panelStyles = (_, { isOpen }) => {
	return {
		label: getLabel('formCheck-panel'),
		display: !isOpen ? 'none' : 'inline',
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = () => panelStyles(null, defaultProps);

// ==============================
// Attributes
// ==============================

const panelAttributes = (_, { instanceId, isOpen }) => ({
	id: `${instanceId}-panel`,
	'aria-hidden': !isOpen,
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
	styles: blenderStyles,
	attributes: panelAttributes,
};
