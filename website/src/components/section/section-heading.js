/** @jsx jsx */
import { jsx, useMediaQuery, useBrand } from '@westpac/core';
import { Grid, Cell } from '@westpac/grid';
import { Heading } from '@westpac/heading';

// ==============================
// Component
// ==============================

export const SectionHeading = ({ children, ...rest }) => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();

	return (
		<Grid>
			<Cell width={[12, null, null, 11]}>
				<Heading
					tag="h2"
					size={[7, null, 6]}
					css={mq({
						marginBottom: [SPACING(6), null, SPACING(10)],
					})}
					{...rest}
				>
					{children}
				</Heading>
			</Cell>
		</Grid>
	);
};
