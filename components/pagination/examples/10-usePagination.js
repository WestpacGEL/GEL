/** @jsx jsx */

import { jsx } from '@westpac/core';
import { usePagination } from '@westpac/pagination';
import { Button } from '@westpac/button';
import { ArrowLeftIcon, ArrowRightIcon } from '@westpac/icon';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ context }) {
	const content = ['Page One', 'Page Two', 'Page Three'];
	const paginate = usePagination({ pages: content, infinite: true });

	return (
		<Playground context={context} brand={brand}>
			<Intopia ignore />

			<h2>usePagination</h2>
			<div css={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
				<Button look="link" size="xlarge" iconAfter={ArrowLeftIcon} onClick={paginate.previous} />
				<p>{content[paginate.current]}</p>
				<Button look="link" size="xlarge" iconAfter={ArrowRightIcon} onClick={paginate.next} />
			</div>
		</Playground>
	);
}

export default Example;
