import React from 'react';

import { FavouriteIcon } from '../src';
import { Row } from './_util';

const colors = [
	'#DE350B', // red
	'#FF991F', // yellow
	'#00875A', // green
	'#00A3BF', // teal
	'#0052CC', // blue
	'#5243AA', // purple
];

export default () => (
	<Row>
		{colors.map(s => (
			<FavouriteIcon key={s} label={s} primaryColor={s} title={s} />
		))}
	</Row>
);
