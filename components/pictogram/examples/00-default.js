/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import * as components from '@westpac/pictogram';
import { Grid, Cell, Name } from './_util';

const pictograms = Object.keys(components);

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<div>
				<Grid>
					{pictograms.map((pictogram) => {
						const Pictogram = components[pictogram];
						return (
							<Cell key={pictogram}>
								<Pictogram />
								<Name>&lt;{pictogram}&nbsp;/&gt;</Name>
							</Cell>
						);
					})}
				</Grid>
			</div>
		</GEL>
	);
}

export default Example;
