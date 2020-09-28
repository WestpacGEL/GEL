/** @jsx jsx */

import {
	jsx,
	useMediaQuery,
	asArray,
	useBrand,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
} from '@westpac/core';
import { forwardRef } from 'react';

import { defaultProps } from '../ButtonDropdown';

// ==============================
// Component
// ==============================

const Panel = forwardRef(({ state: _, ...rest }, ref) => <div ref={ref} {...rest} />);

// ==============================
// Styles
// ==============================

const panelStyles = (_, { open, dropdownSize }) => {
	const mq = useMediaQuery();
	const { COLORS } = useBrand();

	const sizeMap = {
		small: {
			minWidth: '8.125rem',
		},
		medium: {
			minWidth: '11.875rem',
		},
		large: {
			minWidth: '15.625rem',
		},
	};

	const dropdownSizeArr = asArray(dropdownSize);

	return mq({
		label: getLabel('buttonDropdown-panel'),
		visibility: open ? 'visible' : 'hidden',
		height: open ? 'auto' : '0px',
		overflow: 'hidden',
		position: 'absolute',
		left: 0,
		right: 0,
		margin: '0.1875rem 0 0 0',
		boxShadow: '0 0.375rem 0.75rem rgba(0, 0, 0, 0.175)',
		border: `1px solid ${COLORS.border}`,
		borderRadius: '0.1875rem',
		padding: '0.75rem',
		minWidth: dropdownSizeArr.map((s) => s && sizeMap[s].minWidth),
		backgroundColor: '#fff',
		zIndex: 100,
	})[0];
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { open, dropdownSize }) => {
	const props = { open, dropdownSize };
	const baseStyles = panelStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = panelStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		case 'dropdownSize':
			label = `${label}-${dropdownSize}`;
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

const blenderAttributes = (_, { instanceId, dropdownSize }) => ({
	id: instanceId,
	'data-js': 'buttonDropdown-panel__version__',
	className: classNames({
		[`__convert__buttonDropdown-panel-${dropdownSize}`]:
			dropdownSize && dropdownSize !== defaultProps.dropdownSize,
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
	component: Panel,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
