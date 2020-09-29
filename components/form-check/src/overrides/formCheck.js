/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const FormCheck = ({ state: _, ...rest }) => <div {...rest} />;

const formCheckStyles = () => ({
	label: getLabel('formCheck'),
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
