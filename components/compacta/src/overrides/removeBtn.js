import { jsx, getLabel, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';
import { RemoveCircleIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const Icon = (props) => <RemoveCircleIcon {...props} size="xsmall" />;

const RemoveBtn = ({ state: { id }, ...rest }) => {
	return (
		<Button
			look="link"
			size="small"
			soft
			iconBefore={Icon}
			assistiveText={`remove item ${id}`}
			{...rest}
		/>
	);
};

// ==============================
// Styles
// ==============================

const removeBtnStyles = () => ({
	label: getLabel('compacta-removeBtn'),
	marginTop: '0.875rem',
	padding: 0,
	height: 'auto',
	textDecoration: 'none',
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
