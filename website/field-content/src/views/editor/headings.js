import * as React from 'react';

import { type as defaultType } from './blocks/paragraph';
import { ToolbarButton } from './toolbar-components';
import { HeadingIcon } from './toolbar-icons';
import { hasBlock } from './utils';

export function Heading({ level, attributes, children }) {
	if (level === 3) {
		return <h3 {...attributes}>{children}</h3>;
	}
	if (level === 4) {
		return <h4 {...attributes}>{children}</h4>;
	}
	return <h2 {...attributes}>{children}</h2>;
}

export let plugins = type => () => [
	{
		onKeyDown(event, editor, next) {
			// make it so when you press enter after typing a heading,
			// the block type will change to a paragraph
			if (event.keyCode === 13 && editor.value.blocks.every(block => block.type === type)) {
				editor.splitBlock().setBlocks(defaultType);
				return;
			}
			next();
		},
	},
];

export const toolbarElement = type => ({ editor, editorState }) => {
	let icon = 'H2';
	let label = 'Heading 2';
	if (type === 'heading-3') {
		icon = 'H3';
		label = 'Heading 3';
	}
	if (type === 'heading-4') {
		icon = 'H4';
		label = 'Heading 4';
	}
	return (
		<ToolbarButton
			icon={<span aria-hidden>{icon}</span>}
			label="Heading"
			isActive={hasBlock(editorState, type)}
			onClick={() => {
				if (hasBlock(editorState, type)) {
					editor.setBlocks({ type: defaultType });
				} else {
					editor.setBlocks({ type: type });
				}
				editor.focus();
			}}
		/>
	);
};
