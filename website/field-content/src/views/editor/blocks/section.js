/** @jsx jsx */

import { jsx } from '@emotion/core';

import { ToolbarButton } from '../toolbar-components';
import { CodeIcon } from '../toolbar-icons';
import { hasAncestorBlock } from '../utils';
import { Separator } from '../../../../../src/components/separator';

export let type = 'section';

export function ToolbarElement({ editor, editorState }) {
	let hasSection = hasAncestorBlock(editorState, type);

	return (
		<ToolbarButton
			isActive={hasSection}
			icon={<CodeIcon />}
			label="Section"
			onClick={() => {
				if (hasSection) {
					editor.unwrapBlock(type);
				} else {
					editor.wrapBlock(type);
				}
				editor.focus();
			}}
		/>
	);
}

export function Node({ attributes, children }) {
	return (
		<section css={{ borderRight: '2px solid #2684FF', paddingTop: '24px' }} {...attributes}>
			{children}
			<Separator />
		</section>
	);
}
