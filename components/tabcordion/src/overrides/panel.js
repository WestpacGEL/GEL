/** @jsx jsx */

import { forwardRef } from 'react';
import {
	jsx,
	useBrand,
	useMediaQuery,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
} from '@westpac/core';

import { defaultProps } from '../blender/Tabcordion';

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

const panelStyles = (_, { look, mode, last, selected }) => {
	const { COLORS } = useBrand();

	const stylesMap =
		mode === 'accordion'
			? {
					lego: {
						borderLeft: `0.375rem solid ${COLORS.border}`,
					},
					soft: last
						? {
								borderBottomLeftRadius: '0.1875rem',
								borderBottomRightRadius: '0.1875rem',
						  }
						: {},
			  }
			: {};

	return {
		label: getLabel('tabcordion-panel'),
		display: mode === 'tabs' && !selected ? 'none' : 'block',
		borderTop: mode === 'tabs' && `1px solid ${COLORS.border}`,
		borderBottom: `1px solid ${COLORS.border}`,
		borderLeft: `1px solid ${COLORS.border}`,
		borderRight: `1px solid ${COLORS.border}`,
		padding: '1.5rem 3.22%',
		...stylesMap[look],
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { selected }) => {
	const mq = useMediaQuery();
	const props = { selected };
	const baseStyles = panelStyles(_, defaultProps);

	Object.assign(baseStyles, {
		display: 'none',
	});

	let modifiers = getModifier({ ...defaultProps, selected: false }, props);
	if (!modifiers.length) return mq(baseStyles)[0];

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, display: 'block' };
};

// ==============================
// Attributes
// ==============================

const panelAttributes = (_, { panelId, mode, hidden, selected }) => ({
	id: panelId,
	'aria-hidden': mode === 'accordion' ? hidden : !selected,
});

const blenderAttributes = (_, props) => ({
	...panelAttributes(_, props),
	className: classNames({ [`__convert__tabcordion-panel-selected`]: props.selected }),
});
// ==============================
// Exports
// ==============================

export const defaultPanel = { component: Panel, styles: panelStyles, attributes: panelAttributes };

export const blenderPanel = {
	component: BlenderPanel,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
