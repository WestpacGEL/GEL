/** @jsx jsx */

import { jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { GenericFileIcon } from '@westpac/icon';
import { Playground } from '../../../../website/src/components/playground/macro';

import { Title } from './_utils.js';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Link list</Title>
			<List type="link">
				<Item>This is a link list</Item>
				<Item>This is a link list</Item>
			</List>
			<br />
			<hr />
			<Title>Tick list</Title>
			<List type="tick">
				<Item>This is a tick list</Item>
				<Item>This is a tick list</Item>
			</List>
			<br />
			<hr />
			<Title>Unstyled list</Title>
			<List type="unstyled">
				<Item>This is an unstyled list</Item>
				<Item>This is an unstyled list</Item>
			</List>
			<br />
			<hr />
			<Title>Icon list</Title>
			<List type="icon" icon={GenericFileIcon}>
				<Item>This is an icon list</Item>
				<Item>This is an icon list</Item>
			</List>
		</Playground>
	);
};
