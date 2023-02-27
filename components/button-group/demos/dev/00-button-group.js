import { jsx } from '@westpac/core';
import { ButtonGroup, Item } from '@westpac/button-group';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Composed</Title>
			<ButtonGroup name="example-composed">
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>
			<Title>Data-driven</Title>
			<ButtonGroup
				name="example-data-driven"
				data={[
					{ text: 'Left', value: 'left' },
					{ text: 'Middle', value: 'middle' },
					{ text: 'Right', value: 'right' },
				]}
			/>
		</Playground>
	);
};

export default Demo;
