/** @jsx jsx */

import { jsx, useMediaQuery, getLabel } from '@westpac/core';

const Switch = ({ state, ...rest }) => <label {...rest} />;

const switchStyles = (_, { block, disabled }) => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('switch', { block, disabled }),
		display: block ? 'flex' : 'inline-flex',
		verticalAlign: 'top',
		opacity: disabled && 0.5,
		width: block && '100%',
		flexWrap: 'wrap',
		alignItems: 'center',
		position: 'relative',
		marginRight: !block && '1.125rem',
		marginBottom: '0.375rem',
		cursor: disabled ? 'not-allowed' : 'pointer',
	})[0];
};

const switchAttributes = (_, { instanceId }) => ({
	htmlFor: instanceId, //a11y: must use explicit association
});

export const defaultSwitch = {
	component: Switch,
	styles: switchStyles,
	attributes: switchAttributes,
};
