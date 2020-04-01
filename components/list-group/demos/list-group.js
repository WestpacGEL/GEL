/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ListGroup, Item } from '@westpac/list-group';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ListGroup>
				<Item>List item 1</Item>
				<Item>List item 2</Item>
				<Item>List item 3</Item>
				<Item>List item 4</Item>
			</ListGroup>
		</Playground>
	);
};
