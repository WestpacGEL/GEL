/** @jsx jsx */

import { jsx } from '@emotion/core';

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
		<blockquote
			{...attributes}
			css={{
				borderLeft: '4px solid #eee',
				color: '#666',
				fontStyle: 'italic',
				margin: 0,
				marginBottom: '1em',
				paddingLeft: '1em',
			}}
		>
			{children}
		</blockquote>
	);
}
