/** @jsx jsx */

import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { jsx } from '@emotion/core';

import { colors, gridSize } from '@arch-ui/theme';

// Constants & Helpers
// ------------------------------

export const BLOCKBAR_BUTTON_SIZE = 32;
export const BLOCKBAR_BUTTON_GUTTER = 4;

const cancelEvent = event => {
	event.stopPropagation();
	event.preventDefault();
};

const Portal = ({ children }) => {
	if (typeof window === 'undefined') {
		return null;
	}

	return createPortal(children, document.body);
};

// Disclosure Menu
// ------------------------------

/*
	The disclosure menu holds buttons for adding, removing, and moving a block.
	It sits besides each block, and is invoked when the block has focus.
*/

// Menu Wrapper

export const BlockDisclosureMenu = forwardRef((props, ref) => (
	<Portal>
		<div
			css={{
				alignItems: 'center',
				backgroundColor: 'white',
				borderRadius: 3,
				boxShadow: `rgba(9, 30, 66, 0.31) 0px 0px 1px, rgba(9, 30, 66, 0.25) 0px 4px 8px -2px`,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				left: -99999,
				marginLeft: -gridSize * 2, // we want to "pull" the widget away from the content area, over the page chrome
				padding: BLOCKBAR_BUTTON_GUTTER,
				position: 'absolute',
				top: -99999,
				transform: 'translateX(-100%)',
				zIndex: 2,

				// bail when no children
				':empty': {
					display: 'none',
				},
			}}
			ref={ref}
			{...props}
		/>
	</Portal>
));

// Button

const hoverVariants = {
	neutral: {
		background: colors.N05,
		color: colors.N60,
	},
	danger: {
		background: colors.R.L90,
		color: colors.R.base,
	},
	primary: {
		background: colors.B.L90,
		color: colors.B.base,
	},
};

export const BlockDisclosureMenuButton = ({
	children,
	onClick,
	title,
	variant = 'neutral',
	...props
}) => {
	let hoverStyles = hoverVariants[variant];
	return (
		<button
			type="button"
			css={{
				alignItems: 'center',
				background: 0,
				border: 0,
				borderRadius: 2,
				color: colors.N40,
				cursor: 'pointer',
				display: 'flex',
				height: BLOCKBAR_BUTTON_SIZE,
				justifyContent: 'center',
				padding: 0,
				width: BLOCKBAR_BUTTON_SIZE,

				':hover': hoverStyles,
			}}
			// Slate has mouse up/down event that interfere with these buttons.
			// We catch the mousedown early and stop propagation
			onMouseDown={cancelEvent}
			onMouseUp={cancelEvent}
			onClick={onClick}
			title={title}
			{...props}
		>
			{children}
		</button>
	);
};

// Insert Menu
// ------------------------------

/*
	The insert menu is invoked by the "insert" button (plus icon) in the
	disclosure menu. We're using `display` rather than conditional rendering
	because of the implementation that has ref requirements.
*/

export const BlockInsertMenu = forwardRef(({ isOpen, ...props }, ref) => (
	<Portal>
		<div
			css={{
				background: 'white',
				borderRadius: 3,
				boxShadow: `rgba(9, 30, 66, 0.31) 0px 0px 1px, rgba(9, 30, 66, 0.25) 0px 4px 8px -2px`,
				display: isOpen ? 'block' : 'none',
				left: -9999,
				marginLeft: -12, // align with the block disclosure line
				maxHeight: 400,
				paddingBottom: 4,
				paddingTop: 4,
				overflowY: 'auto',
				position: 'absolute',
				top: -99999,
				zIndex: 2,
			}}
			ref={ref}
			{...props}
		/>
	</Portal>
));

export const BlockInsertMenuItem = ({ icon, text, insertBlock }) => (
	<button
		css={{
			alignItems: 'center',
			background: 'none',
			border: 'none',
			color: colors.N60,
			cursor: 'pointer',
			display: 'flex',
			fontWeight: 500,
			margin: 0,
			padding: `${gridSize}px ${gridSize * 2}px`,
			width: '100%',

			// fix some weirdness with content-field "reset", by increasing specificity to avoid `!important`
			'button&': {
				fontSize: '0.9rem',
			},

			':focus,:hover': {
				background: colors.N05,
				color: colors.N80,
			},
		}}
		type="button"
		onClick={insertBlock}
	>
		<span css={{ color: colors.N40 }}>{icon}</span>
		<span css={{ paddingLeft: gridSize * 2 }}>{text}</span>
	</button>
);
