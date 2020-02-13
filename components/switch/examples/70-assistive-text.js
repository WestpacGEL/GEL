/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

function Example({ context }) {
	return (
		<Playground context={context} brand={brand}>
			<Intopia />

			<h2>Assistive text (screen reader text)</h2>
			<Switch name="example-sronlytext-1" toggleText={[]} assistiveText="Screen reader only text" />
			<Switch name="example-sronlytext-2" assistiveText="Screen reader only text" />
			<Switch
				name="example-sronlytext-3"
				label="Turn notifications"
				assistiveText="Screen reader only text"
			/>
		</Playground>
	);
}

export default Example;
