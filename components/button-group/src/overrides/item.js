import { jsx, asArray, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Item = ({ state: _, ...rest }) => <label {...rest} />;

// ==============================
// Styles
// ==============================

export const itemStyles = (_, { block }) => {
	const mq = useMediaQuery();

	const blockArr = asArray(block);

	return mq({
		label: getLabel('buttonGroup-item'),
		flex: blockArr.map((b) => b !== null && (b ? 1 : null)),
	})[0];
};

// ==============================
// Attributes
// ==============================

const itemAttributes = (_, { buttonGroupItemId }) => ({
	htmlFor: buttonGroupItemId, //a11y: use explicit association
});

// ==============================
// Exports
// ==============================

export const defaultItem = {
	component: Item,
	styles: itemStyles,
	attributes: itemAttributes,
};
