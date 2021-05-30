/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Button size={['small', 'medium', 'large', 'xlarge']}>[small, medium, large, xlarge]</Button>
			<br />
			<br />
			<Button size={['small', null, 'xlarge']}>[small, null, xlarge]</Button>
		</Playground>
	);
};

export default Demo;
