/** @jsx jsx */
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon } from '@westpac/icon';
import { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useSidebarContext } from '../providers/sidebar';
import { BrandDropdown } from '../brand-dropdown';
import { Navigation } from '.';

export const Sidebar = ({ items }) => {
	const { COLORS } = useBrand();
	const { isOpen, setIsOpen, closeBtnRef, menuBtnRef } = useSidebarContext();
	const mq = useMediaQuery();
	const router = useRouter();

	// Close sidebar when route changes
	useEffect(() => {
		if (isOpen) {
			setIsOpen(!isOpen);
		}
	}, [router.asPath]);

	const handleClose = () => {
		setIsOpen(false);
	};

	// on escape close modal
	const keyHandler = (event) => {
		if (isOpen && event.keyCode === 27) handleClose();
	};

	// bind key events
	useEffect(() => {
		window.document.addEventListener('keydown', keyHandler);
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
	});

	return (
		<Fragment>
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
			>
				<CloseBtn onClick={handleClose} />
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
		</Fragment>
	);
};

const CloseBtn = (props) => {
	const { setIsOpen, closeBtnRef } = useSidebarContext();
	const { COLORS, SPACING } = useBrand();
	const mq = useMediaQuery();

	return (
		<Button
			ref={closeBtnRef}
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
			})}
			{...props}
		/>
	);
};
