/** @jsx jsx */

import { forwardRef, useRef, useState } from 'react';
import { gridSize } from '@arch-ui/theme';
import { createPortal } from 'react-dom';
import { jsx } from '@emotion/react';
import { GEL } from '@westpac/core';
import wbc from '@westpac/wbc';

import { useClickOutside, useKeyPress } from './hooks';

// Dialog
// ------------------------------

// A generic dialog solution for dropdown-menus, popovers etc. to afford
// consistent styles among the UI. Assumes placement styles are applied at
// runtime.

export const Dialog = forwardRef(({ portal = false, ...props }, ref) => {
	if (portal) {
		return (
			<Portal>
				<GEL brand={wbc}>
					<DialogElement ref={ref} {...props} />
				</GEL>
			</Portal>
		);
	}

	return <DialogElement ref={ref} {...props} />;
});

const Portal = ({ children }) => {
	if (typeof window === 'undefined') {
		return null;
	}

	return createPortal(children, document.body);
};

const DialogElement = forwardRef((props, ref) => (
	<div
		css={{
			alignItems: 'center',
			backgroundColor: 'white',
			borderRadius: 3,
			boxShadow: `rgba(9, 30, 66, 0.31) 0px 0px 1px, rgba(9, 30, 66, 0.25) 0px 4px 8px -2px`,
			position: 'absolute',
			zIndex: 2,
		}}
		ref={ref}
		{...props}
	/>
));

// Dropdown Menu
// ------------------------------

export const DropdownMenu = ({ children, target }) => {
	let targetRef = useRef();
	let menuRef = useRef();
	let [isOpen, setIsOpen] = useState(false);
	let toggleOpen = () => setIsOpen((s) => !s);

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
			{target({ ref: targetRef, isOpen, toggleOpen })}
			{isOpen && (
				<Dialog
					ref={menuRef}
					onClick={toggleOpen} // cheeky way to close the menu whenever an item is clicked
					css={{
						maxHeight: 360,
						paddingBottom: 4,
						paddingTop: 4,
						overflowY: 'auto',
						top: '100%',
						marginTop: gridSize,
					}}
				>
					{children}
				</Dialog>
			)}
		</div>
	);
};
