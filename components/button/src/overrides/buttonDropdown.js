/** @jsx jsx */

import { jsx } from '@westpac/core';

export const ButtonDropdown = ({
	dropdown,
	dropdownSize,
	look,
	soft,
	block,
	justify,
	iconAfter,
	iconBefore,
	...rest
}) => <div {...rest} />;

export const buttonDropdownStyles = (_, { block }) => {
	return {
		position: 'relative',
		display: block ? 'block' : 'inline-block',
		verticalAlign: 'middle',
	};
};
