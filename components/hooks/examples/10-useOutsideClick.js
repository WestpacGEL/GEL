/** @jsx jsx */

import { useRef } from 'react';
import { jsx } from '@westpac/core';
import { useOutsideClick } from '@westpac/hooks';
import { Button } from '@westpac/button';
import { Code } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	const ref = useRef();

	useOutsideClick(ref, () => alert('Clicked outside'));

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia ignore />

			<Code>{`useOutsideClick(ref, () => alert(Clicked outside))`}</Code>
			<br />
			<div css={{ display: 'inline-block' }} ref={ref}>
				<Button>Click outside me</Button>
			</div>
		</Playground>
	);
};
