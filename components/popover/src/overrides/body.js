/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Body } from '@westpac/body-text';

const PopoverBody = ({ state, ...rest }) => <BodyText {...rest} />;

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
