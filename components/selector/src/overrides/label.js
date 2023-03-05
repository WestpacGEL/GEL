import { jsx, useBrand, getLabel, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

const Label = ({ state: { type }, ...rest }) => {
	const Tag = type === 'radio' || type === 'checkbox' ? 'label' : 'div';
	return <Tag {...rest} />;
};

// ==============================
// Styles
// ==============================

const labelStyles = () => {
	const mq = useMediaQuery();
	const { PACKS, TYPE } = useBrand();

	return mq({
		label: getLabel('selector-option-label'),
		flex: 1,
		display: 'flex',
		fontSize: [PACKS.typeScale.bodyFont[9].fontSize, null, PACKS.typeScale.bodyFont[8].fontSize],
		lineHeight: [
			PACKS.typeScale.bodyFont[9].lineHeight,
			null,
			PACKS.typeScale.bodyFont[8].lineHeight,
		],
		...TYPE.bodyFont[500],
	})[0];
};

// ==============================
// Attributes
// ==============================

const labelAttributes = (_, { type, optionId }) => ({
	htmlFor: type === 'radio' || type === 'checkbox' ? optionId : undefined, //a11y: use explicit association
});

// ==============================
// Exports
// ==============================

export const defaultLabel = {
	component: Label,
	styles: labelStyles,
	attributes: labelAttributes,
};
