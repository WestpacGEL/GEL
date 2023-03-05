import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';

export const Header = ({ title, author, ...props }) => {
	const {
		TYPE,
		GEL: { COLORS },
	} = useBrand();
	const mq = useMediaQuery();
	return (
		<Cell width={12}>
			<h1
				css={mq({
					margin: ['0 0 0.75rem', '0 0 1.125rem'],
					fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
					fontSize: ['1.875rem', '3rem'],
					lineHeight: 1.1,
					letterSpacing: '-1px',
				})}
				{...props}
			>
				{title}
			</h1>
			{author ? (
				<p
					css={mq({
						fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
						color: COLORS.muted,
						marginTop: 0,
						marginBottom: ['1.875rem', '2.25rem', '3rem'],
					})}
				>
					{author}
				</p>
			) : null}
		</Cell>
	);
};
