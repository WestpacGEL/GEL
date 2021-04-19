/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Fieldset } from '@westpac/field';
import { TextInput } from '@westpac/text-input';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Fieldset legend="I am legend" hint="I am a hint" error={['I am error 1', 'I am error 2']}>
				<TextInput />
			</Fieldset>
		</GEL>
	);
}

export default Example;
