/** @jsx jsx */

import { jsx } from '@westpac/core';
import { TextInput } from '@westpac/text-input';
import { Title } from '../../../../helpers/demos';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Small</Title>
			<TextInput name="example-small" ize="small" />
			<br />
			<Title>Medium</Title>
			<TextInput name="example-medium" size="medium" />
			<br />
			<Title>Large</Title>
			<TextInput name="example-large" size="large" />
			<br />
			<Title>Extra large</Title>
			<TextInput name="example-xlarge" size="xlarge" />
		</Playground>
	);
};
