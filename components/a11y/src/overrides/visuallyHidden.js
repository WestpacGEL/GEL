/** @jsx jsx */

import { jsx } from '@westpac/core';

const VisuallyHidden = ({ state: { tag: Tag }, ...rest }) => <Tag {...rest} />;

const visuallyHiddenStyles = () => ({
	position: 'absolute',
	width: 1,
	height: 1,
	padding: 0,
	overflow: 'hidden',
	clip: 'rect(0, 0, 0, 0)',
	whiteSpace: 'nowrap',
	border: 0,
});

const visuallyHiddenAttributes = () => null;

export const defaultVisuallyHidden = {
	component: VisuallyHidden,
	styles: visuallyHiddenStyles,
	attributes: visuallyHiddenAttributes,
};
