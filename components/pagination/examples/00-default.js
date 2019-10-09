import React from 'react';
import { Pagination, Item } from '../src';

export default () => (
	<>
		<Pagination>
			<Item disabled="true">
				<a href="/">Back</a>
			</Item>
			<Item active="true">
				<a href="/">1</a>
			</Item>
			<Item>
				<a href="/">2</a>
			</Item>
			<Item>
				<a href="/">3</a>
			</Item>
			<Item>
				<a href="/">Next</a>
			</Item>
		</Pagination>

		<Pagination>
			<Item>
				<a href="/">Back</a>
			</Item>
			<Item>
				<a href="/">1</a>
			</Item>
			<Item active="true">
				<a href="/">2</a>
			</Item>
			<Item>
				<a href="/">3</a>
			</Item>
			<Item>
				<a href="/">Next</a>
			</Item>
		</Pagination>

		<Pagination>
			<Item>
				<a href="/">Back</a>
			</Item>
			<Item>
				<a href="/">1</a>
			</Item>
			<Item>
				<a href="/">2</a>
			</Item>
			<Item active="true">
				<a href="/">3</a>
			</Item>
			<Item disabled="true">
				<a href="/">Next</a>
			</Item>
		</Pagination>
	</>
);
