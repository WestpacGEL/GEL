/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { sizeMap } from '../_utils';

const Option = ({ state: _, ...rest }) => <div {...rest} />;

const optionStyles = (_, { size, inline }) => ({
	label: getLabel('formCheck-option', { size, inline }),
	position: 'relative',
	display: inline ? 'inline-block' : 'block',
	verticalAlign: inline && 'top',
	marginRight: inline && sizeMap[size]['option'].marginRight,
	marginBottom: sizeMap[size]['option'].marginBottom,
	minHeight: sizeMap[size]['option'].height,
	paddingLeft: sizeMap[size]['option'].width,
});

const optionAttributes = () => null;

export const defaultOption = {
	component: Option,
	styles: optionStyles,
	attributes: optionAttributes,
};
