/** @jsx jsx */

import { jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { Playground } from '../../../../website/src/components/playground/macro';

import { Title } from './_utils.js';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Default List</Title>
			<List>
				<Item>Styled bullet list - primary</Item>
				<Item>Styled bullet list - primary</Item>
				<Item>
					Styled bullet list - primary
					<List>
						<Item>Styled bullet list - primary</Item>
						<Item>Styled bullet list - primary</Item>
						<Item>
							Styled bullet list - primary
							<List>
								<Item>Styled bullet list - primary</Item>
								<Item>Styled bullet list - primary</Item>
								<Item>Styled bullet list - primary</Item>
							</List>
						</Item>
						<Item>Styled bullet list - primary</Item>
					</List>
				</Item>
				<Item>Styled bullet list - primary</Item>
			</List>
			<br />
			<hr />
			<Title>List colours</Title>
			<List>
				<Item look="primary">This is a primary list</Item>
				<Item look="hero">This is a hero list</Item>
				<Item look="neutral">This is a neutral list</Item>
			</List>
		</Playground>
	);
};
