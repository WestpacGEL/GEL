/** @jsx jsx */

import { jsx } from '@westpac/core';

const ButtonDropdown = ({ state, ...rest }) => <div {...rest} />;

const buttonDropdownStyles = (_, { block }) => {
	return {
		position: 'relative',
		display: block ? 'block' : 'inline-block',
		verticalAlign: 'middle',
	};
};

const buttonDropdownAttributes = () => null;

export const defaultButtonDropdown = {
	component: ButtonDropdown,
	styles: buttonDropdownStyles,
	attributes: buttonDropdownAttributes,
};
