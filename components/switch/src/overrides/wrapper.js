/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { sizeMap } from './_utils';

export const Wrapper = ({
	name,
	label,
	toggleText,
	flipped,
	block,
	disabled,
	assistiveText,
	...props
}) => <label {...props} />;

export const wrapperStyles = (_, { block, disabled, flipped, size }) => {
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
		flexDirection: flipped && 'row-reverse',
		cursor: disabled ? 'not-allowed' : 'pointer',
	})[0];
};
