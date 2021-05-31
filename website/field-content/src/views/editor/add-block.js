/** @jsx jsx */

import { jsx } from '@emotion/react';
import { useRef, useCallback, useLayoutEffect } from 'react';

import { ArrowUpIcon, ArrowDownIcon } from '@arch-ui/icons';

import { BlockDisclosureMenu, BlockDisclosureMenuButton } from './block-disclosure-menu';

const isChildOf = (parent, child) => {
	if (!child.parentElement) {
		return false;
	}
	if (child.parentElement === parent) {
		return child;
	} else {
		return isChildOf(parent, child.parentElement);
	}
};

const getSelectedElement = () => {
	if (document.selection) return document.selection.createRange().parentElement();
	else {
		var selection = window.getSelection();
		if (selection.rangeCount > 0) return selection.getRangeAt(0).startContainer.parentNode;
	}
};

const calculateOffset = (el) => {
	if (!el) {
		console.warn('No element passed to `calculateOffset`.');
		return { offsetLeft: 0, offsetTop: 0 };
	}

	let { left, top } = el.getBoundingClientRect();
	return {
		offsetLeft: left + window.pageXOffset,
		offsetTop: top + window.pageYOffset,
	};
};

let AddBlock = ({ blocks, editor, editorHasFocus, editorState }) => {
	let focusBlock = editorState.focusBlock;
	let iconRef = useRef(null);

	let layout = useCallback(() => {
		let iconEle = iconRef.current;
		if (!iconEle) {
			return;
		}

		const elm = getSelectedElement();

		if (focusBlock === null) {
			iconEle.style.top = `-9999px`;
			iconEle.style.left = `-9999px`;
			return;
		}

		if (!blocks || !Object.keys(blocks).length) return;

		if (elm && editor && editor.el.contains(elm)) {
			/**
			 * TO FIX
			 *
			 * Hack for now to fix the edit dialogue appearing at the top of a section instead of next to the nested dynamic block.
			 * Need to fix since the block editor items will receieve focus and a dialogue box next to them instead of staying on the "parent" dynamic block
			 *
			 */
			// const blockEl = isChildOf(editor.el, elm);
			const blockEl = elm;

			const { offsetLeft, offsetTop } = calculateOffset(blockEl);
			// minor offset-adjustments are made within the styled-components
			iconEle.style.top = `${offsetTop}px`;
			iconEle.style.left = `${offsetLeft}px`;
		}
	}, [focusBlock]);

	useLayoutEffect(layout);

	const ItemActions = blocks[focusBlock?.type]?.Actions;

	const MoveUp = ({ node }) => {
		if (!node || !editorHasFocus) return null;
		const index = editorState.document.nodes.findIndex((o) => node.key === o.key);
		if (index === 0) return null;
		return (
			<BlockDisclosureMenuButton
				onClick={() => {
					const index = editorState.document.nodes.findIndex((o) => node.key === o.key);
					editor.moveNodeByKey(node.key, editorState.document.key, index - 1);
				}}
				title={'Move Up'}
			>
				<ArrowUpIcon title={'Move up'} />
			</BlockDisclosureMenuButton>
		);
	};
	const MoveDown = ({ node }) => {
		if (!node || !editorHasFocus) return null;
		const index = editorState.document.nodes.findIndex((o) => node.key === o.key);
		if (index === editorState.document.nodes.size - 1) return null;
		return (
			<BlockDisclosureMenuButton
				onClick={() => {
					const index = editorState.document.nodes.findIndex((o) => node.key === o.key);
					editor.moveNodeByKey(node.key, editorState.document.key, index + 1);
				}}
				title="Move Down"
			>
				<ArrowDownIcon title={'Move down'} />
			</BlockDisclosureMenuButton>
		);
	};

	// move up/down only make sense for dynamic types (i think)
	if (!ItemActions) {
		return null;
	}

	/* This is the widget displayed to the left of the block, when focused */
	return (
		<BlockDisclosureMenu ref={iconRef}>
			<ItemActions node={focusBlock} editor={editor} />
			<MoveUp node={focusBlock} editor={editor} />
			<MoveDown node={focusBlock} editor={editor} />
		</BlockDisclosureMenu>
	);
};

export default AddBlock;
