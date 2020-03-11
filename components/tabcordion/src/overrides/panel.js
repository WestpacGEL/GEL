/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx, useBrand } from '@westpac/core';

const Panel = forwardRef(({ hidden, state, ...rest }, ref) => <div ref={ref} {...rest} />);

const panelStyles = (_, { look, mode, last, selected }) => {
	const { COLORS } = useBrand();

	const styles =
		mode === 'accordion'
			? {
					lego: {
						borderLeftWidth: '0.375rem',
						borderLeftColor: COLORS.border,
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
		display: mode === 'tabs' && !selected ? 'none' : 'block',
		borderLeft: `1px solid ${COLORS.border}`,
		borderRight: `1px solid ${COLORS.border}`,
		borderBottom: `1px solid ${COLORS.border}`,
		borderTop: mode === 'tabs' && `1px solid ${COLORS.border}`,
		padding: '1.5rem 3.22%',
		...styles[look],
	};
};

const panelAttributes = (_, { panelId, mode, hidden, selected }) => ({
	id: panelId,
	'aria-hidden': mode === 'accordion' ? hidden : !selected,
});

export const defaultPanel = { component: Panel, styles: panelStyles, attributes: panelAttributes };
