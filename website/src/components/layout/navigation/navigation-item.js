import { useBrand } from '@westpac/core';
import { Item } from '@westpac/list';
import { forwardRef } from 'react';

export const NavigationItem = (props) => {
	return <Item css={{ margin: 0, paddingLeft: 0 }} {...props} />;
};

export const StyledItem = forwardRef(({ tag: Tag, level, ...rest }, ref) => {
	const { COLORS } = useBrand();
	return (
		<Tag
			ref={ref}
			type={Tag === 'button' ? 'button' : undefined}
			css={{
				display: 'block',
				padding: `14px 30px 14px ${36 + level * 20}px`,
				textDecoration: 'none',
				fontSize: '0.875rem',
				color: level === 0 ? COLORS.text : COLORS.muted,
				transition: 'background 0.2s ease',

				':hover': { background: COLORS.background },
			}}
			{...rest}
		/>
	);
});
StyledItem.displayName = 'StyledItem';
