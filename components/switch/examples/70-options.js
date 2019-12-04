/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Screenreader only text mode</h2>
			<Switch
				name="example-sronlytext-1"
				label="Screen reader only text"
				toggleText={[]}
				srOnlyText
			/>
			<Switch name="example-sronlytext-2" label="Screen reader only text" srOnlyText />
		</GEL>
	);
}

export default Example;
