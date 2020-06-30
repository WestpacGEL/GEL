/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { forwardRef } from 'react';

const Panel = forwardRef(({ state, ...rest }, ref) => <div ref={ref} {...rest} />);

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
		label: getLabel('tabcordion-panel', { look, mode, last, selected }),
		display: mode === 'tabs' && !selected ? 'none' : 'block',
		borderTop: mode === 'tabs' && `1px solid ${COLORS.border}`,
		borderBottom: `1px solid ${COLORS.border}`,
		borderLeft: `1px solid ${COLORS.border}`,
		borderRight: `1px solid ${COLORS.border}`,
		padding: '1.5rem 3.22%',
		...stylesMap[look],
	};
};

const panelAttributes = (_, { panelId, mode, hidden, selected }) => ({
	id: panelId,
	'aria-hidden': mode === 'accordion' ? hidden : !selected,
});

export const defaultPanel = { component: Panel, styles: panelStyles, attributes: panelAttributes };
