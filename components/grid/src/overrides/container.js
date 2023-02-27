import { jsx, useMediaQuery, getLabel } from '@westpac/core';
import { containerMap } from '../_utils';

const { paddingHorizontal, maxWidthFixed, maxWidthFluid } = containerMap;

const Container = ({ state: { tag: Tag }, ...rest }) => <Tag {...rest} />;

const containerStyles = (_, { fixed }) => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('container'),
		boxSizing: 'border-box',
		width: '100%',
		maxWidth: fixed ? maxWidthFixed : maxWidthFluid,
		paddingLeft: paddingHorizontal,
		paddingRight: paddingHorizontal,
		marginLeft: 'auto',
		marginRight: 'auto',
	})[0];
};

const containerAttributes = () => null;

export const defaultContainer = {
	component: Container,
	styles: containerStyles,
	attributes: containerAttributes,
};
