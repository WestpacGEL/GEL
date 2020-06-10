import { GEL } from '@westpac/core';
import React from 'react';

import { ListGroup, Item } from '@westpac/list-group';
import { ButtonGroup, Item as BtnGroupItem } from '@westpac/button-group';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<ListGroup>
				<Item>Text</Item>
			</ListGroup>

			<ListGroup>
				<Item>
					Text
					<ButtonGroup size="small" name="example-default-1">
						<BtnGroupItem value="yes" checked>
							Yes
						</BtnGroupItem>
						<BtnGroupItem value="no">No</BtnGroupItem>
					</ButtonGroup>
				</Item>
			</ListGroup>
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'A list group',
			component: () => (
				<GEL brand={brand}>
					<ListGroup>
						<Item>List item 1</Item>
						<Item>List item 2</Item>
						<Item>List item 3</Item>
						<Item>List item 4</Item>
					</ListGroup>
				</GEL>
			),
		},
		{
			heading: 'A list group with button group',
			component: () => (
				<GEL brand={brand}>
					<ListGroup>
						<Item>
							Send me sms reminders
							<ButtonGroup size="small" name="example-default-1">
								<BtnGroupItem value="yes" checked>
									Yes
								</BtnGroupItem>
								<BtnGroupItem value="no">No</BtnGroupItem>
							</ButtonGroup>
						</Item>
					</ListGroup>
				</GEL>
			),
		},
	];
}
