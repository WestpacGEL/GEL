/** @jsx jsx */

import { jsx } from '@emotion/core';
import { Body } from '@westpac/body';

import { ToolbarButton } from '../toolbar-components';
import { BlockQuoteIcon } from '../toolbar-icons';
import { hasAncestorBlock } from '../utils';

export let type = 'blockquote';

export function ToolbarElement({ editor, editorState }) {
	let hasBlockquote = hasAncestorBlock(editorState, type);

	return (
		<ToolbarButton
			isActive={hasBlockquote}
			icon={<BlockQuoteIcon />}
			label="Blockquote"
			onClick={() => {
				if (hasBlockquote) {
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
		<Body>
			<blockquote {...attributes}>{children}</blockquote>
		</Body>
	);
}
