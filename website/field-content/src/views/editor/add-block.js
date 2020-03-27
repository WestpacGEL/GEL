/** @jsx jsx */

import { jsx } from '@emotion/core';
import { useState, useRef, useCallback, useLayoutEffect, Fragment } from 'react';

import { PlusIcon, ArrowUpIcon, ArrowDownIcon } from '@arch-ui/icons';
import { gridSize } from '@arch-ui/theme';

import { type as defaultBlockType } from './blocks/paragraph';
import {
	BLOCKBAR_BUTTON_GUTTER,
	BLOCKBAR_BUTTON_SIZE,
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

const calculateOffset = (container, elm) =>
	elm.getBoundingClientRect().top - container.getBoundingClientRect().top;

let AddBlock = ({ editorState, editor, blocks }) => {
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
			const constBlockEl = isChildOf(editor.el, elm);
			iconEle.style.top = `${calculateOffset(editor.el, constBlockEl)}px`;
			iconEle.style.left = `-${BLOCKBAR_BUTTON_SIZE + BLOCKBAR_BUTTON_GUTTER * 2 + gridSize * 2}px`; // we want to "pull" the widget away from the content area, over the page chrome
			menuEle.style.top = `${calculateOffset(editor.el, constBlockEl)}px`;
			menuEle.style.left = 0;
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
		if (!node) return null;
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
		if (!node) return null;
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
		if (!node) return null;
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
				<InsertBlock node={focusBlock} />
				<ItemActions node={focusBlock} />
				<MoveUp node={focusBlock} />
				<MoveDown node={focusBlock} />
			</BlockDisclosureMenu>

			{/* This is the dropdown menu shown when a user clicks `InsertBlock` */}
			<BlockInsertMenu isOpen={isOpen} ref={menuRef}>
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
