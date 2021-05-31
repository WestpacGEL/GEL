/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@emotion/react';
import { colors, gridSize } from '@arch-ui/theme';

import { Dialog } from './dialog';

// Constants & Helpers
// ------------------------------

export const BLOCKBAR_BUTTON_SIZE = 32;
export const BLOCKBAR_BUTTON_GUTTER = 4;

const cancelEvent = (event) => {
	event.stopPropagation();
	event.preventDefault();
};

// Disclosure Menu
// ------------------------------

/*
	The disclosure menu holds buttons for adding, removing, and moving a block.
	It sits besides each block, and is invoked when the block has focus.
*/

// Menu Wrapper

export const BlockDisclosureMenu = forwardRef((props, ref) => (
	<Dialog
		portal
		css={{
			alignItems: 'center',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			marginLeft: -gridSize * 2, // we want to "pull" the widget away from the content area, over the page chrome
			padding: BLOCKBAR_BUTTON_GUTTER,
			transform: 'translateX(-100%)',

			// bail when no children
			':empty': {
				display: 'none',
			},
		}}
		ref={ref}
		{...props}
	/>
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
	<Dialog
		portal
		css={{
			display: isOpen ? 'block' : 'none',
			marginLeft: -12, // align with the block disclosure line
			maxHeight: 400,
			paddingBottom: 4,
			paddingTop: 4,
			overflowY: 'auto',

			// bail when no children
			':empty': {
				display: 'none',
			},
		}}
		ref={ref}
		{...props}
	/>
));

export const BlockInsertMenuItem = ({ kbd, icon, isActive, text, onClick }) => (
	<button
		data-state-active={isActive}
		css={{
			alignItems: 'center',
			background: 'none',
			border: 'none',
			color: colors.N70,
			cursor: 'pointer',
			display: 'flex',
			fontWeight: 500,
			margin: 0,
			padding: `${gridSize}px ${gridSize * 2}px`,
			textAlign: 'start',
			whiteSpace: 'nowrap',
			width: '100%',

			// fix some weirdness with content-field "reset", by increasing specificity to avoid `!important`
			'button&': {
				fontSize: '0.9rem',
			},

			':focus,:hover': {
				background: colors.N05,
				color: colors.N80,
			},

			'[data-state-active="true"]&': {
				background: colors.N60,
				color: 'white',
			},
		}}
		type="button"
		onClick={onClick}
	>
		{icon && <span css={{ paddingRight: gridSize * 2 }}>{icon}</span>}
		<span css={{ flex: 1 }}>{text}</span>
		{kbd && (
			<span
				css={{
					backgroundColor: colors.N10,
					borderRadius: 3,
					color: colors.N50,
					fontSize: '0.8em',
					fontWeight: 500,
					marginLeft: gridSize * 2,
					padding: '2px 4px',
				}}
			>
				{kbd}
			</span>
		)}
	</button>
);
