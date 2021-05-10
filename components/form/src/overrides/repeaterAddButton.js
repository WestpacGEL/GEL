/** @jsx jsx */

import { jsx, getLabel, useBrand } from '@westpac/core';
import { AddCircleIcon } from '@westpac/icon';
import { Button } from '@westpac/button';

// ==============================
// Component
// ==============================
const Icon = (props) => {
	const { COLORS } = useBrand();
	return <AddCircleIcon {...props} color={COLORS.primary} />;
};

const AddButton = ({ state: _, ...rest }) => <Button look="link" iconAfter={Icon} {...rest} />;

// ==============================
// Styles
// ==============================

const addButtonStyles = () => {
	const { COLORS } = useBrand();
	return {
		label: getLabel('repeater-addButton'),
		color: COLORS.text,
		textDecoration: 'none !important',
		paddingLeft: 0,
		paddingRight: 0,

		':hover': {
			color: COLORS.primary,
		},
	};
};

// ==============================
// Attributes
// ==============================

const addButtonAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultRepeaterAddButton = {
	component: AddButton,
	styles: addButtonStyles,
	attributes: addButtonAttributes,
};
