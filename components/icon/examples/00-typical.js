import { GEL, jsx } from '@westpac/core';
import { AddCircleIcon } from '@westpac/icon';
import { Grid, Cell, Name } from './_util';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Grid css={{ justifyItems: 'start' }}>
				<Cell>
					<AddCircleIcon />
					<Name>
						<code>{`<AddCircleIcon\u00A0/>`}</code>
					</Name>
				</Cell>
			</Grid>
		</GEL>
	);
}

export default Example;
