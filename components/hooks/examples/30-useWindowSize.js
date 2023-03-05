import { GEL, jsx } from '@westpac/core';
import { useWindowSize } from '@westpac/hooks';

function Example({ brand }) {
	const { width, height } = useWindowSize();

	return (
		<GEL brand={brand}>
			<pre>
				Current window width x height = {width}px x {height}px
			</pre>
		</GEL>
	);
}

export default Example;
