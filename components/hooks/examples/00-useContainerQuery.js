/** @jsx jsx */

import { jsx } from '@westpac/core';
import { useContainerQuery } from '@westpac/hooks';
import { useRef } from 'react';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

function Example({ context }) {
	const textareaRef = useRef();
	const containerRef = useRef();
	const { width: containerWidth } = useContainerQuery(containerRef);
	const { height: textareaHeight, width: textareaWidth } = useContainerQuery(textareaRef);

	return (
		<Playground context={context} brand={brand}>
			<Intopia ignore />

			<div ref={containerRef}>
				<pre>Container width = {containerWidth}px</pre>
				<hr />
				<pre>
					{textareaWidth}px &times; {textareaHeight}px
				</pre>
				<textarea
					defaultValue="Resize me..."
					ref={textareaRef}
					cols={13}
					rows={7}
					style={{
						boxSizing: 'border-box',
						maxWidth: '100%',
						minHeight: 100,
						minWidth: 100,
					}}
				/>
			</div>
		</Playground>
	);
}

export default Example;
