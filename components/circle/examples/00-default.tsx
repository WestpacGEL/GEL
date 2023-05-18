import { GEL } from '@westpac/core';
import { Circle } from '@westpac/circle';

function Example({ brand }: { brand: object | ((...args: unknown[]) => unknown) }) {
	return (
		<GEL brand={brand}>
			<Circle>
				<span>GK</span>
			</Circle>
		</GEL>
	);
}

export default Example;
