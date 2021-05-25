/** @jsx jsx */
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon } from '@westpac/icon';
import { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useSidebar } from '../providers/sidebar';
import { BrandSwitcher } from '../brand-switcher';
import { Navigation } from '.';

export const Sidebar = ({ items }) => {
	const { COLORS } = useBrand();
	const { isOpen, setIsOpen } = useSidebar();
	const mq = useMediaQuery();
	const router = useRouter();

	// Close sidebar when route changes
	useEffect(() => {
		if (isOpen) {
			setIsOpen(!isOpen);
		}
	}, [router.asPath]);

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
					flexDirection: 'column',
					overflow: 'hidden', //trim nav shadow
					background: '#fff',
					borderRight: `1px solid ${COLORS.border}`,
					width: 300,
					transform: [isOpen ? 'translateX(0)' : 'translateX(-300px)', null, null, null, 'none'],
					transition: ['transform 0.15s', null, null, null, 'none'],
				})}
			>
				<CloseBtn />
				<BrandSwitcher />
				<Navigation items={items} />
			</div>
			{isOpen && (
				<div
					onClick={() => setIsOpen(false)}
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

const CloseBtn = () => {
	const { setIsOpen } = useSidebar();
	const { COLORS, SPACING } = useBrand();
	const mq = useMediaQuery();

	return (
		<Button
			look="unstyled"
			size="large"
			iconAfter={CloseIcon}
			aria-label="Close sidebar"
			onClick={() => setIsOpen(false)}
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
		/>
	);
};
