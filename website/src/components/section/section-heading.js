/** @jsx jsx */
import { jsx, useMediaQuery, useBrand } from '@westpac/core';
import { Grid, Cell } from '@westpac/grid';
import { Heading } from '@westpac/heading';

// ==============================
// Component
// ==============================

export const SectionHeading = (props) => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();

	return (
		<Grid>
			<Cell width={[12, null, null, 10]} left={[null, null, null, 2]}>
				<Heading
					tag="h2"
					size={[7, null, 6]}
					id="related-information"
					tabIndex="-1"
					css={mq({
						'&&': {
							marginBottom: [SPACING(6), null, SPACING(10)],
						},
					})}
				>
					Related information
				</Heading>
			</Cell>
		</Grid>
	);
};
