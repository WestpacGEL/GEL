import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon } from '@westpac/icon';
import { useEffect, useRef, forwardRef } from 'react';
import { FocusOn } from 'react-focus-on';

import { useSidebarContext } from '../providers/sidebar';
import { BrandDropdown } from '../brand-dropdown';
import { Navigation } from '.';

export const Sidebar = ({ items }) => {
	const { COLORS } = useBrand();
	const { isOpen, close } = useSidebarContext();
	const mq = useMediaQuery();
	const closeBtnRef = useRef();

	// Focus closeBtn when sidebar has opened
	const handleTransitionEnd = (e) => {
		if (e.propertyName === 'visibility') {
			if (isOpen) {
				closeBtnRef.current.focus();
			}
		}
	};

	const handleClose = () => {
		close();
	};

	// bind key events
	useEffect(() => {
		// on escape close modal
		const keyHandler = (event) => {
			if (isOpen && event.keyCode === 27) handleClose();
		};

		window.addEventListener('keydown', keyHandler);
		return () => {
			window.removeEventListener('keydown', keyHandler);
		};
	});

	return (
		<FocusOn enabled={isOpen} autoFocus={false}>
			<div
				css={mq({
					boxSizing: 'border-box',
					position: 'fixed',
					top: 0,
					bottom: 0,
					zIndex: 11,
					display: 'flex',
					visibility: [isOpen ? 'visible' : 'hidden', null, null, null, 'visible'],
					flexDirection: 'column',
					overflow: 'hidden', //trim nav shadow
					background: '#fff',
					borderRight: `1px solid ${COLORS.border}`,
					width: 300,
					transform: [isOpen ? 'translateX(0)' : 'translateX(-300px)', null, null, null, 'none'],
					transition: ['transform 0.15s, visibility 0.15s', null, null, null, 'none'],
				})}
				aria-hidden={!isOpen}
				onTransitionEnd={handleTransitionEnd}
			>
				<CloseBtn ref={closeBtnRef} onClick={handleClose} />
				<BrandDropdown />
				<Navigation items={items} />
			</div>

			{/* Background overlay */}
			{isOpen && (
				<div
					onClick={handleClose}
					css={mq({
						display: ['block', null, null, null, 'none'],
						position: 'fixed',
						zIndex: 10,
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(0,0,0,0.4)',
						cursor: 'pointer',
					})}
				/>
			)}
		</FocusOn>
	);
};

const CloseBtn = forwardRef((props, ref) => {
	const { COLORS, SPACING, PACKS } = useBrand();
	const mq = useMediaQuery();

	return (
		<Button
			ref={ref}
			look="unstyled"
			size="large"
			iconAfter={CloseIcon}
			assistiveText="Close main menu"
			css={mq({
				display: [null, null, null, null, 'none'],
				position: 'absolute',
				zIndex: 2,
				top: SPACING(1),
				right: SPACING(1),
				padding: SPACING(1),
				backgroundColor: 'transparent',
				color: COLORS.muted,

				':focus': {
					outlineOffset: `-${PACKS.focus.outlineWidth} !important`,
				},
			})}
			{...props}
		/>
	);
});

CloseBtn.displayName = 'CloseBtn';
