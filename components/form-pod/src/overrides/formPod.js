/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const FormPod = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const formPodStyles = () => ({ label: getLabel('formPod') });

// ==============================
// Attributes
// ==============================

const formPodAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultFormPod = {
	component: FormPod,
	styles: formPodStyles,
	attributes: formPodAttributes,
};
