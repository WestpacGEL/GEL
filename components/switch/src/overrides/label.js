/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const Label = ({ state, ...rest }) => <span {...rest} />;

const labelStyles = (_, { block }) => {
	return {
		label: getLabel('switch-label', { block }),
		flex: block && 1,
		display: 'flex',
		alignItems: 'center',
		whiteSpace: 'normal',
		position: 'relative',
		paddingRight: '0.375rem',
	};
};

const labelAttributes = () => null;

export const defaultLabel = { component: Label, styles: labelStyles, attributes: labelAttributes };
