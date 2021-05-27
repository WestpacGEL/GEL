/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Field } from '@westpac/field';
import { TextInput } from '@westpac/text-input';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Field label="Text input example" hint="I am a text input">
				{(inputProps) => <TextInput {...inputProps} />}
			</Field>
		</Playground>
	);
};

export default Demo;
