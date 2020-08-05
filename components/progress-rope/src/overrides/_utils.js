import { styleReconciler } from '@westpac/core';

export const getStyles = (styleFunction, state) => {
	const baseStyles = styleFunction(null, {});
	const modifiedStyles = styleFunction(null, state);
	const reconciledStyles = styleReconciler(baseStyles, modifiedStyles);

	return { label: baseStyles.label, styles: reconciledStyles };
};
