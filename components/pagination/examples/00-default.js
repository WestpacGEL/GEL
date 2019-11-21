/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Pagination, Page } from '@westpac/pagination';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Pagination current={1}>
				<Page onClick={() => {}} label="1" />
				<Page onClick={() => {}} label="2" />
				<Page onClick={() => {}} label="3" />
			</Pagination>

			<h2>Data Driven</h2>
			<Pagination
				current={2}
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
				data={{
					pages: [
						{ onClick: () => {}, label: '1' },
						{ onClick: () => {}, label: '2' },
						{ onClick: () => {}, label: '3' },
					],
				}}
			/>
		</GEL>
	);
}

export default Example;
