/** @jsx jsx */

import { GEL, jsx, useBrand } from '@westpac/core';
import { Fragment } from 'react';
import * as components from '@westpac/pictogram';
import { Grid, Cell, Name } from './_util';
import pkg from '../../../GEL.json';

const { brands } = pkg;

function Example({ brand }) {
	const { BRAND, COLORS } = useBrand();

	const informative = Object.keys(components).filter(
		(component) => !Object.keys(brands).some((code) => component.startsWith(code))
	);
	const decorative = Object.keys(components).filter((component) =>
		component.startsWith(BRAND.code)
	);

	return (
		<GEL brand={brand}>
			<h2>Informative pictograms</h2>
			<Grid>
				{informative.map((pictogram) => {
					const Pictogram = components[pictogram];
					return (
						<Cell key={pictogram}>
							<Pictogram />
							<Name>
								<code>{`<${pictogram}\u00A0/>`}</code>
								<div css={{ color: COLORS.muted }}>“{Pictogram.defaultProps.assistiveText}”</div>
							</Name>
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
									<Name>
										<code>{`<${pictogram}\u00A0/>`}</code>
										<div css={{ color: COLORS.muted }}>
											“{Pictogram.defaultProps.assistiveText}”
										</div>
									</Name>
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
