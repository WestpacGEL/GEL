/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { usePopoverPosition } from '@westpac/hooks';
import { useRef, useState, useEffect } from 'react';
import { Code } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const triggerRef = useRef();
	const popoverRef = useRef();
	const [position, setPosition] = useState({ placement: 'top', top: 0, left: 0 });

	useEffect(() => {
		setPosition(usePopoverPosition(triggerRef, popoverRef));
	},[]);

	return (
		<GEL brand={brand}>
			<Intopia ignore />

			<div ref={triggerRef}>
				<div ref={popoverRef}></div>
			</div>
			<Code>
				{JSON.stringify(position,null,'\t')}
			</Code>
		</GEL>
	);
}

export default Example;
