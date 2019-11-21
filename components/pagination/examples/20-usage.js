/** @jsx jsx */

import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Pagination, Page } from '@westpac/pagination';

function Example({ brand }) {
	const content = ['Page One', 'Page Two', 'Page Three'];
	const [current, setCurrent] = useState(0);

	return (
		<GEL brand={brand}>
			<p>Current: {current}</p>
			{content[current]}
			<Pagination
				current={current}
				back={{
					visible: true,
					label: 'Back',
					ariaLabel: 'Go to previous page',
				}}
				next={{
					visible: true,
					label: 'Next',
					ariaLabel: 'Go to the next page',
				}}
			>
				<Page
					onClick={e => {
						e.preventDefault();
						console.log('test');
						setCurrent(0);
					}}
					label="1"
				/>
				<Page
					onClick={e => {
						e.preventDefault();
						setCurrent(1);
					}}
					label="2"
				/>
				<Page
					onClick={e => {
						e.preventDefault();
						setCurrent(2);
					}}
					label="3"
				/>
			</Pagination>
		</GEL>
	);
}

export default Example;
