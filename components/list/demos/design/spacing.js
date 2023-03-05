import { jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<List type="link" spacing="large">
				<Item>
					<a href="#">This is a large spaced link list</a>
				</Item>
				<Item>
					<a href="#">This is a large spaced link list</a>
				</Item>
				<Item>
					<a href="#">This is a large spaced link list</a>
				</Item>
			</List>
		</Playground>
	);
};

export default Demo;
