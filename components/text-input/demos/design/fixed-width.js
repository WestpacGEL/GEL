/** @jsx jsx */

import { jsx } from '@westpac/core';
import { TextInput } from '@westpac/text-input';
import { Title, Container } from '../../../../helpers/demos';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>2 characters</Title>
			<TextInput name="example-width-2" width={2} />
			<br />
			<br />
			<Title>3 characters</Title>
			<TextInput name="example-width-3" width={3} />
			<br />
			<br />
			<Title>4 characters</Title>
			<TextInput name="example-width-4" width={4} />
			<br />
			<br />
			<Title>5 characters</Title>
			<TextInput name="example-width-5" width={5} />
			<br />
			<br />
			<Title>10 characters</Title>
			<TextInput name="example-width-10" width={10} />
			<br />
			<br />
			<Title>20 characters</Title>
			<TextInput name="example-width-20" width={20} />
			<br />
			<br />
			<Title>30 characters</Title>
			<TextInput name="example-width-30" width={30} />
		</Playground>
	);
};
