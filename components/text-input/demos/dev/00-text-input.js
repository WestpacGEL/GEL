/** @jsx jsx */

import { jsx } from '@westpac/core';
import { TextInput, Select, Textarea } from '@westpac/text-input';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Default</Title>
			<TextInput />
			<br />
			<br />
			<Select name="thing">
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>
			<br />
			<br />
			<Textarea />
		</Playground>
	);
};

export default Demo;
