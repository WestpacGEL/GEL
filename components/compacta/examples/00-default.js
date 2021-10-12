/** @jsx jsx */

import { GEL, jsx, useInstanceId } from '@westpac/core';
import { useState } from 'react';
import { Compacta } from '@westpac/compacta';

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
			<Compacta />
		</GEL>
	);
}

export default Example;
