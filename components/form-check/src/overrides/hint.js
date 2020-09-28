/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Body } from '@westpac/body';
import { sizeMap } from '../_utils';

const Hint = ({ state: _, ...rest }) => <Body {...rest} />;

const hintStyles = (_, { size }) => {
	const { COLORS, PACKS } = useBrand();

	return {
		paddingLeft: sizeMap[size]['label'].gap,
		color: COLORS.muted,
	};
};

const hintAttributes = (_, { hintId }) => ({ id: hintId });

export const defaultHint = {
	component: Hint,
	styles: hintStyles,
	attributes: hintAttributes,
};
