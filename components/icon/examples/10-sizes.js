import React from 'react';

import { GlobalIcon } from '../src';
import { Row } from './_util';

const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];

export default () => (
	<Row>
		{sizes.map(s => (
			<GlobalIcon key={s} label={s} size={s} title={s} />
		))}
	</Row>
);
