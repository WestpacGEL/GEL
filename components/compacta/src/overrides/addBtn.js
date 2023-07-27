import { jsx, useBrand, getLabel } from '@westpac/core';
import { Button } from '@westpac/button';
import { AddCircleIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const Icon = (props) => {
	const { COLORS } = useBrand();
	return <AddCircleIcon {...props} look="outlined" color={COLORS.primary} />;
};

const AddBtn = ({ state: _, ...rest }) => (
	<Button look="link" size="small" soft iconBefore={Icon} {...rest} />
);

// ==============================
// Styles
// ==============================

const addBtnStyles = () => ({
	label: getLabel('compacta-addBtn'),
	textDecoration: 'none',
	padding: 0,
	height: 'auto',
});

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
