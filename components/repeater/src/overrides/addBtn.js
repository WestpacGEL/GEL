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

const AddBtn = ({ state: _, ...rest }) => (
	<Button look="link" size="small" iconBefore={Icon} {...rest} />
);

// ==============================
// Styles
// ==============================

const addBtnStyles = () => {
	return {
		label: getLabel('repeater-addButton'),
		textDecoration: 'none',
		padding: 0,
		height: 'auto',
	};
};

// ==============================
// Attributes
// ==============================

const addBtnAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultAddBtn = {
	component: AddBtn,
	styles: addBtnStyles,
	attributes: addBtnAttributes,
};
