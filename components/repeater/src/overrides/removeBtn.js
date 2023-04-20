import { jsx, getLabel, useBrand } from '@westpac/core';
import { RemoveCircleIcon } from '@westpac/icon';
import { Button } from '@westpac/button';

// ==============================
// Component
// ==============================
const Icon = (props) => {
	return <RemoveCircleIcon {...props} size="xsmall" />;
};

const RemoveBtn = ({ state: { id }, ...rest }) => (
	<Button
		look="link"
		size="small"
		iconBefore={Icon}
		assistiveText={`remove item ${id}`}
		{...rest}
	/>
);

// ==============================
// Styles
// ==============================

const removeBtnStyles = (_, { separator }) => {
	return {
		label: getLabel('repeater-removeBtn'),
		height: 'auto',
		padding: 0,
		textDecoration: 'none',
		...(separator && { margin: '0 0 1.875rem 1.125rem' }),
		...(!separator && { position: 'absolute', top: 0, right: 0 }),
	};
};

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
