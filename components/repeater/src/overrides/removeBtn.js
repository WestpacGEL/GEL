import { jsx, getLabel, useBrand } from '@westpac/core';
import { RemoveCircleIcon } from '@westpac/icon';
import { Button } from '@westpac/button';

// ==============================
// Component
// ==============================
const Icon = (props) => {
	return <RemoveCircleIcon {...props} />;
};

const RemoveBtn = ({ state: _, ...rest }) => <Button look="link" iconAfter={Icon} {...rest} />;

// ==============================
// Styles
// ==============================

const removeBtnStyles = () => {
	const { COLORS } = useBrand();
	return {
		label: getLabel('repeater-removeBtn'),
		height: 'auto',
		padding: 0,
		position: 'absolute',
		top: 0,
		right: 0,
		color: '#575f65',
		':hover': {
			color: COLORS.primary,
		},
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
