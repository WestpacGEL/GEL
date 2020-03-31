/** @jsx jsx */

import { jsx } from '@emotion/core';
import isHotkey from 'is-hotkey';

import { type as defaultType } from './blocks/paragraph';
import { ToolbarButton } from './toolbar-components';
import { HeadingIcon, ArrowDownIcon } from './toolbar-icons';
import { DropdownMenu } from './dialog';
import { BlockInsertMenuItem } from './block-disclosure-menu';
import { hasBlock } from './utils';

export function Heading({ level, attributes, children }) {
	let Tag = `h${level}`;
	return <Tag {...attributes}>{children}</Tag>;
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

			// Insert block with hot key -- type e.g. 'heading-2'
			let level = type.slice(-1);
			if (isHotkey(`mod+opt+${level}`, event)) {
				// Prevent the default characters from being inserted.
				event.preventDefault();
				// Toggle the heading block
				toggleHeading({ editor, editorState: editor.value, type });
				return;
			}

			next();
		},
	},
];

export const HeadingsMenu = ({ editor, editorState }) => {
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
				let Tag = `h${h.level}`;
				return (
					<BlockInsertMenuItem
						key={h.type}
						kbd={keyComboText(h.level)}
						isActive={editorState?.focusBlock?.type === h.type}
						text={<Tag css={{ margin: 0 }}>{h.label}</Tag>}
						onClick={() => {
							toggleHeading({ editor, editorState, type: h.type });
						}}
					/>
				);
			})}
		</DropdownMenu>
	);
};

let levels = [
	{ label: 'Heading 2', type: 'heading-2', level: 2 },
	{ label: 'Heading 3', type: 'heading-3', level: 3 },
	{ label: 'Heading 4', type: 'heading-4', level: 4 },
];

// Utils
// ------------------------------

const IS_MAC =
	typeof window != 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

function keyComboText(key) {
	if (IS_MAC) {
		return `⌘⌥${key}`;
	}

	return `Ctrl+Opt+${key}`;
}

function toggleHeading({ editor, editorState, type }) {
	if (hasBlock(editorState, type)) {
		editor.setBlocks({ type: defaultType });
	} else {
		editor.setBlocks({ type });
	}
	editor.focus();
}
