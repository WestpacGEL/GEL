import { jsx, useBrand, useMediaQuery } from '@westpac/core';

export const Separator = (props) => {
	const { COLORS, SPACING } = useBrand();
	const mq = useMediaQuery();

	return (
		<div
			css={mq({
				display: 'flex',
				alignItems: 'flex-end',
				boxSizing: 'border-box',
				marginTop: ['30px', null, null, null, '60px'],
				paddingBottom: '12px',
				borderBottom: `1px solid ${COLORS.border}`,
				height: SPACING(5),
			})}
			{...props}
		>
			<button
				type="button"
				css={{
					display: 'block',
					border: 0,
					background: 'transparent',
					cursor: 'pointer',
					textAlign: 'right',
					width: '100%',
					padding: '0 18px 0 0 !important',
				}}
				onClick={(e) => {
					e.preventDefault();
					window.scroll({
						top: 0,
						left: 0,
						behavior: 'smooth',
					});
				}}
			>
				Top <span css={{ color: COLORS.primary }}>&uarr;</span>
			</button>
		</div>
	);
};
