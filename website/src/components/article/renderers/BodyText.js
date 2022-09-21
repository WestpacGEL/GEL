/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';

export const BodyText = ({ children, ...props }) => {
	const mq = useMediaQuery();
	const {
		TYPE,
		SPACING,
		GEL: { COLORS },
	} = useBrand();
	return (
		<Cell className="body-text" width={[12, 10, null, 8]} left={[1, 2, null, 3]}>
			<div
				css={mq({
					marginBottom: ['2.625rem', '3.375rem'],
					fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
					lineHeight: 2,
					a: {
						color: COLORS.icon,
					},
				})}
				{...props}
			>
				<p css={{ margin: `0 0 ${SPACING(2)}` }}>{children}</p>
			</div>
		</Cell>
	);
};
