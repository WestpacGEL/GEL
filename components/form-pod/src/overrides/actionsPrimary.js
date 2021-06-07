/** @jsx jsx */

import { jsx, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const ActionsPrimary = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const actionsPrimaryStyles = () => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('formPod-action-primary'),
		display: ['flex', 'block'],
		flex: '0 0 auto',
		justifyContent: 'space-between',
		marginLeft: [null, 'auto'], //flex auto-position right
	})[0];
};

// ==============================
// Attributes
// ==============================

const actionsPrimaryAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultActionsPrimary = {
	component: ActionsPrimary,
	styles: actionsPrimaryStyles,
	attributes: actionsPrimaryAttributes,
};
