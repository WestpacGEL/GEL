/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';

export const Blockquote = ({ children, ...props }) => {
	const mq = useMediaQuery();
	const {
		SPACING,
		// GEL: { COLORS },
	} = useBrand();
	return (
		<Cell width={[12, 10, null, 8]} left={[1, 2, null, 3]}>
			<blockquote
				css={mq({
					marginTop: 0,
					marginBottom: SPACING(2),
				})}
				{...props}
			>
				{children}
			</blockquote>
		</Cell>
	);
};
