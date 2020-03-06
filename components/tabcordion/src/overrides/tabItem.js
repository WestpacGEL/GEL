/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx, useBrand } from '@westpac/core';

export const TabItem = forwardRef(
	({ selected, last, mode, look, justify, initialTabIndex, instanceId, ...rest }, ref) => {
		return <button type="button" ref={ref} {...rest} />;
	}
);

export const tabItemStyles = (_, { look, justify, selected, last }) => {
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
		flex: justify ? 1 : 0,
		fontSize: '1rem',
		marginRight: '0.125rem',
		padding: '0.875rem 1.125rem',
		textAlign: 'left',
		textDecoration: 'none',
		transition: 'background .3s ease',
		width: '100%',
		cursor: 'pointer',
		...(last && { marginRight: 0 }),
		...styles[look],
	};
};
