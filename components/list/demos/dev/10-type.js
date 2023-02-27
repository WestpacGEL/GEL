import { jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { GithubIcon } from '@westpac/icon';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Bullet List</Title>
			<List type="bullet">
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
			</List>

			<Title>Link List</Title>
			<List type="link">
				<Item>
					<a href="#">Styled link list</a>
				</Item>
				<Item>
					<a href="#">Styled link list</a>
				</Item>
				<Item>
					<a href="#">Styled link list</a>
				</Item>
			</List>

			<Title>Tick List</Title>
			<List type="tick">
				<Item>Styled tick list</Item>
				<Item>Styled tick list</Item>
				<Item>Styled tick list</Item>
			</List>

			<Title>Ordered</Title>
			<List type="ordered">
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
				<Item>Styled ordered list</Item>
			</List>

			<Title>Unstyled</Title>
			<List type="unstyled">
				<Item>Unstyled list</Item>
				<Item>Unstyled list</Item>
				<Item>Unstyled list</Item>
			</List>

			<Title>Icon</Title>
			<List type="icon" icon={GithubIcon}>
				<Item>Styled icon list</Item>
				<Item>Styled icon list</Item>
				<Item>Styled icon list</Item>
			</List>
		</Playground>
	);
};

export default Demo;
