import { jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Medium</Title>
			<List spacing="medium">
				<Item>Medium list spacing</Item>
				<Item>Medium list spacing</Item>
				<Item>Medium list spacing</Item>
			</List>

			<Title>Large</Title>
			<List spacing="large">
				<Item>Large list spacing</Item>
				<Item>Large list spacing</Item>
				<Item>Large list spacing</Item>
			</List>
		</Playground>
	);
};

export default Demo;
