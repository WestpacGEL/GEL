/** @jsx jsx */

import { useState } from 'react';
import { jsx, useInstanceId } from '@westpac/core';
import { Button } from '@westpac/button';
import { Code } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

function Example({ context }) {
	const [instanceId, setInstanceId] = useState();
	return (
		<Playground context={context} brand={brand}>
			<Intopia ignore />
			<Button onClick={() => setInstanceId(useInstanceId())}>Get instance id</Button>
			<h2>{instanceId}</h2>
			<Code>useInstanceId();</Code>
			=>
			<Code>> Get an id for component instances.</Code>
		</Playground>
	);
}

export default Example;
