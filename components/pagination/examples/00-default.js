import React from 'react';
import { Pagination, Item } from '../src';
import { SrOnly } from '@westpac/accessibility-helpers/dist/accessibility-helpers.esm';

export default () => (
	<>
		<Pagination>
			<Item disabled>
				<SrOnly>Step</SrOnly>
				<span>Back</span>
				<SrOnly>one page</SrOnly>
			</Item>
			<Item active>
				<a href="/">1</a>
			</Item>
			<Item>
				<a href="/">2</a>
			</Item>
			<Item>
				<a href="/">3</a>
			</Item>
			<Item>
				<SrOnly>Step to the</SrOnly>
				<a href="/">Next</a>
				<SrOnly>page</SrOnly>
			</Item>
		</Pagination>

		<Pagination>
			<Item>
				<SrOnly>Step</SrOnly>
				<a href="/">Back</a>
				<SrOnly>one page</SrOnly>
			</Item>
			<Item>
				<a href="/">1</a>
			</Item>
			<Item active>
				<a href="/">2</a>
			</Item>
			<Item>
				<a href="/">3</a>
			</Item>
			<Item>
				<SrOnly>Step to the</SrOnly>
				<a href="/">Next</a>
				<SrOnly>page</SrOnly>
			</Item>
		</Pagination>

		<Pagination>
			<Item>
				<SrOnly>Step</SrOnly>
				<a href="/">Back</a>
				<SrOnly>one page</SrOnly>
			</Item>
			<Item>
				<a href="/">1</a>
			</Item>
			<Item>
				<a href="/">2</a>
			</Item>
			<Item active>
				<a href="/">3</a>
			</Item>
			<Item disabled>
				<SrOnly>Step to the</SrOnly>
				<span>Next</span>
				<SrOnly>page</SrOnly>
			</Item>
		</Pagination>
	</>
);
