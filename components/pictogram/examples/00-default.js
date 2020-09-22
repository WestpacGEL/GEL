/** @jsx jsx */

import { GEL, jsx, useBrand } from '@westpac/core';
import { Fragment } from 'react';
import * as components from '@westpac/pictogram';
import { Grid, Cell, Name } from './_util';

function Example({ brand }) {
	const { BRAND } = useBrand();

	const informative = Object.keys(components).filter(
		(s) =>
			!s.startsWith('BOM') &&
			!s.startsWith('BSA') &&
			!s.startsWith('STG') &&
			!s.startsWith('WBC') &&
			!s.startsWith('WBG')
	);
	const decorative = Object.keys(components).filter((s) => s.startsWith(BRAND));

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

			{decorative.length ? (
				<Fragment>
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
				</Fragment>
			) : undefined}
		</GEL>
	);
}

export default Example;
