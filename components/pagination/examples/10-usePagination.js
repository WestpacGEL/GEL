import { GEL, jsx } from '@westpac/core';
import { usePagination } from '@westpac/pagination';
import { Button } from '@westpac/button';
import { ArrowLeftIcon, ArrowRightIcon } from '@westpac/icon';

function Example({ brand }) {
	const content = ['Page One', 'Page Two', 'Page Three'];
	const paginate = usePagination({ pages: content, infinite: true });

	return (
		<GEL brand={brand}>
			<h2>usePagination</h2>
			<div css={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
				<Button look="link" size="xlarge" iconAfter={ArrowLeftIcon} onClick={paginate.previous} />
				<p role="status">{content[paginate.current]}</p>
				<Button look="link" size="xlarge" iconAfter={ArrowRightIcon} onClick={paginate.next} />
			</div>
		</GEL>
	);
}

export default Example;
