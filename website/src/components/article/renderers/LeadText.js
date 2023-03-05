import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';

export const LeadText = ({ children, ...props }) => {
	const mq = useMediaQuery();
	const {
		TYPE,
		GEL: { COLORS },
	} = useBrand();
	return (
		<Cell width={[12, 10]} left={[1, 2]}>
			<p
				css={mq({
					marginTop: 0,
					marginBottom: ['2.635rem', '3.375rem'],
					fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
					fontSize: ['1.125rem', '1.5rem'],
					lineHeight: 1.6,
					color: COLORS.text,
				})}
				{...props}
			>
				{children}
			</p>
		</Cell>
	);
};
