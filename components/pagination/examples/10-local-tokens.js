/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Pagination, Page } from '@westpac/pagination';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/pagination'] = {
		css: {
			justifyContent: 'center',
		},
		pageCSS: {
			borderColor: 'palevioletred',
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Pagination
				current={1}
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
				<Page onClick={() => {}} label="1" />
				<Page onClick={() => {}} label="2" />
				<Page onClick={() => {}} label="3" />
			</Pagination>
		</GEL>
	);
}

export default Example;
