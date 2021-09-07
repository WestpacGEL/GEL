/** @jsx jsx */

import { jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { GenericFileIcon } from '@westpac/icon';

import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Link list</Title>
			<List type="link">
				<Item>
					<a href="#">This is a link list</a>
				</Item>
				<Item>
					<a href="#">This is a link list</a>
				</Item>
			</List>
			<br />
			<Title>Tick list</Title>
			<List type="tick">
				<Item>This is a tick list</Item>
				<Item>This is a tick list</Item>
			</List>
			<br />
			<Title>Cross list</Title>
			<List type="cross">
				<Item>This is a cross list</Item>
				<Item>This is a cross list</Item>
			</List>
			<br />
			<Title>Unstyled list</Title>
			<List type="unstyled">
				<Item>This is an unstyled list</Item>
				<Item>This is an unstyled list</Item>
			</List>
			<br />
			<Title>Icon list</Title>
			<List type="icon" icon={GenericFileIcon}>
				<Item>This is an icon list</Item>
				<Item>This is an icon list</Item>
			</List>
			<List type="icon" icon={GenericFileIcon} look="primary">
				<Item>This is an icon list</Item>
				<Item>This is an icon list</Item>
			</List>
		</Playground>
	);
};

export default Demo;
