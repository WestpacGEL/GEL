import { GEL, jsx } from '@westpac/core';
import { FavouriteIcon } from '@westpac/icon';
import { Grid, Cell, Name, Row } from './_util';

const brandColors = [
	'primary',
	'hero',
	'neutral',
	'heading',
	'text',
	'muted',
	'border',
	'background',
	'light',
];
const reservedColors = ['info', 'success', 'warning', 'danger', 'system'];
const customColors = ['#DE350B', '#FF991F', '#00875A', '#00A3BF', '#0052CC', '#5243AA'];

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<Grid css={{ justifyItems: 'start' }}>
				<Cell>
					<FavouriteIcon assistiveText="Coloured heart" />
					<Name>{`<FavouriteIcon\u00A0/>`}</Name>
				</Cell>
			</Grid>

			<hr />

			<h2>System colours</h2>

			<h3>Brand colours</h3>
			<Grid>
				{brandColors.map((color) => (
					<Cell key={color}>
						<FavouriteIcon assistiveText="Coloured heart" color={color} />
						<Name>{`<FavouriteIcon color="${color}"\u00A0/>`}</Name>
					</Cell>
				))}
			</Grid>

			<h3>Reserved colours</h3>
			<Grid>
				{reservedColors.map((color) => (
					<Cell key={color}>
						<FavouriteIcon assistiveText="Coloured heart" color={color} />
						<Name>{`<FavouriteIcon color="${color}"\u00A0/>`}</Name>
					</Cell>
				))}
			</Grid>

			<hr />

			<h2>Custom colours</h2>
			<h3>Inherit</h3>
			<Grid css={{ justifyItems: 'start' }}>
				<Cell>
					<FavouriteIcon assistiveText="Coloured heart" color="inherit" />
					<Name>{`<FavouriteIcon color="inherit"\u00A0/>`}</Name>
				</Cell>
			</Grid>

			<h3>Hex values</h3>
			<Grid>
				{customColors.map((color) => (
					<Cell key={color}>
						<FavouriteIcon assistiveText="Coloured heart" color={color} />
						<Name>{`<FavouriteIcon color="${color}"\u00A0/>`}</Name>
					</Cell>
				))}
			</Grid>
		</GEL>
	);
}

export default Example;
