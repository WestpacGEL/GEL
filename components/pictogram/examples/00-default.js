/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import * as components from '@westpac/pictogram';
import { Grid, Cell, Name } from './_util';

const informative = Object.keys(components).filter((s) => !s.startsWith('WBC'));
const decorative = Object.keys(components).filter((s) => s.startsWith('WBC'));

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Informative pictograms</h2>
			<Grid>
				{informative.map((pictogram) => {
					const Pictogram = components[pictogram];
					return (
						<Cell key={pictogram}>
							<Pictogram />
							<Name>{`<${pictogram}\u00A0/>`}</Name>
						</Cell>
					);
				})}
			</Grid>

			<hr />

			<h2>Decorative pictograms</h2>
			<Grid>
				{decorative.map((pictogram) => {
					const Pictogram = components[pictogram];
					return (
						<Cell key={pictogram}>
							<Pictogram />
							<Name>{`<${pictogram}\u00A0/>`}</Name>
						</Cell>
					);
				})}
			</Grid>
		</GEL>
	);
}

export default Example;
