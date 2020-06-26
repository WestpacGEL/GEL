/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { blenderReconciler } from './_utils';

// ==============================
// Component
// ==============================

const PanelHeading = ({ state: { headingTag }, ...rest }) => (
	<Heading tag={headingTag} size={9} {...rest} />
);

// ==============================
// Styles
// ==============================
// Base
// ==============================

const baseStyles = () => {
	const { TYPE } = useBrand();

	return { label: 'panel-heading', ...TYPE.bodyFont[400] };
};

// ==============================
// Modifiers
// ==============================
// if there are no blender modifiers then we dont have to separate them out as there is no point

// ==============================
// Style Reconciliation
// ==============================

const headingStyles = (_, { look }) => {
	const { COLORS } = useBrand();

	const styleMap = {
		hero: {
			color: '#fff',
		},
		faint: {
			color: COLORS.text,
		},
	};

	return {
		...baseStyles(),
		color: styleMap[look].color,
	};
};

const blenderStyles = () => {
	return blenderReconciler(baseStyles());
};

// ==============================
// Attributes
// ==============================

const headingAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultHeading = {
	component: PanelHeading,
	styles: headingStyles,
	attributes: headingAttributes,
};

export const blenderHeading = {
	component: PanelHeading,
	styles: blenderStyles,
	attributes: headingAttributes,
};
