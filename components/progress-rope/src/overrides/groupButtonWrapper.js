/** @jsx jsx */

import { jsx } from '@westpac/core';

const GroupButtonWrapper = ({
	state: {
		context: { headingsTag: Tag },
	},
	...rest
}) => <Tag {...rest} />;

const groupButtonWrapperStyles = () => ({
	margin: 0,
	fontSize: 'inherit',
});

const groupButtonWrapperAttributes = () => null;

export const defaultGroupButtonWrapper = {
	component: GroupButtonWrapper,
	styles: groupButtonWrapperStyles,
	attributes: groupButtonWrapperAttributes,
};
