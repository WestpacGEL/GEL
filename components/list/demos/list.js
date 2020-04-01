/** @jsx jsx */

import { jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<List>
				<Item>Styled bullet list - primary</Item>
				<Item>Styled bullet list - primary</Item>
				<Item>Styled bullet list - primary</Item>
			</List>
		</Playground>
	);
};
