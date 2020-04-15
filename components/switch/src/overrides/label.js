/** @jsx jsx */

import { jsx } from '@westpac/core';

const Label = ({ state, ...rest }) => <span {...rest} />;

const labelStyles = (_, { block }) => {
	return {
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
