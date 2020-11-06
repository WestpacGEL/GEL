/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { FavouriteIcon } from '@westpac/icon';
import { Row } from './_util';

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

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<FavouriteIcon assistiveText="Colored heart" />

			<hr />

			<h2>System colours</h2>

			<h3>Brand colours</h3>
			<Row>
				{brandColors.map((color) => (
					<FavouriteIcon key={color} assistiveText="Colored heart" color={color} />
				))}
			</Row>

			<h3>Reserved colours</h3>
			<Row>
				{reservedColors.map((color) => (
					<FavouriteIcon key={color} assistiveText="Colored heart" color={color} />
				))}
			</Row>

			<hr />

			<h2>Custom colours</h2>
			<h3>Inherit</h3>
			<FavouriteIcon assistiveText="Colored heart" color="inherit" />

			<h3>Hex values</h3>
			<Row>
				<FavouriteIcon assistiveText="Colored heart" color="#DE350B" />
				<FavouriteIcon assistiveText="Colored heart" color="#FF991F" />
				<FavouriteIcon assistiveText="Colored heart" color="#00875A" />
				<FavouriteIcon assistiveText="Colored heart" color="#00A3BF" />
				<FavouriteIcon assistiveText="Colored heart" color="#0052CC" />
				<FavouriteIcon assistiveText="Colored heart" color="#5243AA" />
			</Row>
		</GEL>
	);
}

export default Example;
