/** @jsx jsx */

import { jsx, useMediaQuery, useBrand, getLabel } from '@westpac/core';
import { Button } from '@westpac/button';

const ButtonGroupButton = ({ state: { checked, look, size, block, disabled }, ...rest }) => (
	<Button
		tag="span"
		soft={!checked}
		look={look}
		size={size}
		block={block}
		disabled={disabled}
		{...rest}
	/>
);

const buttonStyles = (_, { checked }) => {
	const { PACKS } = useBrand();
	const mq = useMediaQuery();

	return mq({
		label: getLabel('buttonGroup-btn', { checked }),
		borderTop: checked && '6px solid transparent !important', //a11y: for high contrast mode
		borderBottom: checked && '6px solid transparent !important', //a11y: for high contrast mode

		'label:not(:last-of-type) &': {
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
			borderRight: 0,
		},
		'label:not(:first-of-type) &': {
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
		},

		// Focus state
		'body:not(.isMouseMode) input:focus + &': {
			...PACKS.focus,
		},
	})[0];
};

const buttonAttributes = () => ({
	'data-js': 'buttonGroup-btn__version__',
});

export const defaultButton = {
	component: ButtonGroupButton,
	styles: buttonStyles,
	attributes: buttonAttributes,
};
