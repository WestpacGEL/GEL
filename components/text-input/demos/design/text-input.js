/** @jsx jsx */

import { jsx } from '@westpac/core';
import { TextInput } from '@westpac/text-input';
import { Title, Container } from '../../../../helpers/demos';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container width={25}>
				<Title>Small</Title>
				<TextInput name="example-small" size="small" />
				<br />
				<br />
				<Title>Medium</Title>
				<TextInput name="example-medium" size="medium" />
				<br />
				<br />
				<Title>Large</Title>
				<TextInput name="example-large" size="large" />
				<br />
				<br />
				<Title>Extra large</Title>
				<TextInput name="example-xlarge" size="xlarge" />
			</Container>
		</Playground>
	);
};
