/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { Button } from '@westpac/button';
import { RemoveCircleIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const RemoveBtn = ({ state: _, ...rest }) => (
	<Button look="faint" size="small" soft iconAfter={RemoveCircleIcon} {...rest} />
);

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
