/** @jsx jsx */

import { Fragment, forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import { gridSize } from '@arch-ui/theme';
import { Popper } from 'react-popper';
import { jsx } from '@emotion/react';

import { CrossIcon, ExternalIcon, LinkIcon, TickIcon } from '../toolbar-icons';
import { ToolbarButton } from '../toolbar-components';
import { getSelectionReference } from '../utils';
import { useKeyPress } from '../hooks';
import { Dialog } from '../dialog';

export let type = 'link';

// The anchor and dialog to EDIT a link
// ----------------------------------------

export function Node({ node, attributes, children, isSelected, editor }) {
	let { data } = node;
	const href = data.get('href');
	let [anchorRef, setAnchorRef] = useState(null);
	let [inputValue, setInputValue] = useState(href);

	// this is terrible, but probably necessary because if we just do
	// `editor.setNodeByKey` in the input `onChange` and let that change
	// propagate, the cursor position breaks
	useEffect(() => {
		setInputValue(href);
	}, [href]);

	return (
		<Fragment>
			<a {...attributes} ref={setAnchorRef} href={href}>
				{children}
			</a>
			{isSelected && (
				<Popper
					placement="bottom"
					modifiers={{
						offset: { enabled: true, offset: gridSize },
					}}
					referenceElement={anchorRef}
				>
					{({ style, ref, placement }) => {
						return (
							<Dialog portal style={style} ref={ref} data-placement={placement}>
								<div css={wrapperStyles}>
									<Input
										value={inputValue}
										onClick={(e) => {
											// we want to stop stopPropagation here so that focussing works
											e.stopPropagation();
										}}
										onChange={(event) => {
											setInputValue(event.target.value);
											editor.setNodeByKey(node.key, {
												data: data.set('href', event.target.value),
											});
										}}
									/>
									<ToolbarButton
										as="a"
										css={{ marginLeft: gridSize }}
										href={href}
										icon={<ExternalIcon />}
										label="Open"
										rel="noopener"
										target="_blank"
									/>
									<ToolbarButton
										label="Unlink"
										icon={<CrossIcon />}
										onClick={() => {
											editor.unwrapInline(type);
										}}
									/>
								</div>
							</Dialog>
						);
					}}
				</Popper>
			)}
		</Fragment>
	);
}

// The button and dialog to CREATE a link
// ----------------------------------------

// It'd be nice if we could wrap the selected text in a span with a bg-color to
// fake the selection when the input is focused, you sort of lose your place
// with it there.

export function ToolbarElement({ editor, editorState }) {
	let [dialogVisible, setDialogVisible] = useState(false);
	let [linkRange, setLinkRange] = useState(null);
	let [inputValue, setInputValue] = useState('');
	let inputRef = useRef();
	let hasLinks = editorState.inlines.some((inline) => inline.type === type);

	// focus the input when the dialog opens
	useEffect(() => {
		if (dialogVisible) {
			// popper freaks out if you do this synchronously. i think its fighting
			// with the browser trying to bring the focused element into view...
			setTimeout(() => {
				inputRef.current.focus();
			});
		}
	}, [dialogVisible]);

	// let users bail on `esc` press
	useKeyPress({
		targetKey: 'Escape',
		downHandler: () => {
			setLinkRange(null);
			setDialogVisible(false);
			setInputValue('');
		},
		listenWhen: dialogVisible,
	});

	return (
		<Fragment>
			<ToolbarButton
				isActive={hasLinks}
				label={hasLinks ? 'Remove Link' : 'Link'}
				icon={<LinkIcon />}
				onClick={() => {
					if (hasLinks) {
						editor.unwrapInline(type);
					} else {
						setDialogVisible(true);
						setLinkRange(editorState.selection);
					}
				}}
			/>
			<Popper
				placement="bottom"
				modifiers={{
					offset: { enabled: true, offset: gridSize },
				}}
				referenceElement={
					// the reason we do this rather than having the selection reference be
					// constant is because the selection reference has some internal state
					// and it shouldn't persist between different editor references
					useMemo(getSelectionReference, [])
				}
			>
				{({ style, ref }) => {
					if (!dialogVisible) {
						return null;
					}

					return (
						<Dialog portal style={style} ref={ref}>
							<form
								onSubmit={(e) => {
									e.stopPropagation();
									e.preventDefault();

									editor.wrapInlineAtRange(linkRange, {
										type: type,
										data: { href: inputValue },
									});

									editor.deselect();
									setDialogVisible(false);
									setInputValue('');
								}}
								css={wrapperStyles}
							>
								<Input
									ref={inputRef}
									value={inputValue}
									onChange={(e) => {
										setInputValue(e.target.value);
									}}
								/>
								<ToolbarButton label="Confirm" icon={<TickIcon />} type="submit" />
								<ToolbarButton
									label="Cancel"
									icon={<CrossIcon />}
									onClick={() => {
										setLinkRange(null);
										setDialogVisible(false);
										setInputValue('');
									}}
								/>
							</form>
						</Dialog>
					);
				}}
			</Popper>
		</Fragment>
	);
}

// Styled Components
// ------------------------------

const wrapperStyles = {
	display: 'flex',
	padding: gridSize,
};

const Input = forwardRef((props, ref) => (
	<input
		ref={ref}
		placeholder="http://some.url"
		onClick={(e) => {
			e.stopPropagation(); // stop propagation here so that focus works
		}}
		css={{
			background: 0,
			border: 0,
			color: 'inherit',
			fontSize: '0.9rem',
			paddingLeft: gridSize,
			outline: 0,
			width: 200,
		}}
		{...props}
	/>
));
