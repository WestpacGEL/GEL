/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { forwardRef } from 'react';

const TabButton = forwardRef(({ state, ...rest }, ref) => {
	return <button type="button" ref={ref} {...rest} />;
});

const tabButtonStyles = (_, { look, justify, selected, last }) => {
	const { COLORS } = useBrand();

	const styles = {
		soft: {
			backgroundColor: selected ? '#fff' : COLORS.background,
			borderTopLeftRadius: '0.1875rem',
			borderTopRightRadius: '0.1875rem',
			border: `1px solid ${COLORS.border}`,
			borderBottom: 0,
			color: COLORS.neutral,
			marginBottom: selected && '-1px',
		},
		lego: {
			backgroundColor: selected ? '#fff' : COLORS.hero,
			border: `1px solid ${selected ? COLORS.border : 'transparent'}`,
			borderBottom: 0,
			color: selected ? COLORS.text : '#fff',
			marginBottom: selected ? '-1px' : '0.125rem',
		},
	};

	return {
		label: getLabel('tabcordion-tabButton', { look, justify, selected, last }),
		flex: justify ? 1 : 0,
		fontSize: '1rem',
		marginRight: !last && '0.125rem',
		padding: '0.875rem 1.125rem',
		textAlign: 'left',
		textDecoration: 'none',
		transition: 'background .3s ease',
		width: '100%',
		cursor: 'pointer',
		...styles[look],
	};
};

const tabButtonAttributes = (_, { tabId, panelId, selected }) => ({
	id: tabId,
	'aria-controls': panelId,
	'aria-expanded': selected,
});

export const defaultTabButton = {
	component: TabButton,
	styles: tabButtonStyles,
	attributes: tabButtonAttributes,
};
