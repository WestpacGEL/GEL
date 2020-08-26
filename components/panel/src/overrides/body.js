/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Body } from '@westpac/body';

// ==============================
// Component
// ==============================

const PanelBody = ({ state, ...rest }) => <Body {...rest} />;

// ==============================
// Styles
// ==============================

const bodyStyles = () => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();

	return mq({ label: 'panel-body', padding: [SPACING(2), null, SPACING(4)] })[0];
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
