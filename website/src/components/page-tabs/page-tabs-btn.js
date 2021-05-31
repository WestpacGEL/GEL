/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';

export const PageTabsBtn = ({ href, active, onClick, ...rest }) => {
	const mq = useMediaQuery();
	const { COLORS, SPACING } = useBrand();

	return (
		<a
			href={href}
			aria-current={active}
			onClick={onClick}
			css={mq({
				flex: 1,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: [54, null, 66],
				paddingLeft: [0, null, SPACING(10)],
				paddingRight: [0, null, SPACING(10)],
				fontWeight: 600,
				color: active ? COLORS.text : COLORS.muted,
				textDecoration: 'none',
				position: 'relative',

				// Active item underline
				// a11y: using border for WHCM support
				'::after': {
					content: '""',
					borderBottom: `3px solid ${active ? COLORS.primary : 'transparent'}`,
					position: 'absolute',
					zIndex: 0,
					bottom: 0,
					left: 0,
					right: 0,
					height: 0,
				},
			})}
			{...rest}
		/>
	);
};
