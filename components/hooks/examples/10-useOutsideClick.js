/** @jsx jsx */

import { useRef } from 'react';
import { GEL, jsx } from '@westpac/core';
import { useOutsideClick } from '@westpac/hooks';
import { Button } from '@westpac/button';
import { Code } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const ref = useRef();

	useOutsideClick(ref, () => alert('Clicked outside'));

	return (
		<GEL brand={brand}>
			<Intopia ignore />

			<Code>{`useOutsideClick(ref, () => alert(Clicked outside))`}</Code>
			<br />
			<div css={{ display: 'inline-block' }} ref={ref}>
				<Button>Click outside me</Button>
			</div>
		</GEL>
	);
}

export default Example;
