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
import { forwardRef } from 'react';
import { defaultProps } from '../Popover';

// ==============================
// Component
// ==============================

const Panel = forwardRef(({ state: _, ...rest }, ref) => <div ref={ref} {...rest} />);

const BlenderPanel = forwardRef(({ state: _, className, ...rest }, ref) => (
	<div ref={ref} className={formatClassName(className)} {...rest} />
));

// ==============================
// Styles
// ==============================

const panelStyles = (_, { open, position, ...rest }) => {
	const { COLORS } = useBrand();
	return {
		label: getLabel('popover-panel'),
		visibility: open && !position.empty ? 'visible' : 'hidden',
		position: 'absolute',
		[!position.offset || position.offset === 'left' ? 'left' : 'right']: !position.offset
			? '50%'
			: 0,
		bottom: position.placement === 'top' && '100%',
		transform: !position.offset ? 'translateX(-50%)' : 'none',
		[position.placement === 'top' ? 'marginBottom' : 'marginTop']:
			rest.placement !== 'none' && '0.9375rem',
		boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
		border: `1px solid ${COLORS.muted}`,
		borderRadius: 3,
		width: '17.625rem',
		backgroundColor: '#fff',
		pointerEvents: 'all',
		textAlign: 'left',
		padding: '24px 30px 24px 18px',

		// Arrow
		'::before, ::after': {
			content: '""',
			[position.placement === 'top' ? 'top' : 'bottom']: rest.placement !== 'none' && '100%',
			[!position.offset || position.offset === 'left' ? 'left' : 'right']: !position.offset
				? '50%'
				: `${position.center}rem`,
			border: 'solid transparent',
			position: 'absolute',
			height: 0,
			width: 0,
			pointerEvents: 'none',
		},
		'::before': {
			borderLeftWidth: '8px',
			borderRightWidth: '8px',
			[!position.offset || position.offset === 'left' ? 'marginLeft' : 'marginRight']:
				!position.offset ? '-8px' : '-1px',
			[position.placement === 'top' ? 'borderTop' : 'borderBottom']:
				rest.placement !== 'none' && `12px solid ${COLORS.muted}`,
		},
		'::after': {
			borderLeftWidth: '7px',
			borderRightWidth: '7px',
			marginLeft: !position.offset ? '-7px' : 0,
			[position.placement === 'top' ? 'borderTop' : 'borderBottom']:
				rest.placement !== 'none' && '11px solid #fff',
		},
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { open, position, placement }) => {
	const props = { open, placement };
	const dProps = { ...defaultProps, placement: 'none' };
	const baseStyles = panelStyles(_, {
		...defaultProps,
		position: { placement: 'none', empty: true },
		placement: 'none',
	});

	const modifiers = getModifier(dProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = panelStyles(_, {
		open,
		position,
		placement,
	});
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		case 'placement':
			label = `${label}-placement-${placement}`;
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

const panelAttributes = (_, { instanceId }) => ({
	id: instanceId,
});

const blenderAttributes = (_, { instanceId, open, placement }) => ({
	...panelAttributes(_, { instanceId }),
	'data-js': 'popover-panel__version__',
	className: classNames({
		[`__convert__popover-panel-open`]: open,
		[`__convert__popover-panel-placement-${placement}`]: placement,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultPanel = {
	component: Panel,
	styles: panelStyles,
	attributes: panelAttributes,
};

export const blenderPanel = {
	component: BlenderPanel,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
