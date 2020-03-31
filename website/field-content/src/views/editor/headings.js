/** @jsx jsx */

import { jsx } from '@emotion/core';

import { type as defaultType } from './blocks/paragraph';
import { ToolbarButton } from './toolbar-components';
import { HeadingIcon, ArrowDownIcon } from './toolbar-icons';
import { DropdownMenu } from './dialog';
import { BlockInsertMenuItem } from './block-disclosure-menu';
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

export const HeadingsMenu = ({ editor, editorState }) => {
	// let headingIsSelected = levels.map(l => l.value).includes(editorState?.focusBlock?.type); // TODO

	return (
		<DropdownMenu
			target={({ ref, isOpen, toggleOpen }) => (
				<ToolbarButton
					ref={ref}
					label="Headings"
					icon={
						<div css={{ display: 'flex' }}>
							<HeadingIcon />
							<ArrowDownIcon />
						</div>
					}
					isActive={isOpen}
					onClick={toggleOpen}
				/>
			)}
		>
			{levels.map(h => {
				return (
					<BlockInsertMenuItem
						key={h.type}
						text={h.label}
						onClick={() => {
							if (hasBlock(editorState, h.type)) {
								editor.setBlocks({ type: defaultType });
							} else {
								editor.setBlocks({ type: h.type });
							}
							editor.focus();
						}}
					/>
				);
			})}
		</DropdownMenu>
	);
};

let levels = [
	{ label: 'Heading 2', type: 'heading-2' },
	{ label: 'Heading 3', type: 'heading-3' },
	{ label: 'Heading 4', type: 'heading-4' },
];
