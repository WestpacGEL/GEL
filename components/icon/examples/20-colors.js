import React from 'react';
import { FavouriteIcon } from '../src';
import { Row } from './_util';

const colors = [
	{ key: 'red', value: '#DE350B' },
	{ key: 'yellow', value: '#FF991F' },
	{ key: 'green', value: '#00875A' },
	{ key: 'teal', value: '#00A3BF' },
	{ key: 'blue', value: '#0052CC' },
	{ key: 'purple', value: '#5243AA' },
];

export default () => (
	<Row>
		{colors.map(s => (
			<FavouriteIcon key={s.key} label={`${s.key} heart`} color={s.value} />
		))}
	</Row>
);
