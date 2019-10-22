/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { FavouriteIcon } from '@westpac/icon';
import { Row } from './_util';

const colors = ['#DE350B', '#FF991F', '#00875A', '#00A3BF', '#0052CC', '#5243AA'];

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Row>
				{colors.map((color, i) => (
					<FavouriteIcon key={i} label={`${color} heart`} color={color} />
				))}
			</Row>
		</GEL>
	);
}

export default Example;
