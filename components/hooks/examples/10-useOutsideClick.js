/** @jsx jsx */

import { useRef } from 'react';
import { GEL, jsx } from '@westpac/core';
import { useOutsideClick } from '@westpac/hooks';
import { Button } from '@westpac/button';
import { Code } from './_utils';

function Example({ brand }) {
	const ref = useRef();

	useOutsideClick({
		handler: () => alert('Clicked outside'),
		refs: [ref],
		listenWhen: true,
	});

	return (
		<GEL brand={brand}>
			<Code>
				{`useOutsideClick({ 
	handler: () => alert('Clicked outside'), 
	refs: [ref], 
	listenWhen: true 
})`}
			</Code>
			<br />
			<div css={{ display: 'inline-block' }} ref={ref}>
				<Button>Click outside me</Button>
			</div>
		</GEL>
	);
}

export default Example;
