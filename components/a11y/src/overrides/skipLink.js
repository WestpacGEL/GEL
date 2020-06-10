/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const SkipLink = ({ state: { href }, ...rest }) => <a href={href} {...rest} />;

const skipLinkStyles = () => ({
	label: getLabel('skiplink'),
	position: 'absolute',
	width: 1,
	height: 1,
	margin: -1,
	padding: 0,
	overflow: 'hidden',
	clip: 'rect(0,0,0,0)',
	border: 0,
	fontSize: '1.3125rem',

	':active, :focus': {
		position: 'fixed',
		top: 0,
		right: 0,
		left: 0,
		height: 'auto',
		width: 'auto',
		margin: 0,
		padding: '1em',
		overflow: 'visible',
		clip: 'auto',
		textAlign: 'center',
		zIndex: 2000,
		backgroundColor: '#fff',
	},

	':focus': {
		outlineOffset: -2, // override to be inside
	},
});

const skipLinkAttributes = () => null;

export const defaultSkipLink = {
	component: SkipLink,
	styles: skipLinkStyles,
	attributes: skipLinkAttributes,
};
