/** @jsx jsx */

import { jsx } from '@westpac/core';

export const ButtonDropdown = ({
	instanceId,
	open,
	text,
	dropdownSize,
	block,
	headerText,
	headerTag,
	...rest
}) => <div {...rest} />;

export const buttonDropdownStyles = (_, { block }) => {
	return {
		position: 'relative',
		display: block ? 'block' : 'inline-block',
		verticalAlign: 'middle',
	};
};
