/** @jsx jsx */

import { colors, gridSize } from '@arch-ui/theme';
import { jsx } from '@emotion/react';
import { Fragment } from 'react';

import { ClearFormattingIcon, PlusIcon, ArrowDownIcon, MoreIcon } from './toolbar-icons';
import { ToolbarButton, ToolbarDivider } from './toolbar-components';
import { BlockInsertMenuItem } from './block-disclosure-menu';
import { marks, markTypes } from './marks';
import { DropdownMenu } from './dialog';

export default function Toolbar({ blocks, editor, editorHasFocus, editorState }) {
	let primaryMarks = Object.keys(marks).filter((key) => marks[key].level === 'primary');

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
			{/* Block elements, that are injected */}
			{Object.keys(blocks).map((type) => {
				let ToolbarElement = blocks[type].ToolbarElement;

				if (!blocks[type].withChrome || ToolbarElement === undefined) {
					return null;
				}

				return <ToolbarElement key={type} editor={editor} editorState={editorState} />;
			})}

			<ToolbarDivider />

			{/* Inline "marks", that wrap text */}
			{primaryMarks.map((name) => {
				let Icon = marks[name].icon;
				let label = (
					<Fragment>
						{marks[name].label}{' '}
						<span
							css={{
								backgroundColor: colors.N70,
								borderRadius: 2,
								paddingLeft: 2,
								paddingRight: 2,
							}}
						>
							{marks[name].keyboard()}
						</span>
					</Fragment>
				);

				return (
					<ToolbarButton
						label={label}
						icon={<Icon />}
						isDisabled={editorState?.focusBlock?.type === 'dynamic-components'}
						isActive={editorState.activeMarks.some((mark) => mark.type === name)}
						onClick={() => {
							editor.toggleMark(name);
							editor.focus();
						}}
						key={name}
					/>
				);
			})}

			<FormattingMenu editor={editor} editorState={editorState} />

			<ToolbarDivider />

			<ToolbarButton
				label="Clear formatting"
				icon={<ClearFormattingIcon />}
				isDisabled={editorState?.selection?.isCollapsed}
				onClick={() => {
					markTypes.forEach((mark) => {
						editor.removeMark(mark);
					});
					editor.focus();
				}}
			/>

			<InsertMenu
				blocks={blocks}
				editor={editor}
				editorHasFocus={editorHasFocus}
				editorState={editorState}
			/>
		</div>
	);
}

// Insert Menu
// ------------------------------

/* This is the dropdown menu shown when a user clicks `InsertBlock` */
const InsertMenu = ({ blocks, editor }) => {
	// bail if there aren't any "insertable" blocks
	if (!Object.keys(blocks).filter((key) => blocks[key].Sidebar).length) return null;

	return (
		<Fragment>
			<ToolbarDivider />
			<DropdownMenu
				target={({ ref, isOpen, toggleOpen }) => (
					<ToolbarButton
						ref={ref}
						label="Insert"
						icon={
							<div css={{ display: 'flex' }}>
								<PlusIcon />
								<ArrowDownIcon />
							</div>
						}
						isActive={isOpen}
						onClick={toggleOpen}
					/>
				)}
			>
				{Object.keys(blocks).map((key) => {
					let { Sidebar } = blocks[key];

					// only interested in "dynamic-components"
					if (!blocks[key].withChrome || Sidebar === undefined) {
						return null;
					}

					return <Sidebar key={key} editor={editor} blocks={blocks} />;
				})}
			</DropdownMenu>
		</Fragment>
	);
};

// Formatting Menu
// ------------------------------

/* This is the dropdown menu shown when there's "secondary" marks available */
const FormattingMenu = ({ editor, editorState }) => {
	let secondaryMarks = Object.keys(marks).filter((key) => marks[key].level === 'secondary');

	// bail if there aren't any marks
	if (!secondaryMarks.length) return null;

	return (
		<DropdownMenu
			target={({ ref, isOpen, toggleOpen }) => (
				<ToolbarButton
					ref={ref}
					label="More formatting"
					icon={<MoreIcon />}
					isDisabled={editorState?.focusBlock?.type === 'dynamic-components'}
					isActive={isOpen}
					onClick={toggleOpen}
				/>
			)}
		>
			{secondaryMarks.map((name) => {
				return (
					<BlockInsertMenuItem
						key={name}
						kbd={marks[name].keyboard()}
						text={marks[name].label}
						onClick={() => {
							editor.toggleMark(name);
							editor.focus();
						}}
					/>
				);
			})}
		</DropdownMenu>
	);
};
