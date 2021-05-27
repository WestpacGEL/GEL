/** @jsx jsx */

import {
	jsx,
	useBrand,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
} from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';
import { Body } from '@westpac/body';

// ==============================
// Component
// ==============================

const List = ({ state: { type, nested, assistiveText }, children, ...rest }) => {
	//a11y: tick bullet meaning must be conveyed; render a (configurable) VisuallyHidden first item
	const hiddenItem =
		type === 'tick' && nested === 0 ? (
			<VisuallyHidden
				tag="li"
				css={{
					'::before': { display: 'none !important' },
				}}
			>
				{assistiveText || 'The following items are ticked:'}
			</VisuallyHidden>
		) : null;

	return (
		<Body tag={type === 'ordered' ? 'ol' : 'ul'} {...rest}>
			{hiddenItem}
			{children}
		</Body>
	);
};

const BlenderList = (props) => (
	<List
		overrides={{
			Body: {
				styles: (styles) => {
					const blenderStyles = { ...styles };
					delete blenderStyles.label;
					return blenderStyles;
				},
				component: ({ state: { tag: Tag }, className, ...rest }) => (
					<Tag className={formatClassName(className)} {...rest} />
				),
			},
		}}
		{...props}
	/>
);

// ==============================
// Styles
// ==============================

const listStyles = (_, { type, look, spacing, nested }) => {
	const { COLORS } = useBrand();

	const styleMap = {
		bullet: {
			'::before': {
				content: '""',
				position: 'absolute',
				left: '0.25rem',
				top: '0.375rem',
				display: 'block',
				width: '0.5rem',
				height: '0.5rem',
				borderRadius: '50%',
				border: `0.0625rem solid ${COLORS[look]}`,
				backgroundColor: nested > 0 ? 'transparent' : COLORS[look],
				boxSizing: 'border-box',
			},
		},
		link: {
			'::before': {
				content: "''",
				position: 'absolute',
				left: '0.125rem',
				top: '0.375rem',
				display: 'block',
				width: '0.5rem',
				height: '0.5rem',
				border: `solid ${COLORS.link}`,
				borderWidth: '0 0.125rem 0.125rem 0',
				transform: 'rotate(-45deg)',
				boxSizing: 'border-box',
			},
			a: {
				color: `${COLORS.text} !important`,
				textDecoration: 'none !important',

				':hover': {
					textDecoration: 'underline !important',
				},
			},
		},
		tick: {
			'::before': {
				content: "''",
				position: 'absolute',
				left: '0.125rem',
				top: '0.3125rem',
				display: 'block',
				width: '0.75rem',
				height: '0.375rem',
				border: `solid ${COLORS.hero}`,
				borderWidth: '0 0 0.125rem 0.125rem',
				transform: 'rotate(-44deg)',
				boxSizing: 'border-box',
			},
		},
		unstyled: {
			paddingLeft: 0,
			li: {
				paddingLeft: '1.1875rem',
			},
		},
		icon: {
			paddingLeft: '1.4375rem',
		},
		ordered: {
			paddingLeft: 0,
		},
	};

	return {
		label: getLabel('list'),
		listStyle: type !== 'ordered' ? 'none' : 'decimal',
		margin: 0,
		padding: type === 'ordered' ? '0 0 0 1.25rem' : 0,

		// The styles for the li are here so we have cleaner markup in the blender output
		'> li': {
			margin: spacing === 'large' ? '0.75rem 0' : '0.375rem 0',
			paddingLeft: '1.1875rem',
			position: 'relative',
			...styleMap[type],
		},
	};
};

// ==============================
// Blender Styles
// ==============================

const defaultProps = { type: 'none', look: false, spacing: 'medium' };

const blenderStyles = (_, { type, look, spacing }) => {
	const props = { type, look, spacing };
	const baseStyles = listStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = listStyles(_, props);
	let reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	let modifier;

	if (modifiers.length > 1 && modifiers.includes('type') && modifiers.includes('look')) {
		if (type === 'bullet' && look === 'hero') {
			modifier = 'type';
		} else {
			modifier = 'look';
			const bulletBase = listStyles(_, { type: 'bullet', look: 'hero', spacing: 'medium' });
			const lookStyles = listStyles(_, props);
			reconciledStyles = styleReconciler(bulletBase, lookStyles);
		}
	} else {
		modifier = modifiers[0];
	}

	switch (modifier) {
		case 'type':
			if (type === 'bullet' && look === 'hero') {
				reconciledStyles[`.__convert__${baseStyles.label} > li::before`] = {
					backgroundColor: 'transparent',
				};
			}
			label = `${label}-${type}`;
			break;
		case 'look':
			label = `${label}-${look}`;
			break;
		case 'spacing':
			label = `${label}-${spacing}`;
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

const listAttributes = (_, { type }) => ({
	//a11y: as we're using `list-style:none` CSS, we need `role="list"` for VoiceOver to announce this as a list (see https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
	role: type !== 'ordered' ? 'list' : undefined,
});

const blenderAttributes = (_, { type, look, spacing }) => ({
	className: classNames({
		[`__convert__list-${type}`]: type !== defaultProps.type,
		[`__convert__list-${look}`]: type === 'bullet' && look !== 'hero',
		[`__convert__list-${spacing}`]: spacing !== defaultProps.spacing,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultList = {
	component: List,
	styles: listStyles,
	attributes: listAttributes,
};

export const blenderList = {
	component: BlenderList,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
