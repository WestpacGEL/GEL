/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Button block={[true, false, true, false]}>[true, false, true, false]</Button>
			<br />
			<br />
			<Button block={[true, null, false]}>[true, null, false]</Button>
		</Playground>
	);
};

export default Demo;
