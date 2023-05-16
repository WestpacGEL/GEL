import { GEL } from '@westpac/core';
import { _COMPONENT_NAME_ } from '@westpac/_COMPONENT_KEY_';

function Example({ brand }: { brand: object | ((...args: unknown[]) => unknown) }) {
	return (
		<GEL brand={brand}>
			<_COMPONENT_NAME_ />
		</GEL>
	);
}

export default Example;
