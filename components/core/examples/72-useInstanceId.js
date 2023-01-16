/** @jsx jsx */

import { useId, useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { Code } from './_utils';

function Example({ brand }) {
	const [instanceId, setInstanceId] = useState();
	return (
		<GEL brand={brand}>
			<Button onClick={() => setInstanceId(useId())}>Get instance id</Button>
			<h2>{instanceId}</h2>
			<Code>useId();</Code>
			=>
			<Code>> Get an id for component instances.</Code>
		</GEL>
	);
}

export default Example;
