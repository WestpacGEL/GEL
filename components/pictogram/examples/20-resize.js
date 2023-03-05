import { GEL, jsx } from '@westpac/core';
import { WalletPictogram } from '@westpac/pictogram';
import { Grid, Cell, Name } from './_util';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Resize by width</h2>

			<Grid>
				<Cell>
					<WalletPictogram width={100} />
					<Name>{`<WalletPictogram width={100} />`}</Name>
				</Cell>
				<Cell>
					<WalletPictogram width={[100, 150, 200, 250]} />
					<Name>{`<WalletPictogram width={[100, 150, 200, 250]} />`}</Name>
				</Cell>
			</Grid>

			<hr />

			<h2>Resize by height</h2>

			<Grid>
				<Cell>
					<WalletPictogram height={50} />
					<Name>{`<WalletPictogram height={50} />`}</Name>
				</Cell>
				<Cell>
					<WalletPictogram height={[50, 75, 100, 125]} />
					<Name>{`<WalletPictogram height={[50, 75, 100, 125]} />`}</Name>
				</Cell>
			</Grid>
		</GEL>
	);
}

export default Example;
