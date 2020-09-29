/** @jsx jsx */

import { jsx, getLabel, getModifier, classNames } from '@westpac/core';
import { defaultProps } from '../FormCheck';

import { nestedOptionStyles } from './option';
import { nestedLabelStyles } from './label';

// ==============================
// Component
// ==============================

const FormCheck = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const formCheckStyles = () => ({
	label: getLabel('formCheck'),
	listStyle: 'none',
	padding: 0,
	margin: 0,
});

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { type, size, inline }) => {
	const props = { type, size, inline };
	const baseStyles = formCheckStyles();

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	let label = baseStyles.label;

	let modifier;
	if (modifiers.length > 1 && modifiers.includes('type') && modifiers.includes('size')) {
		modifier = 'size';
	} else {
		modifier = modifiers[0];
	}

	switch (modifier) {
		case 'size':
			label = type === 'checkbox' ? `${label}-${size}` : `${label}-radio-${size}`;
			break;
		case 'type':
			label = `${label}-${type}`;
			break;
		case 'inline':
			label = `${label}-inline`;
			break;
		default:
			break;
	}

	// returning an array here as nestedLabelStyles returns a css string, so letting emotion handle the merge of these
	return [{ label, ...nestedOptionStyles(props) }, nestedLabelStyles(props)];
};

// ==============================
// Attributes
// ==============================

const formCheckAttributes = () => null;

const blenderAttributes = (_, { type, size, inline }) => ({
	className: classNames({
		[`__convert__formCheck-${type}`]: type !== defaultProps.type,
		[`__convert__formCheck-${size}`]: size !== defaultProps.size && type === 'checkbox',
		[`__convert__formCheck-radio-${size}`]: size !== defaultProps.size && type === 'radio',
		[`__convert__formCheck-inline`]: inline,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultFormCheck = {
	component: FormCheck,
	styles: formCheckStyles,
	attributes: formCheckAttributes,
};

export const blenderFormCheck = {
	component: FormCheck,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
