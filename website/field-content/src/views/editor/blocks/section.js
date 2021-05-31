/** @jsx jsx */

import { jsx } from '@emotion/react';

import { Separator } from '../../../../../src/components/separator';
import { ToolbarButton } from '../toolbar-components';
import { hasAncestorBlock } from '../utils';
import { CodeIcon } from '../toolbar-icons';

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
