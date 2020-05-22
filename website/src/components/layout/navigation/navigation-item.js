/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Item } from '@westpac/list';
import { forwardRef } from 'react';

export const NavigationItem = (props) => {
	return <Item css={{ margin: 0, paddingLeft: '0 !important' }} {...props} />;
};

export const StyledItem = forwardRef(({ tag: Tag, level, ...rest }, ref) => {
	const { COLORS } = useBrand();
	return (
		<Tag
			ref={ref}
			css={{
				cursor: 'pointer',
				height: '48px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				border: 'none',
				background: 'none',
				padding: `0 30px 0 ${36 + level * 20}px`,
				textDecoration: 'none',
				fontSize: '0.875rem !important',
				fontWeight: level === 0 && 500,
				color: level === 0 ? COLORS.text : COLORS.muted,
				transition: 'background 0.2s ease',

				':hover': { background: COLORS.background },
			}}
			{...rest}
		/>
	);
});
