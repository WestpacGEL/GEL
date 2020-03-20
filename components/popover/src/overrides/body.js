/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Body } from '@westpac/body';

const PopoverBody = ({ state, ...rest }) => <Body {...rest} />;

const bodyStyles = (_, {}) => {
	const { COLORS } = useBrand();
	return {
		color: COLORS.neutral,
	};
};

const bodyAttributes = () => null;

export const defaultBody = {
	component: PopoverBody,
	styles: bodyStyles,
	attributes: bodyAttributes,
};
