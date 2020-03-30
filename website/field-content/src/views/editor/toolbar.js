/** @jsx jsx */

import { jsx } from '@emotion/core';
import { Fragment, useRef, useState } from 'react';

import { colors, gridSize } from '@arch-ui/theme';

import { Dialog } from './dialog';
import { marks, markTypes } from './marks';
import { ToolbarButton, ToolbarDivider } from './toolbar-components';
import { ClearFormattingIcon, PlusIcon, ArrowDownIcon } from './toolbar-icons';
import { useClickOutside } from './hooks/useClickOutside';
import { useKeyPress } from './hooks';

// NOTE: reduce is used below to allow blocks to replace the toolbar by exposing
// its own `Toolbar`, this was the case for the `link` block.

export default function Toolbar({ blocks, editor, editorHasFocus, editorState }) {
	return (
		<div
			css={{
				backgroundColor: 'white',
				boxShadow: '0px 2px 0px rgba(23,43,77,0.1)',
				color: colors.N90,
				display: 'flex',
				marginBottom: gridSize * 2,
				padding: `${gridSize * 2}px 0`,
				position: 'sticky',
				top: 0,
				zIndex: 2,
			}}
		>
			{Object.keys(blocks)
				.map(x => blocks[x].withChrome && blocks[x].Toolbar)
				.filter(x => x)
				.reduce(
					(children, Toolbar) => {
						return (
							<Toolbar editor={editor} editorState={editorState}>
								{children}
							</Toolbar>
						);
					},
					<Fragment>
						{/* Block elements, that are injected */}
						{Object.keys(blocks).map(type => {
							let ToolbarElement = blocks[type].ToolbarElement;

							// the `withChrome` flag identifies blocks that represent "dynamic-components"
							if (!blocks[type].withChrome || ToolbarElement === undefined) {
								return null;
							}

							return <ToolbarElement key={type} editor={editor} editorState={editorState} />;
						})}

						<ToolbarDivider />

						{/* Inline "marks", that wrap text */}
						{Object.keys(marks).map(name => {
							let Icon = marks[name].icon;
							return (
								<ToolbarButton
									label={marks[name].label}
									icon={<Icon />}
									isActive={editorState.activeMarks.some(mark => mark.type === name)}
									onClick={() => {
										editor.toggleMark(name);
										editor.focus();
									}}
									key={name}
								/>
							);
						})}

						<ToolbarDivider />

						<ToolbarButton
							label="Clear formatting"
							icon={<ClearFormattingIcon />}
							onClick={() => {
								markTypes.forEach(mark => {
									editor.removeMark(mark);
								});
								editor.focus();
							}}
						/>

						<ToolbarDivider />

						<InsertMenu
							blocks={blocks}
							editor={editor}
							editorHasFocus={editorHasFocus}
							editorState={editorState}
						/>
					</Fragment>
				)}
		</div>
	);
}

// Insert Menu
// ------------------------------

/* This is the dropdown menu shown when a user clicks `InsertBlock` */
const InsertMenu = ({ blocks, editor, editorState }) => {
	let targetRef = useRef();
	let menuRef = useRef();
	let [isOpen, setIsOpen] = useState(false);

	// close the menu on `Esc` press, and click outside either the target or menu
	useKeyPress({
		downHandler: () => {
			setIsOpen(false);
		},
		targetKey: 'Escape',
		listenWhen: isOpen,
	});
	useClickOutside({
		handler: () => {
			setIsOpen(false);
		},
		refs: [targetRef, menuRef],
		listenWhen: isOpen,
	});

	return (
		<div css={{ position: 'relative' }}>
			<ToolbarButton
				isActive={isOpen}
				ref={targetRef}
				label="Insert"
				icon={
					<div css={{ display: 'flex' }}>
						<PlusIcon />
						<ArrowDownIcon />
					</div>
				}
				onClick={() => {
					setIsOpen(s => !s);
				}}
			/>
			<Dialog
				css={{
					display: isOpen ? 'block' : 'none',
					maxHeight: 400,
					paddingBottom: 4,
					paddingTop: 4,
					overflowY: 'auto',
					top: '100%',
					marginTop: gridSize,
				}}
				ref={menuRef}
				onClick={() => {
					setIsOpen(false);
				}}
			>
				{Object.keys(blocks).map(key => {
					let { Sidebar } = blocks[key];

					// only interested in "dynamic-components"
					if (!blocks[key].withChrome || Sidebar === undefined) {
						return null;
					}

					return <Sidebar key={key} editor={editor} blocks={blocks} />;
				})}
			</Dialog>
		</div>
	);
};
