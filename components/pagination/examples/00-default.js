import React from 'react';
import { Pagination, Item } from '../src';

export default () => (
	<>
		<Pagination>
			<Item disabled="true">
				<a href="http://YOUR-URL.com.au">Back</a>
			</Item>
			<Item active="true">
				<a href="http://YOUR-URL.com.au">1</a>
			</Item>
			<Item>
				<a href="http://YOUR-URL.com.au">2</a>
			</Item>
			<Item>
				<a href="http://YOUR-URL.com.au">3</a>
			</Item>
			<Item>
				<a href="http://YOUR-URL.com.au">Next</a>
			</Item>
		</Pagination>

		<Pagination>
			<Item>
				<a href="http://YOUR-URL.com.au">Back</a>
			</Item>
			<Item>
				<a href="http://YOUR-URL.com.au">1</a>
			</Item>
			<Item active="true">
				<a href="http://YOUR-URL.com.au">2</a>
			</Item>
			<Item>
				<a href="http://YOUR-URL.com.au">3</a>
			</Item>
			<Item>
				<a href="http://YOUR-URL.com.au">Next</a>
			</Item>
		</Pagination>

		<Pagination>
			<Item>
				<a href="http://YOUR-URL.com.au">Back</a>
			</Item>
			<Item>
				<a href="http://YOUR-URL.com.au">1</a>
			</Item>
			<Item>
				<a href="http://YOUR-URL.com.au">2</a>
			</Item>
			<Item active="true">
				<a href="http://YOUR-URL.com.au">3</a>
			</Item>
			<Item disabled="true">
				<a href="http://YOUR-URL.com.au">Next</a>
			</Item>
		</Pagination>
	</>
);
