/** @jsx jsx */

import { jsx, getLabel, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';
import { RemoveCircleIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const RemoveBtn = ({ state: _, ...rest }) => {
	const mq = useMediaQuery();
	return (
		<Button
			look="faint"
			size="small"
			soft
			iconAfter={RemoveCircleIcon}
			overrides={{
				Text: { styles: (styles) => mq({ ...styles, display: ['none', null, 'block'] }) },
				Icon: { styles: (styles) => mq({ ...styles, marginLeft: ['0px', null, '0.4em'] }) },
			}}
			{...rest}
		/>
	);
};

// ==============================
// Styles
// ==============================

const removeBtnStyles = () => ({
	label: getLabel('compacta-removeBtn'),
	marginRight: '0.75rem',
});

// ==============================
// Attributes
// ==============================

const removeBtnAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultRemoveBtn = {
	component: RemoveBtn,
	styles: removeBtnStyles,
	attributes: removeBtnAttributes,
};
