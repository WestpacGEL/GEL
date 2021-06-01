/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Pagination, Page } from '@westpac/pagination';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Pagination>
				<Page text="1" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="2" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="3" onClick={(event, page) => console.log(`Page ${page}`, event)} />
			</Pagination>
		</Playground>
	);
};

export default Demo;
