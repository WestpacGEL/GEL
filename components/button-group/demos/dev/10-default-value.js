import { jsx } from '@westpac/core';
import { ButtonGroup, Item } from '@westpac/button-group';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Index (integer)</Title>
			<ButtonGroup data-cy="test-btn-grp" name="example-defaultvalue-index" defaultValue={0}>
				<Item>Left</Item>
				<Item>Middle</Item>
				<Item>Right</Item>
			</ButtonGroup>
			<Title>Key (string)</Title>
			<ButtonGroup name="example-defaultvalue-key" defaultValue={'right'}>
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>
		</Playground>
	);
};

export default Demo;
