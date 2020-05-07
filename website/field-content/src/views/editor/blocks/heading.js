import * as React from 'react';
import isHotkey from 'is-hotkey';
import { Heading as WestpacHeading } from '@westpac/heading';

import { type as defaultType } from './paragraph';

export let type = 'heading';
export let sizes = [2, 3, 4, 5, 6, 7, 8, 9];

export function Node({ attributes, children, node }) {
	let size = node.data.get('size');
	let tag = `h${Math.min(size, 6)}`;

	return (
		<WestpacHeading tag={tag} size={size} {...attributes}>
			{children}
		</WestpacHeading>
	);
}

export let getPlugins = () => sizes.map((size) => headingPlugin(size));

// Utils
// ------------------------------

// wrap with heading type or unwrap to default "paragraph"
export function toggleHeadingBlock({ editor, size }) {
	if (hasBlock(editor, type, size)) {
		editor.setBlocks({ type: defaultType });
	} else {
		editor.setBlocks({ type, data: { size } });
	}
	editor.focus();
}

// a custom helper, that deviates from the './utils' variant with the `size` argument
function hasBlock(editor, type, size) {
	return editor.value.blocks.some((node) => {
		return node.type === type && node.data.get('size') === size;
	});
}

function headingPlugin(size) {
	return {
		onKeyDown(event, editor, next) {
			// make it so when you press enter after typing a heading,
			// the block type will change to a paragraph
			if (event.keyCode === 13 && editor.value.blocks.every((block) => block.type === type)) {
				editor.splitBlock().setBlocks(defaultType);
				return;
			}

			// Insert block with hot key
			if (isHotkey(`mod+opt+${size}`, event)) {
				// Prevent the default characters from being inserted.
				event.preventDefault();
				toggleHeadingBlock({ editor, size });
				return;
			}

			next();
		},
	};
}
