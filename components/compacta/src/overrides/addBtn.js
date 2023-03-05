import { jsx, useBrand, getLabel } from '@westpac/core';
import { Button } from '@westpac/button';
import { AddCircleIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const Icon = (props) => {
	const { COLORS } = useBrand();
	return <AddCircleIcon {...props} color={COLORS.primary} />;
};

const AddBtn = ({ state: _, ...rest }) => (
	<Button look="faint" size="small" soft iconAfter={Icon} {...rest} />
);

// ==============================
// Styles
// ==============================

const addBtnStyles = () => ({
	label: getLabel('compacta-addBtn'),
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
