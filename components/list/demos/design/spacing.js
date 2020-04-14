/** @jsx jsx */

import { jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<List type="link" spacing="large">
				<Item>This is a large spaced link list</Item>
				<Item>This is a large spaced link list</Item>
				<Item>This is a large spaced link list</Item>
			</List>
		</Playground>
	);
};
