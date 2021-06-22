/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Panel = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const panelStyles = (_, { borderTop }) => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('formPod-panel'),
		backgroundColor: '#fff',
		borderTop: borderTop && `1px solid ${COLORS.hero}`,
		borderBottom: `1px solid ${COLORS.border}`,
	};
};

// ==============================
// Attributes
// ==============================

const panelAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultPanel = {
	component: Panel,
	styles: panelStyles,
	attributes: panelAttributes,
};
