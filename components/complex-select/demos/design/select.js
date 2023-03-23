import { jsx } from '@westpac/core';
import { Select } from '@westpac/text-input';
import { Title, Container } from '../../../../helpers/demos';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container width={25}>
				<Title>Small</Title>
				<Select name="example-small" size="small">
					<option>Select</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</Select>
				<br />
				<br />
				<Title>Medium</Title>
				<Select name="example-medium" size="medium">
					<option>Select</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</Select>
				<br />
				<br />
				<Title>Large</Title>
				<Select name="example-large" size="large">
					<option>Select</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</Select>
				<br />
				<br />
				<Title>Extra large</Title>
				<Select name="example-xlarge" size="xlarge">
					<option>Select</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
				</Select>
			</Container>
		</Playground>
	);
};

export default Demo;
