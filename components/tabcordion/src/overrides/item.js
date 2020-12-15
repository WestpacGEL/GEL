/** @jsx jsx */

import { jsx, getLabel, formatClassName } from '@westpac/core';

// ==============================
// Component
// ==============================

const Item = ({ state: _, ...rest }) => <div {...rest} />;

const BlenderItem = ({ className, ...rest }) => (
	<Item className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const itemStyles = () => ({
	label: getLabel('tabcordion-item'),
});

// ==============================
// Blender Styles
// ==============================

const blenderStyles = () => ({});

// ==============================
// Attributes
// ==============================

const itemAttributes = () => null;

const blenderAttributes = (_, props) => ({
	...itemAttributes(_, props),
	className: classNames({ [`__convert__tabcordion-item-selected`]: props.selected }),
});

// ==============================
// Exports
// ==============================

export const defaultItem = {
	component: Item,
	styles: itemStyles,
	attributes: itemAttributes,
};

export const blenderItem = {
	component: BlenderItem,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
