import { jsx, getLabel, useBrand, classNames, getModifier, formatClassName } from '@westpac/core';
import { defaultProps } from '../Collapsible';

// ==============================
// Component
// ==============================

const Collapsible = ({ state: _, ...rest }) => <div {...rest} />;

const BlenderCollapsible = ({ className, ...rest }) => (
	<Collapsible className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const collapsibleStyles = () => ({
	label: getLabel('collapsible'),
	position: 'relative',
	display: 'inline-block',
});

const blenderStyles = (_, { isOpen }) => {
	const { COLORS } = useBrand();

	const props = { open: isOpen };
	const baseStyles = collapsibleStyles(_, defaultProps);
	Object.assign(baseStyles, {
		'.__convert__button': {
			color: COLORS.text,
			paddingLeft: 0,
			paddingRight: 0,
			textDecoration: 0,
		},
		svg: {
			color: COLORS.link,
		},
	});

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const reconciledStyles = {};
	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		case 'open':
			label = `${label}-open`;
			Object.assign(reconciledStyles, {
				'.__convert__collapsible-content': { display: 'block' },
				'.__convert__collapsible-trigger-icon': { transform: 'rotate(180deg)' },
			});
			break;
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const collapsibleAttributes = () => null;

const blenderAttributes = (_, { isOpen }) => ({
	'data-js': 'collapsible__version__',
	className: classNames({ [`__convert__collapsible-open`]: isOpen }),
});

// ==============================
// Exports
// ==============================

export const defaultCollapsible = {
	component: Collapsible,
	styles: collapsibleStyles,
	attributes: collapsibleAttributes,
};

export const blenderCollapsible = {
	component: BlenderCollapsible,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
