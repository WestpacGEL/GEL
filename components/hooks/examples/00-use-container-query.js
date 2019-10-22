/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { useRef, useState } from 'react';
import { useContainerQuery } from '@westpac/hooks';

function Example({ brand }) {
	const textareaRef = useRef();
	const containerRef = useRef();
	const { width: containerWidth } = useContainerQuery(containerRef);
	const { height: textareaHeight, width: textareaWidth } = useContainerQuery(textareaRef);

	return (
		<GEL brand={brand}>
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
		</GEL>
	);
}

export default Example;
