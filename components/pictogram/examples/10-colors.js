/** @jsx jsx */

import { GEL, jsx, css, useBrand } from '@westpac/core';
import * as components from '@westpac/pictogram';
import { Cell, Grid, Name } from './_util';

const informative = Object.keys(components).filter((s) => !s.startsWith('WBC'));
const colors = ['primary', 'hero', 'text', '#fff', 'pink'];

function Example({ brand }) {
	const { COLORS } = useBrand();

	return (
		<GEL brand={brand}>
			<h2>Informative pictograms</h2>
			{informative.map((pictogram) => {
				const Pictogram = components[pictogram];
				return (
					<Grid key={pictogram} css={{ marginBottom: 6 }}>
						{colors.map((color) => (
							<Cell key={color} css={{ backgroundColor: COLORS.background, padding: 24 }}>
								<Pictogram color={color} />
								<Name>{`<${pictogram} color="${color}"\u00A0/>`}</Name>
							</Cell>
						))}
					</Grid>
				);
			})}
		</GEL>
	);
}

export default Example;
