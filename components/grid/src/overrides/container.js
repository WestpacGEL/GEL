/** @jsx jsx */

import { jsx, useMediaQuery, getLabel } from '@westpac/core';
import { containerMap } from '../_utils';

const { paddingHorizontal, fixedWidth, fluidMaxWidth } = containerMap;

const Container = ({ state: { tag: Tag }, ...rest }) => <Tag {...rest} />;

const containerStyles = (_, { fixed }) => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('container'),
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
