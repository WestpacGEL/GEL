/** @jsx jsx */

import { jsx } from '@emotion/react';

import { Section } from '../../../../../src/components/section';
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
		<Section
			css={{
				borderRight: '2px solid #2684FF',
				marginBottom: '6px',
			}}
			{...attributes}
		>
			{children}
		</Section>
	);
}
