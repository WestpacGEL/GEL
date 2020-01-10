/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Grid, Cell } from '@westpac/grid';

import { MaxWidthGrid, Row } from './_utils';
import { PageLinks } from './page-links';

export const AccessibilityTab = () => {
	const { SPACING, PACKS } = useBrand();
	return (
		<MaxWidthGrid>
			<Cell width={7}>
				<p css={{ ...PACKS.lead, marginTop: 0 }}>
					This is some accessibility tab placeholder text to make the intro section look nicer,
					until the content is entered in the system.
				</p>
			</Cell>
			<Cell width={1} />
			<Cell width={4}>
				<PageLinks title="Page content" links={['Item 4', 'Item 5', 'Item 6']} />
			</Cell>
		</MaxWidthGrid>
	);
};
