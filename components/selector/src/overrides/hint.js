import { jsx, useBrand, getLabel, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

const Hint = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const hintStyles = () => {
	const mq = useMediaQuery();
	const { COLORS, PACKS, SPACING } = useBrand();

	return mq({
		label: getLabel('selector-option-hint'),
		color: COLORS.muted,
		marginTop: [SPACING(1, 'minor'), null, SPACING(1)],
		fontSize: [PACKS.typeScale.bodyFont[10].fontSize, null, PACKS.typeScale.bodyFont[9].fontSize],
		lineHeight: [
			PACKS.typeScale.bodyFont[10].lineHeight,
			null,
			PACKS.typeScale.bodyFont[9].lineHeight,
		],
	})[0];
};

// ==============================
// Attributes
// ==============================

const hintAttributes = (_, { type, hintId }) => ({
	id: type === 'radio' || type === 'checkbox' ? hintId : undefined,
});

// ==============================
// Exports
// ==============================

export const defaultHint = {
	component: Hint,
	styles: hintStyles,
	attributes: hintAttributes,
};
