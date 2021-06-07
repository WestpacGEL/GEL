/** @jsx jsx */

import { jsx, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const ActionsSecondary = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const actionsSecondaryStyles = () => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('formPod-action-secondary'),
		flex: 1,
		marginTop: ['0.75rem', 0],
		marginRight: [null, '1.5rem'],
	})[0];
};

// ==============================
// Attributes
// ==============================

const actionsSecondaryAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultActionsSecondary = {
	component: ActionsSecondary,
	styles: actionsSecondaryStyles,
	attributes: actionsSecondaryAttributes,
};
