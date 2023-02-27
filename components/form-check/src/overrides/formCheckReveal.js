import { jsx } from '@westpac/core';
import { FormCheck } from '../FormCheck';

// ==============================
// Component
// ==============================

const FormCheckReveal = ({ state: _, ...rest }) => <FormCheck {...rest} />;

// ==============================
// Styles
// ==============================

const formCheckRevealStyles = () => ({});

// ==============================
// Attributes
// ==============================

const formCheckRevealAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultFormCheckReveal = {
	component: FormCheckReveal,
	styles: formCheckRevealStyles,
	attributes: formCheckRevealAttributes,
};
