import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const Item = ({ state: _, ...rest }) => <li {...rest} />;

// ==============================
// Styles
// ==============================

const itemStyles = (_, { type, icon }) => ({
	// Tweak styling if link with custom icon
	...(type === 'link' &&
		icon && {
			paddingLeft: '1.4375rem !important', //increase padding to match icon list

			// Remove default link type '>' icon
			'::before': {
				display: 'none !important',
			},
		}),
});

// ==============================
// Attributes
// ==============================

const itemAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultItem = {
	component: Item,
	styles: itemStyles,
	attributes: itemAttributes,
};
