import { jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Default List</Title>
			<List>
				<Item>Styled bullet list</Item>
				<Item>Styled bullet list</Item>
				<Item>
					Styled bullet list
					<List>
						<Item>Styled bullet list</Item>
						<Item>Styled bullet list</Item>
						<Item>
							Styled bullet list
							<List>
								<Item>Styled bullet list</Item>
								<Item>Styled bullet list</Item>
								<Item>Styled bullet list</Item>
							</List>
						</Item>
						<Item>Styled bullet list</Item>
					</List>
				</Item>
				<Item>Styled bullet list</Item>
			</List>
			<br />
			<Title>List colours</Title>
			<List look="primary">
				<Item>This is a primary list</Item>
			</List>
			<List look="hero">
				<Item look="hero">This is a hero list</Item>
			</List>
			<List look="neutral">
				<Item look="neutral">This is a neutral list</Item>
			</List>
		</Playground>
	);
};

export default Demo;
