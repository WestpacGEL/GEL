import { GEL, jsx } from '@westpac/core';
import { usePopoverPosition } from '@westpac/hooks';
import { useRef, useState, useEffect } from 'react';
import { Code } from './_utils';

function Example({ brand }) {
	const triggerRef1 = useRef();
	const popoverRef1 = useRef();
	const [position1, setPosition1] = useState({ placement: 'top', top: 0, left: 0 });

	const triggerRef2 = useRef();
	const popoverRef2 = useRef();
	const [position2, setPosition2] = useState({ placement: 'top', top: 0, left: 0 });

	const triggerRef3 = useRef();
	const popoverRef3 = useRef();
	const [position3, setPosition3] = useState({ placement: 'top', top: 0, left: 0 });

	const triggerRef4 = useRef();
	const popoverRef4 = useRef();
	const [position4, setPosition4] = useState({ placement: 'top', top: 0, left: 0 });

	useEffect(() => {
		setPosition1(usePopoverPosition(triggerRef1, popoverRef1));
		setPosition2(usePopoverPosition(triggerRef2, popoverRef2));
		setPosition3(usePopoverPosition(triggerRef3, popoverRef3));
		setPosition4(usePopoverPosition(triggerRef4, popoverRef4));
	}, []);

	return (
		<GEL brand={brand}>
			<div
				ref={triggerRef1}
				css={{
					position: 'absolute',
					top: 0,
					left: '50%',
				}}
			>
				<div
					ref={popoverRef1}
					css={{
						height: '10px',
						width: '10px',
					}}
				></div>
			</div>
			<Code>
				triggerRef1:
				<br />
				&emsp;position: 'absolute',
				<br />
				&emsp;top: 0,
				<br />
				&emsp;left: 50%,
				<br />
				<br />
				popoverRef1:
				<br />
				&emsp;height: '10px',
				<br />
				&emsp;width: '10px',
				<br />
				<br />
				{JSON.stringify(position1, null, '\t')}
			</Code>

			<hr />

			<div
				ref={triggerRef2}
				css={{
					position: 'absolute',
					bottom: 0,
					left: '50%',
				}}
			>
				<div
					ref={popoverRef2}
					css={{
						height: '10px',
						width: '10px',
					}}
				></div>
			</div>
			<Code>
				triggerRef2:
				<br />
				&emsp;position: 'absolute',
				<br />
				&emsp;bottom: 0,
				<br />
				&emsp;left: 50%,
				<br />
				<br />
				popoverRef2:
				<br />
				&emsp;height: '10px',
				<br />
				&emsp;width: '10px',
				<br />
				<br />
				{JSON.stringify(position2, null, '\t')}
			</Code>

			<hr />

			<div
				ref={triggerRef3}
				css={{
					position: 'absolute',
					top: '50%',
					right: 0,
				}}
			>
				<div
					ref={popoverRef3}
					css={{
						height: '10px',
						width: '10px',
					}}
				></div>
			</div>
			<Code>
				triggerRef3:
				<br />
				&emsp;position: 'absolute',
				<br />
				&emsp;top: 50%,
				<br />
				&emsp;right: 0,
				<br />
				<br />
				popoverRef3:
				<br />
				&emsp;height: '10px',
				<br />
				&emsp;width: '10px',
				<br />
				<br />
				{JSON.stringify(position3, null, '\t')}
			</Code>

			<hr />

			<div
				ref={triggerRef4}
				css={{
					position: 'absolute',
					top: '50%',
					left: 0,
				}}
			>
				<div
					ref={popoverRef4}
					css={{
						height: '10px',
						width: '10px',
					}}
				></div>
			</div>
			<Code>
				triggerRef4:
				<br />
				&emsp;position: 'absolute',
				<br />
				&emsp;top: 50%,
				<br />
				&emsp;left: 0,
				<br />
				<br />
				popoverRef4:
				<br />
				&emsp;height: '10px',
				<br />
				&emsp;width: '10px',
				<br />
				<br />
				{JSON.stringify(position4, null, '\t')}
			</Code>
		</GEL>
	);
}

export default Example;
