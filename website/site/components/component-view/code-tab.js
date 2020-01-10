/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Grid, Cell } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import { PageLinks } from './page-links';

export const CodeTab = ({ dataComponent: DataComponent }) => {
	const { SPACING, PACKS } = useBrand();
	return (
		<div>
			<Grid css={{ padding: `${SPACING(4)} 0` }}>
				<Cell width={7}>
					<p css={{ ...PACKS.lead, marginTop: 0 }}>
						Developer focused overview text goes here it will need to be at least this long.
					</p>
				</Cell>
				<Cell width={1} />
				<Cell width={4}>
					<PageLinks title="Page content" links={['Item 4', 'Item 5', 'Item 6']} />
				</Cell>
			</Grid>

			<Heading tag="h2" size={6} css={{ marginTop: 40, marginBottom: 10 }}>
				Code examples
			</Heading>
			<p>// TODO: examples</p>
			<DataComponent></DataComponent>

			{/*<Examples examples={examples} name={name} />*/}
			<Heading tag="h2" size={6} css={{ marginTop: 40, marginBottom: 10 }}>
				Changelog
			</Heading>
			<p>// TODO: changelog</p>
			{/*<ChangelogWrapper data={changelog}></ChangelogWrapper>*/}
		</div>
	);
};
