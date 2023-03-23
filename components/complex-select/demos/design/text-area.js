import { jsx } from '@westpac/core';
import { Textarea } from '@westpac/text-input';
import { Title, Container } from '../../../../helpers/demos';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container width={50}>
				<Title>Small</Title>
				<Textarea name="example-small" size="small" />
				<br />
				<br />
				<Title>Medium</Title>
				<Textarea name="example-medium" size="medium" />
				<br />
				<br />
				<Title>Large</Title>
				<Textarea name="example-large" size="large" />
				<br />
				<br />
				<Title>Extra large</Title>
				<Textarea name="example-xlarge" size="xlarge" />
			</Container>
		</Playground>
	);
};

export default Demo;
