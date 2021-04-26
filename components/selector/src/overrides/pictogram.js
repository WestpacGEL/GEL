/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Pictogram = ({
	pictogram: Pictogram,
	state: { pictogramWidth, pictogramHeight },
	...rest
}) => {
	const defaultWidth = 66;

	return (
		<Pictogram
			width={pictogramWidth || (!pictogramHeight ? defaultWidth : null)}
			height={pictogramHeight}
			assistiveText={null}
			{...rest}
		/>
	);
};

// ==============================
// Styles
// ==============================

const pictogramStyles = () => {
	const { SPACING } = useBrand();
	const mq = useMediaQuery();

	return mq({
		label: getLabel('selector-option-pictogram'),
		marginRight: SPACING(4),
		marginBottom: [SPACING(1), null, 0],
	})[0];
};

// ==============================
// Attributes
// ==============================

const pictogramAttributes = () => ({
	'aria-hidden': 'true',
});

// ==============================
// Exports
// ==============================

export const defaultPictogram = {
	component: Pictogram,
	styles: pictogramStyles,
	attributes: pictogramAttributes,
};
