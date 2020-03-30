/** @jsx jsx */

import { jsx } from '@emotion/core';
import { useState, useRef, useCallback, useLayoutEffect, Fragment } from 'react';

import { PlusIcon, ArrowUpIcon, ArrowDownIcon } from '@arch-ui/icons';

import { type as defaultBlockType } from './blocks/paragraph';
import {
	BlockDisclosureMenu,
	BlockDisclosureMenuButton,
	BlockInsertMenu,
} from './block-disclosure-menu';

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

const calculateOffset = el => {
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
	let [isOpen, setIsOpen] = useState(false);
	let focusBlock = editorState.focusBlock;
	let iconRef = useRef(null);
	let menuRef = useRef(null);

	let layout = useCallback(() => {
		let iconEle = iconRef.current;
		let menuEle = menuRef.current;
		const elm = getSelectedElement();
		if (focusBlock === null) {
			iconEle.style.top = `-9999px`;
			iconEle.style.left = `-9999px`;
			menuEle.style.top = `-9999px`;
			menuEle.style.left = `-9999px`;
			if (isOpen) {
				setIsOpen(false);
			}
			return;
		}

		if (focusBlock.text !== '' || focusBlock.type !== defaultBlockType) {
			menuEle.style.top = `-9999px`;
			menuEle.style.left = `-9999px`;
			if (isOpen) {
				setIsOpen(false);
			}
		}

		if (!blocks || !Object.keys(blocks).length) return;

		if (elm && editor && editor.el.contains(elm)) {
			const blockEl = isChildOf(editor.el, elm);
			const { offsetLeft, offsetTop } = calculateOffset(blockEl);
			// minor offset-adjustments are made within the styled-components
			iconEle.style.top = `${offsetTop}px`;
			iconEle.style.left = `${offsetLeft}px`;
			menuEle.style.top = `${offsetTop}px`;
			menuEle.style.left = `${offsetLeft}px`;
		} else {
			if (isOpen) {
				setIsOpen(false);
			}
		}
	}, [focusBlock, iconRef.current, menuRef.current, isOpen]);
	useLayoutEffect(layout);

	const ItemActions =
		focusBlock && blocks[focusBlock.type] && blocks[focusBlock.type].Actions
			? blocks[focusBlock.type].Actions
			: () => null;

	const InsertBlock = ({ node }) => {
		if (!node || !editorHasFocus) return null;
		if (!Object.keys(blocks).filter(key => blocks[key].Sidebar).length) return null;
		if (node.text !== '') return null;
		if (node.type !== defaultBlockType) return null;
		return (
			<BlockDisclosureMenuButton
				onClick={() => {
					setIsOpen(x => !x);
				}}
				title="Insert block"
			>
				<PlusIcon
					css={{
						transition: '50ms transform',
						transform: isOpen ? 'rotateZ(45deg)' : 'rotateZ(0deg)',
					}}
					title={isOpen ? 'Close' : 'Open'}
				/>
			</BlockDisclosureMenuButton>
		);
	};

	const MoveUp = ({ node }) => {
		if (!node || !editorHasFocus) return null;
		const index = editorState.document.nodes.findIndex(o => node.key === o.key);
		if (index === 0) return null;
		return (
			<BlockDisclosureMenuButton
				onClick={() => {
					const index = editorState.document.nodes.findIndex(o => node.key === o.key);
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
		const index = editorState.document.nodes.findIndex(o => node.key === o.key);
		if (index === editorState.document.nodes.size - 1) return null;
		return (
			<BlockDisclosureMenuButton
				onClick={() => {
					const index = editorState.document.nodes.findIndex(o => node.key === o.key);
					editor.moveNodeByKey(node.key, editorState.document.key, index + 1);
				}}
				title="Move Down"
			>
				<ArrowDownIcon title={'Move down'} />
			</BlockDisclosureMenuButton>
		);
	};

	return (
		<Fragment>
			{/* This is the widget displayed to the left of the block, when focused */}
			<BlockDisclosureMenu ref={iconRef}>
				<InsertBlock node={focusBlock} editor={editor} />
				<ItemActions node={focusBlock} editor={editor} />
				<MoveUp node={focusBlock} editor={editor} />
				<MoveDown node={focusBlock} editor={editor} />
			</BlockDisclosureMenu>

			{/* This is the dropdown menu shown when a user clicks `InsertBlock` */}
			<BlockInsertMenu isOpen={editorHasFocus && isOpen} ref={menuRef}>
				{Object.keys(blocks).map(key => {
					let { Sidebar } = blocks[key];

					if (!blocks[key].withChrome || Sidebar === undefined) {
						return null;
					}

					return <Sidebar key={key} editor={editor} blocks={blocks} />;
				})}
			</BlockInsertMenu>
		</Fragment>
	);
};

export default AddBlock;
