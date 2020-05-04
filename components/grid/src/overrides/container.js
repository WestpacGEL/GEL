/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';

const Container = ({ state, ...rest }) => <div {...rest} />;

const containerStyles = () => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();

	const padding = [SPACING(2), SPACING(3), SPACING(6), SPACING(8), SPACING(10)];

	return mq({
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: SPACING(200),
		paddingLeft: padding,
		paddingRight: padding,
	})[0];
};

const containerAttributes = () => null;

export const defaultContainer = {
	component: Container,
	styles: containerStyles,
	attributes: containerAttributes,
};
