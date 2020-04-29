/** @jsx jsx */

import { jsx } from '@westpac/core';

const FormCheck = ({ state, ...rest }) => <div {...rest} />;

const formCheckStyles = () => ({
	listStyle: 'none',
	padding: 0,
	margin: 0,
});

const formCheckAttributes = () => null;

export const defaultFormCheck = {
	component: FormCheck,
	styles: formCheckStyles,
	attribute: formCheckAttributes,
};
