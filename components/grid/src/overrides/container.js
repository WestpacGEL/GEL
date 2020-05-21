/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';

const Container = ({ state, ...rest }) => <div {...rest} />;

const containerStyles = (_, { fixed }) => {
	const mq = useMediaQuery();
	const paddingHorizontal = [12, 30, 36, 48, 60];
	const fixedWidth = [null, null, 768, 992, 1200];
	const fluidMaxWidth = 1320; //1200 (lg) + 60 (paddingHorizontal) + 60 (paddingHorizontal)

	return mq({
		boxSizing: 'border-box',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: fixed && fixedWidth,
		maxWidth: !fixed && fluidMaxWidth,
		paddingLeft: paddingHorizontal,
		paddingRight: paddingHorizontal,
	})[0];
};

const containerAttributes = () => null;

export const defaultContainer = {
	component: Container,
	styles: containerStyles,
	attributes: containerAttributes,
};
