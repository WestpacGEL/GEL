/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const SkipLink = ({ state: { href }, ...rest }) => <a href={href} {...rest} />;

const skipLinkStyles = () => ({
	label: getLabel('skipLink'),
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	zIndex: 2000,
	fontSize: '1.3125rem',
	padding: '1em',
	textAlign: 'center',
	backgroundColor: '#fff !important',
	outlineOffset: '-2px !important', // override to be inside

	'&:not(:focus)': {
		position: 'absolute !important',
		width: '1px !important',
		height: '1px !important',
		padding: '0 !important',
		margin: '-1px !important',
		overflow: 'hidden !important',
		clip: 'rect(0,0,0,0) !important',
		whiteSpace: 'nowrap !important',
		border: '0 !important',
	},
});

const skipLinkAttributes = () => null;

export const defaultSkipLink = {
	component: SkipLink,
	styles: skipLinkStyles,
	attributes: skipLinkAttributes,
};
