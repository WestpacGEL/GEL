/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx, useBrand } from '@westpac/core';

const Panel = forwardRef(({ state, ...rest }, ref) => <div ref={ref} {...rest} />);

const panelStyles = (_, { look, mode, last }) => {
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
		borderLeft: `1px solid ${COLORS.border}`,
		borderRight: `1px solid ${COLORS.border}`,
		borderBottom: `1px solid ${COLORS.border}`,
		borderTop: mode === 'tabs' && `1px solid ${COLORS.border}`,
		padding: '1.5rem 3.22%',
		...styles[look],
	};
};

export const defaultPanel = { component: Panel, styles: panelStyles, attributes: () => null };
