/** @jsx jsx */

import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Pagination, Page } from '@westpac/pagination';

const PageLink = props => <button {...props} />;

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	const [current, setCurrent] = useState(0);

	overridesWithTokens['@westpac/pagination'] = {
		pageCSS: {
			borderColor: 'palevioletred',
		},
		css: {
			justifyContent: 'center',
		},
		PageLink,
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Pagination
				current={current}
				back={{
					onClick: () => {
						setCurrent(current - 1);
					},
				}}
				next={{
					onClick: e => {
						e.preventDefault();
						setCurrent(current + 1);
					},
				}}
			>
				<Page
					onClick={e => {
						e.preventDefault();
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
