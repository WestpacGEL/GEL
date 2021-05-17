/** @jsx jsx */

import { GEL, jsx, useInstanceId } from '@westpac/core';
import { useState } from 'react';
import { Repeater } from '@westpac/repeater';

const Repeat = (props) => {
	const [id] = useState(useInstanceId());
	return (
		<div id={id} css={{ marginBottom: '2rem' }} {...props}>
			Repeater
		</div>
	);
};

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Repeater component={Repeat} />
		</GEL>
	);
}

export default Example;
