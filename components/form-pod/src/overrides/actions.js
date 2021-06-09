/** @jsx jsx */

import { jsx, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Actions = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const actionsStyles = (_, { reverse }) => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('formPod-action'),
		display: [null, 'flex'],
		flexDirection: !reverse && [null, 'row-reverse'],
		marginTop: '1.875rem',

		'button + button': {
			marginLeft: ['0.75rem', '0.5rem'], //gap
		},
	})[0];
};

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
