import React from 'react';
import { Pagination, Item } from '../src';
import { VisuallyHidden } from '@westpac/a11y';

export default () => (
	<>
		<Pagination>
			<Item disabled>
				<VisuallyHidden>Step</VisuallyHidden>
				<span>Back</span>
				<VisuallyHidden>one page</VisuallyHidden>
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
				<VisuallyHidden>Step to the</VisuallyHidden>
				<a href="/">Next</a>
				<VisuallyHidden>page</VisuallyHidden>
			</Item>
		</Pagination>

		<Pagination>
			<Item>
				<VisuallyHidden>Step</VisuallyHidden>
				<a href="/">Back</a>
				<VisuallyHidden>one page</VisuallyHidden>
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
				<VisuallyHidden>Step to the</VisuallyHidden>
				<a href="/">Next</a>
				<VisuallyHidden>page</VisuallyHidden>
			</Item>
		</Pagination>

		<Pagination>
			<Item>
				<VisuallyHidden>Step</VisuallyHidden>
				<a href="/">Back</a>
				<VisuallyHidden>one page</VisuallyHidden>
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
				<VisuallyHidden>Step to the</VisuallyHidden>
				<span>Next</span>
				<VisuallyHidden>page</VisuallyHidden>
			</Item>
		</Pagination>
	</>
);
