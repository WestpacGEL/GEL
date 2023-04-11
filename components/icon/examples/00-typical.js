import { GEL, jsx } from '@westpac/core';
import { HouseIcon, MessageIcon } from '@westpac/icon';
import { Grid, Cell, Name } from './_util';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Grid css={{ justifyItems: 'start' }}>
				<Cell>
					<p>Filled</p>
					<MessageIcon />
					<Name>
						<code>{`<MessageIcon look='filled'\u00A0/>`}</code>
					</Name>
				</Cell>
				<Cell>
					<p>Outlined</p>
					<MessageIcon look="outlined" />
					<Name>
						<code>{`<MessageIcon look='outlined'\u00A0/>`}</code>
					</Name>
				</Cell>
			</Grid>
		</GEL>
	);
}

export default Example;
