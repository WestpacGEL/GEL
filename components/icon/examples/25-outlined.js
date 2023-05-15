import { GEL, jsx } from '@westpac/core';
import { HouseIcon, AddCircleIcon } from '@westpac/icon';
import { Grid, Cell, Name } from './_util';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Grid css={{ justifyItems: 'start' }}>
				<Cell>
					<AddCircleIcon look="filled" />
					<Name>
						<code>{`<AddCircle look="filled"\u00A0/>`}</code>
					</Name>
				</Cell>
				<Cell>
					<AddCircleIcon look="outlined" />
					<Name>
						<code>{`<AddCircle look="outlined"\u00A0/>`}</code>
					</Name>
				</Cell>
			</Grid>
		</GEL>
	);
}

export default Example;
