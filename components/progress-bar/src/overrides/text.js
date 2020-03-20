/** @jsx jsx */

import { jsx } from '@westpac/core';

const Text = ({ state, ...rest }) => <span {...rest} />;

const textStyles = () => ({
	display: 'inline-block',
	margin: '0 0.75rem',

	'@media print': {
		backgroundColor: '#000 !important',
		color: '#fff !important',
	},
});

const textAttributes = () => null;

export const defaultText = {
	component: Text,
	styles: textStyles,
	attributes: textAttributes,
};
