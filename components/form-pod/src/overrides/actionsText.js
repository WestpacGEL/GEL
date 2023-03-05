import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const ActionsText = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const actionsTextStyles = () => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('formPod-actions-text'),
		fontSize: '1rem',
		textAlign: ['center', 'left'],
		marginBottom: ['1.5rem', 0],
	})[0];
};

// ==============================
// Attributes
// ==============================

const actionsTextAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultActionsText = {
	component: ActionsText,
	styles: actionsTextStyles,
	attributes: actionsTextAttributes,
};
