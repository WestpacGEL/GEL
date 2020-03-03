/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { sizeMap } from './_utils';

const Root = ({ state, ...rest }) => <label {...rest} />;

const rootStyles = (_, { block, disabled, size }) => {
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
		height: !block && sizeMap(size).height,
		marginBottom: '0.375rem',
		cursor: disabled ? 'not-allowed' : 'pointer',
	})[0];
};

export const defaultRoot = { component: Root, styles: rootStyles, attributes: () => null };
