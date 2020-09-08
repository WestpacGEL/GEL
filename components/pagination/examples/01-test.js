/** @jsx jsx */

import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Pagination, Page } from '@westpac/pagination';
import { blenderLink } from '../src/overrides/link';

function Example({ brand }) {
	const content = ['Page One', 'Page Two', 'Page Three'];
	const [current, setCurrent] = useState(0);
	const [current2, setCurrent2] = useState(0);

	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/pagination'] = {
		Link: {
			styles: blenderLink.styles,
			attributes: blenderLink.attributes,
		},
	};
	return (
		<GEL brand={overridesWithTokens}>
			<h2>Declarative</h2>
			{/* <Pagination>
				<Page text="1" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="2" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="3" onClick={(event, page) => console.log(`Page ${page}`, event)} />
			</Pagination> */}
			{/* {[0, 1, 2].map((index) => (
				<Pagination key={index} current={index}>
					<Page text="1" />
					<Page text="2" />
					<Page text="3" />
				</Pagination>
			))} */}
			{/* <Pagination current={1}>
				<Page text="1" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="2" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="3" onClick={(event, page) => console.log(`Page ${page}`, event)} />
			</Pagination> */}

			<h2>Infinite</h2>
			<Pagination>
				<Page text="1" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
				<Page text="2" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
				<Page
					text="3"
					onClick={(event, page) => console.log(`Infinite page ${page}`, event)}
					disabled
				/>
				<Page text="3" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
			</Pagination>

			{/* <Pagination infinite current={1}>
				<Page text="1" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
				<Page text="2" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
				<Page text="3" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
			</Pagination> */}
		</GEL>
	);
}

export default Example;
