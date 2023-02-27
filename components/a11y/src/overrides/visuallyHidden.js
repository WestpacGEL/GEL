import { jsx, getLabel } from '@westpac/core';

const VisuallyHidden = ({ state: { tag: Tag }, ...rest }) => <Tag {...rest} />;

const visuallyHiddenStyles = () => ({
	label: 'visuallyHidden',
	position: 'absolute !important',
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0,0,0,0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
});

const visuallyHiddenAttributes = () => null;

export const defaultVisuallyHidden = {
	component: VisuallyHidden,
	styles: visuallyHiddenStyles,
	attributes: visuallyHiddenAttributes,
};
