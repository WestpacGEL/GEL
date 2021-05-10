/** @jsx jsx */

import { GEL, jsx, useInstanceId } from '@westpac/core';
import { useState } from 'react';
import { Repeater } from '@westpac/form';

const Test = (props) => {
	const [id] = useState(useInstanceId());
	return (
		<div id={id} css={{ marginBottom: '2rem' }} {...props}>
			test
		</div>
	);
};

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Repeater component={Test} />
		</GEL>
	);
}

export default Example;
