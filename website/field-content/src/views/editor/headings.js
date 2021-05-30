/** @jsx jsx */

import { Heading as WestpacHeading } from '@westpac/heading';
import { jsx } from '@emotion/react';
import isHotkey from 'is-hotkey';

import { Node, sizes, toggleHeadingBlock, type } from './blocks/heading';
import { BlockInsertMenuItem } from './block-disclosure-menu';
import { HeadingIcon, ArrowDownIcon } from './toolbar-icons';
import { type as defaultType } from './blocks/paragraph';
import { ToolbarButton } from './toolbar-components';
import { DropdownMenu } from './dialog';
import { hasBlock } from './utils';

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
			{sizes.map((size) => {
				let isActive =
					editorState?.focusBlock?.type === type &&
					editorState?.focusBlock?.data.get('size') === size;

				let fontSize = `${0.75 + (1 - size / 10)}rem`; // create an approximate scale to improve affordance

				return (
					<BlockInsertMenuItem
						key={size}
						kbd={keyComboText(size)}
						isActive={isActive}
						text={<strong style={{ fontSize, lineHeight: 1 }}>Heading {size}</strong>}
						onClick={() => {
							toggleHeadingBlock({ editor, size });
						}}
					/>
				);
			})}
		</DropdownMenu>
	);
};

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
