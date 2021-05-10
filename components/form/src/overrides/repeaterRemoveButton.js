/** @jsx jsx */

import { jsx, getLabel, useBrand } from '@westpac/core';
import { RemoveCircleIcon } from '@westpac/icon';
import { Button } from '@westpac/button';

// ==============================
// Component
// ==============================
const Icon = (props) => {
	return <RemoveCircleIcon {...props} color="#575f65" />;
};

const RemoveButton = ({ state: _, ...rest }) => <Button look="link" iconAfter={Icon} {...rest} />;

// ==============================
// Styles
// ==============================

const removeButtonStyles = () => {
	const { COLORS } = useBrand();
	return {
		label: getLabel('repeater-removeButton'),
		height: 'auto',
		padding: 0,
		position: 'absolute',
		top: 0,
		right: 0,

		// ':hover': {
		// 	color: COLORS.primary,
		// },
	};
};

// ==============================
// Attributes
// ==============================

const removeButtonAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultRepeaterRemoveButton = {
	component: RemoveButton,
	styles: removeButtonStyles,
	attributes: removeButtonAttributes,
};
