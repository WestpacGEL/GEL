import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Pagination, Page } from '@westpac/pagination';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/pagination'] = {
		Pagination: {
			styles: (styles) => ({
				...styles,
				border: '3px solid blue',
			}),
		},
		PageList: {
			styles: (styles) => ({
				...styles,
				border: '3px solid red',
			}),
		},
		Page: {
			styles: (styles) => ({
				...styles,
				outline: '3px solid red',
			}),
		},
		Link: {
			styles: (styles, { active }) => ({
				...styles,
				borderColor: active ? 'palevioletred' : 'white',
				backgroundColor: active ? 'palevioletred' : 'white',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Pagination>
				<Page text="1" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="2" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="3" onClick={(event, page) => console.log(`Page ${page}`, event)} />
			</Pagination>

			<Pagination
				data={[
					{ text: '1', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ text: '2', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ text: '3', onClick: (event, page) => console.log(`Page ${page}`, event) },
				]}
			/>

			<br />
			<hr />
			<br />

			<h2>With overrides and component overrides</h2>
			<Pagination
				overrides={{
					Link: {
						styles: (styles) => ({
							...styles,
							background: 'rgba(0,255,0,0.3)',
						}),
					},
				}}
			>
				<Page text="one" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="two" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="three" onClick={(event, page) => console.log(`Page ${page}`, event)} />
			</Pagination>

			<Pagination
				overrides={{
					Link: {
						styles: (styles) => ({
							...styles,
							background: 'rgba(0,255,0,0.3)',
						}),
					},
				}}
				data={[
					{ text: '1', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ text: '2', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ text: '3', onClick: (event, page) => console.log(`Page ${page}`, event) },
				]}
			/>
		</GEL>
	);
}

export default Example;
