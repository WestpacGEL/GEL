/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { sizeMap } from './_utils';

const Switch = ({ state, ...rest }) => <label {...rest} />;

const switchStyles = (_, { block, disabled, size }) => {
	const mq = useMediaQuery();

	return mq({
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
