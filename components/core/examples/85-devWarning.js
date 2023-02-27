import { GEL, jsx, devWarning } from '@westpac/core';
import { Code } from './_utils';

function Example({ brand }) {
	devWarning(true, 'Warn consumer about a thing but ignore the warning in production!');

	return (
		<GEL brand={brand}>
			<Code>
				devWarning( true, 'Warn consumer about a thing but ignore the warning in production!' );
			</Code>
			=&gt;
			<Code>&gt; Warning: Warn consumer about a thing but ignore the warning in production!</Code>
		</GEL>
	);
}

export default Example;
