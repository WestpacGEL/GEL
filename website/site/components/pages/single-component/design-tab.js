/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Grid, Cell } from '@westpac/grid';

import { PageLinks } from './page-links';

export const DesignTab = ({ description }) => {
	const { SPACING, PACKS } = useBrand();

	return (
		<Grid css={{ padding: `${SPACING(4)} 0` }}>
			<Cell width={7}>
				<p css={{ ...PACKS.lead, marginTop: 0 }}>{description}</p>
				<p css={{ ...PACKS.lead }}>
					This is some placeholder text to make the intro section look nicer, until the content is
					entered in the system.
				</p>
			</Cell>
			<Cell width={1} />
			<Cell width={4}>
				<PageLinks title="Page content" links={['Item 1', 'Item 2', 'Item 3']} />
			</Cell>
		</Grid>
	);
};
