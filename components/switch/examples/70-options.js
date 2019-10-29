/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Screenreader only text mode</h2>
			<Switch name="example-sronlytext-1" toggleText={[]} srOnlyText>
				Screen reader only text
			</Switch>
			<Switch name="example-sronlytext-2" srOnlyText>
				Screen reader only text
			</Switch>
			<Switch name="example-sronlytext-3" toggleText={['Yes', 'No']} srOnlyText>
				Screen reader only text
			</Switch>
		</GEL>
	);
}

export default Example;
