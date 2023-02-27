import { jsx } from '@westpac/core';
import { ButtonDropdown, Heading } from '@westpac/button-dropdown';
import { List, Item } from '@westpac/list';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ButtonDropdown text="Block-level dropdown" block={[false]} look="primary" soft>
				<Heading>Dropdown header</Heading>
				<List
					type="link"
					overrides={{
						List: {
							styles: (styles) => ({
								...styles,
								margin: '1rem 0',
							}),
						},
					}}
				>
					<Item>Link 1</Item>
					<Item>Link 2</Item>
					<Item>Link 3</Item>
				</List>
				<Heading>Another header here</Heading>
				<List
					type="link"
					overrides={{
						List: {
							styles: (styles) => ({
								...styles,
								margin: '1rem 0',
							}),
						},
					}}
				>
					<Item>Link 1</Item>
					<Item>Link 2</Item>
					<Item>Link 3</Item>
				</List>
			</ButtonDropdown>
		</Playground>
	);
};

export default Demo;
