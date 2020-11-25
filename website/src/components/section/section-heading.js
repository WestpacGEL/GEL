/** @jsx jsx */
import { jsx, useMediaQuery, useBrand } from '@westpac/core';
import { Grid, Cell } from '@westpac/grid';
import { Heading } from '@westpac/heading';

// ==============================
// Component
// ==============================

export const SectionHeading = ({ tight = false, children, ...rest }) => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();

	return (
		<Grid>
			<Cell width={[12, null, null, 11]}>
				<Heading
					tag="h2"
					size={[7, null, 6]}
					css={mq({
						marginBottom: [tight ? SPACING(2) : SPACING(6), null, tight ? SPACING(3) : SPACING(10)],
					})}
					{...rest}
				>
					{children}
				</Heading>
			</Cell>
		</Grid>
	);
};
