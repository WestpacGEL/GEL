/** @jsx jsx */

import { GEL, jsx, css, useBrand } from '@westpac/core';
import * as components from '@westpac/pictogram';
import { Cell, Grid, Name } from './_util';

const pictograms = Object.keys(components);
const types = ['colour-filled', 'colour', 'dark', 'light'];

function Example({ brand }) {
	const { COLORS } = useBrand();

	return (
		<GEL brand={brand}>
			{pictograms.map((pictogram) => {
				const Pictogram = components[pictogram];
				return (
					<Grid key={pictogram} css={{ marginBottom: 6 }}>
						{types.map((type) => (
							<Cell key={type} css={{ backgroundColor: COLORS.background, padding: 24 }}>
								<Pictogram type={type} />
								<Name>
									&lt;{pictogram} type="{type}"&nbsp;/&gt;
								</Name>
							</Cell>
						))}
					</Grid>
				);
			})}
		</GEL>
	);
}

export default Example;
