/** @jsx jsx */

import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Pagination, Page } from '@westpac/pagination';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

const PageLink = props => <button {...props} />;

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

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
			<Intopia ignore />

			<Pagination>
				<Page label="1" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page label="2" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page label="3" onClick={(event, page) => console.log(`Page ${page}`, event)} />
			</Pagination>

			<Pagination>
				<Page label="1" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page label="2" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page label="3" onClick={(event, page) => console.log(`Page ${page}`, event)} />
			</Pagination>
		</GEL>
	);
}

export default Example;
