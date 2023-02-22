import {
	jsx,
	asArray,
	useMediaQuery,
	getLabel,
	getModifier,
	styleReconciler,
	classNames,
	formatClassName,
} from '@westpac/core';
import { defaultProps } from '../ButtonGroup';
// ==============================
// Component
// ==============================

const ButtonGroup = ({ state: _, ...rest }) => <div {...rest} />;

const BlenderButtonGroup = ({ className, ...rest }) => (
	<ButtonGroup className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const buttonGroupStyles = (_, { block }) => {
	const mq = useMediaQuery();

	const blockArr = asArray(block);

	return mq({
		label: getLabel('buttonGroup'),
		alignItems: 'center',
		display: blockArr.map((b) => b !== null && (b ? 'flex' : 'inline-flex')),
		verticalAlign: 'middle',
	})[0];
};

const blenderStyles = (_, { block }) => {
	const props = { block };
	const baseStyles = buttonGroupStyles(_, defaultProps);

	const modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = buttonGroupStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const buttonGroupAttributes = () => null;

const blenderAttributes = (_, { block }) => ({
	className: classNames({ [`__convert__buttonGroup-block`]: block }),
	'data-js': 'buttonGroup__version__',
});

// ==============================
// Exports
// ==============================

export const defaultButtonGroup = {
	component: ButtonGroup,
	styles: buttonGroupStyles,
	attributes: buttonGroupAttributes,
};

export const blenderButtonGroup = {
	component: BlenderButtonGroup,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
