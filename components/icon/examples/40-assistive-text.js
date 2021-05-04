/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { FavouriteIcon } from '@westpac/icon';
import { Cell, Grid, Name } from './_util';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Assistive text (screen reader text)</h2>
			<Grid css={{ justifyItems: 'start' }}>
				<Cell>
					<FavouriteIcon assistiveText="Love heart" />
					<Name>
						<code>{`<FavouriteIcon assistiveText="Love heart"\u00A0/>`}</code>
					</Name>
				</Cell>
			</Grid>
		</GEL>
	);
}

export default Example;
