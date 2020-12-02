/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx, getLabel, formatClassName } from '@westpac/core';
import { Body } from '@westpac/body';

// ==============================
// Component
// ==============================

const PanelBody = forwardRef(({ state: _, ...rest }, ref) => <Body ref={ref} {...rest} />);

const BlenderPanelBody = ({ className, ...rest }) => (
	<PanelBody className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const panelBodyStyles = () => ({
	label: getLabel('tabcordion-panelBody'),
	padding: '1.5rem 3.22%',
});

// ==============================
// Attributes
// ==============================

const panelBodyAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultPanelBody = {
	component: PanelBody,
	styles: panelBodyStyles,
	attributes: panelBodyAttributes,
};

export const blenderPanelBody = {
	component: BlenderPanelBody,
	styles: panelBodyStyles,
	attributes: panelBodyAttributes,
};
