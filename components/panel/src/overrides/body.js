/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Body } from '@westpac/body';
import { blenderReconciler } from './_utils';

// ==============================
// Component
// ==============================

const PanelBody = ({ state, ...rest }) => <Body {...rest} />;

// ==============================
// Styles
// ==============================
const baseStyles = () => {
	const { SPACING } = useBrand();
	return {
		label: 'panel-body',
		padding: [SPACING(2), null, SPACING(4)],
	};
};

export const blenderStyles = () => {
	return blenderReconciler(baseStyles());
};

const bodyStyles = () => {
	const mq = useMediaQuery();
	return mq({ ...baseStyles() })[0];
};

// ==============================
// Attributes
// ==============================

const bodyAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultBody = {
	component: PanelBody,
	styles: bodyStyles,
	attributes: bodyAttributes,
};

export const blenderBody = {
	component: PanelBody,
	styles: blenderStyles,
	attributes: bodyAttributes,
};
