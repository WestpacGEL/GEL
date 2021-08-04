/** @jsx jsx */

import { jsx, useBrand, getLabel, getModifier, classNames, formatClassName } from '@westpac/core';
import { FormCheck, defaultProps } from '../FormCheck';

import { nestedOptionStyles } from './option';
import { nestedLabelStyles } from './label';
import { nestedHintStyles } from './hint';

// ==============================
// Component
// ==============================

const FormCheckReveal = ({ state: _, ...rest }) => <FormCheck {...rest} />;

const BlenderFormCheckReveal = ({ className, ...rest }) => (
	<FormCheckReveal className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const formCheckRevealStyles = () => ({
	label: getLabel('formCheck'), //retain the root component name (rather than 'formCheckReveal')
});

const blenderStyles = (_, { type, size, inline }) => {
	const props = { type, size, inline };
	const baseStyles = formCheckRevealStyles();

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const reconciledStyles = {};
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
		case 'open':
			label = `${label}-open`;
			Object.assign(reconciledStyles, {
				'.__convert__formCheckReveal-panel': { display: 'inline-block' },
			});
			break;
		default:
			label = `${label}-${modifier}`;
			break;
	}

	// returning an array here as nestedLabelStyles returns a css string, so letting emotion handle the merge of these
	return [
		{ label, ...reconciledStyles, ...nestedOptionStyles(props), ...nestedHintStyles(props) },
		nestedLabelStyles(props),
	];
};

// ==============================
// Attributes
// ==============================

const formCheckRevealAttributes = () => null;

const blenderAttributes = (_, { type, size, inline }) => ({
	'data-js': 'formCheck__version__',
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

export const defaultFormCheckReveal = {
	component: FormCheckReveal,
	styles: formCheckRevealStyles,
	attributes: formCheckRevealAttributes,
};

export const blenderFormCheckReveal = {
	component: BlenderFormCheckReveal,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
