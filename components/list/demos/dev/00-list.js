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

			<Title>Look</Title>
			<List look="primary">
				<Item>Styled bullet list - primary</Item>
				<Item>Styled bullet list - primary</Item>
			</List>
			<br />
			<List look="hero">
				<Item>Styled bullet list - hero</Item>
				<Item>Styled bullet list - hero</Item>
			</List>
			<br />
			<List look="neutral">
				<Item>Styled bullet list - neutral</Item>
				<Item>Styled bullet list - neutral</Item>
			</List>
		</Playground>
	);
};

export default Demo;
