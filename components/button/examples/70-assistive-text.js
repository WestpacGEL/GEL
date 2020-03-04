/** @jsx jsx */

import { HouseIcon } from '@westpac/icon';
import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia />
			<h2>Assistive text (screen reader text)</h2>
			<Button iconAfter={HouseIcon} assistiveText="Go to home" />{' '}
			<Button assistiveText="Learn more about accessibility">Learn more</Button>
		</Playground>
	);
};
