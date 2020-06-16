/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const GroupButtonWrapper = ({
	state: {
		context: { headingsTag: Tag },
	},
	...rest
}) => <Tag {...rest} />;

const groupButtonWrapperStyles = () => ({
	label: getLabel('progressRope-groupBtnWrapper'),
	margin: 0,
	fontSize: 'inherit',
});

const groupButtonWrapperAttributes = () => null;

export const defaultGroupButtonWrapper = {
	component: GroupButtonWrapper,
	styles: groupButtonWrapperStyles,
	attributes: groupButtonWrapperAttributes,
};
