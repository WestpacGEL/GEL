/** @jsx jsx */

import { GEL, jsx, css, useBrand } from '@westpac/core';
import * as components from '@westpac/pictogram';
import { Cell, Grid, Name } from './_util';
import pkg from '../../../GEL.json';

const { brands } = pkg;

const informative = Object.keys(components).filter(
	(component) => !Object.keys(brands).some((code) => component.startsWith(code))
);
const modes = ['dark', 'light', 'duo'];

function Example({ brand }) {
	const { COLORS } = useBrand();

	return (
		<GEL brand={brand}>
			<h2>Informative pictograms</h2>
			{informative.map((pictogram) => {
				const Pictogram = components[pictogram];
				return (
					<Grid key={pictogram} css={{ marginBottom: 6 }}>
						{modes.map((mode) => (
							<Cell
								key={mode}
								css={{
									backgroundColor: mode === 'light' ? COLORS.hero : COLORS.background,
									padding: 24,
								}}
							>
								<Pictogram mode={mode} />
								<Name
									css={{ color: mode === 'light' && COLORS.light }}
								>{`<${pictogram} mode="${mode}"\u00A0/>`}</Name>
							</Cell>
						))}
					</Grid>
				);
			})}
		</GEL>
	);
}

export default Example;
