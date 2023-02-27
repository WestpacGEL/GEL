import { jsx } from '@westpac/core';
import { ButtonGroup, Item } from '@westpac/button-group';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ButtonGroup name="example-small" size="small">
				<Item value="left">Sm - 30px</Item>
				<Item value="right">Label</Item>
			</ButtonGroup>
			<br />
			<br />
			<ButtonGroup name="example-medium" size="medium">
				<Item value="left">Md - 36px</Item>
				<Item value="right">Label</Item>
			</ButtonGroup>
			<br />
			<br />
			<ButtonGroup name="example-large" size="large">
				<Item value="left">Lg - 42px</Item>
				<Item value="right">Label</Item>
			</ButtonGroup>
			<br />
			<br />
			<ButtonGroup name="example-xlarge" size="xlarge">
				<Item value="left">Xl - 48px</Item>
				<Item value="right">Label</Item>
			</ButtonGroup>
		</Playground>
	);
};

export default Demo;
