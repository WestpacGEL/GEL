import { GEL, jsx } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { HouseIcon } from '@westpac/icon';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/list'] = {
		List: {
			styles: (styles, { nested }) => {
				const styleMap = ['red', 'green', 'blue'];
				return {
					...styles,
					outline: `4px dotted ${nested > 2 ? 'hotpink' : styleMap[nested]}`,
				};
			},
		},
		Item: {
			styles: (styles, { look }) => ({
				...styles,
				outline: '1px solid rebeccapurple',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<List type="icon" icon={HouseIcon}>
				<Item>List item</Item>
				<Item>List item</Item>
				<Item>List item</Item>
				<Item>
					List item
					<List>
						<Item>List item</Item>
						<Item>List item</Item>
						<Item>List item</Item>
						<Item>
							List item
							<List>
								<Item>List item</Item>
								<Item>
									List item
									<List>
										<Item>List item</Item>
										<Item>List item</Item>
										<Item>List item</Item>
									</List>
								</Item>
								<Item>List item</Item>
							</List>
						</Item>
						<Item>List item</Item>
					</List>
				</Item>
				<Item>List item</Item>
			</List>

			<br />
			<hr />
			<br />

			<List type="tick">
				<Item>List item</Item>
				<Item>List item</Item>
				<Item>List item</Item>
				<Item>
					List item
					<List>
						<Item>List item</Item>
						<Item>List item</Item>
						<Item>List item</Item>
						<Item>
							List item
							<List>
								<Item>List item</Item>
								<Item>
									List item
									<List>
										<Item>List item</Item>
										<Item>List item</Item>
										<Item>List item</Item>
									</List>
								</Item>
								<Item>List item</Item>
							</List>
						</Item>
						<Item>List item</Item>
					</List>
				</Item>
				<Item>List item</Item>
			</List>

			<br />
			<hr />
			<br />

			<List
				data={[
					'Styled bullet list',
					'Styled bullet list',
					'Styled bullet list',
					[
						'Styled bullet list - nested',
						'Styled bullet list - nested',
						'Styled bullet list - nested',
						[
							'Styled bullet list - nested',
							'Styled bullet list - nested',
							'Styled bullet list - nested',
							[
								'Styled bullet list - nested',
								'Styled bullet list - nested',
								'Styled bullet list - nested',
							],
						],
					],
				]}
			/>

			<h2>With overrides and component overrides</h2>
			<List
				type="tick"
				assistiveText="The following items are included"
				overrides={{
					Item: {
						styles: (styles) => ({
							...styles,
							outline: '1px dashed rebeccapurple',
						}),
					},
				}}
			>
				<Item>List item</Item>
				<Item>List item</Item>
				<Item>List item</Item>
				<Item>
					List item
					<List>
						<Item>List item</Item>
						<Item>List item</Item>
						<Item>List item</Item>
						<Item>
							List item
							<List>
								<Item>List item</Item>
								<Item>
									List item
									<List>
										<Item>List item</Item>
										<Item>List item</Item>
										<Item>List item</Item>
									</List>
								</Item>
								<Item>List item</Item>
							</List>
						</Item>
						<Item>List item</Item>
					</List>
				</Item>
				<Item>List item</Item>
			</List>

			<br />
			<hr />
			<br />

			<List
				type="tick"
				assistiveText="The following items are included"
				overrides={{
					Item: {
						styles: (styles) => ({
							...styles,
							outline: '1px dashed rebeccapurple',
						}),
					},
				}}
				data={[
					'Styled bullet list',
					'Styled bullet list',
					'Styled bullet list',
					[
						'Styled bullet list - nested',
						'Styled bullet list - nested',
						'Styled bullet list - nested',
						[
							'Styled bullet list - nested',
							'Styled bullet list - nested',
							'Styled bullet list - nested',
							[
								'Styled bullet list - nested',
								'Styled bullet list - nested',
								'Styled bullet list - nested',
							],
						],
					],
				]}
			/>
		</GEL>
	);
}

export default Example;
