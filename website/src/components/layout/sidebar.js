/** @jsx jsx */
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { CloseIcon } from '@westpac/icon';
import { Fragment } from 'react';

import { useSidebar } from '../providers/sidebar';
import { BrandSwitcher } from '../brand-switcher';
import { Navigation } from '.';

export const Sidebar = ({ items }) => {
	const { COLORS, LAYOUT } = useBrand();
	const mq = useMediaQuery();
	const { isOpen, setIsOpen } = useSidebar();

	return (
		<Fragment>
			<aside
				css={{
					display: 'flex',
					flexDirection: 'column',
					background: 'white',
					gridColumnStart: 1,
					gridColumnEnd: 2,
					borderRight: `1px solid ${COLORS.border}`,
					width: 300,
					height: '100vh',
					boxSizing: 'border-box',
					position: 'absolute',
					zIndex: 11,
					top: 0,
					bottom: 0,
					left: 0,
					transition: 'transform 0.15s',
					transform: isOpen ? 'translateX(0px)' : 'translateX(-300px)',

					// refactor this to use mq above...
					[`@media only screen and (min-width: ${LAYOUT.breakpoints.lg}px)`]: {
						position: 'static',
						zIndex: 'auto',
						top: 'auto',
						bottom: 'auto',
						left: 'auto',
						transform: 'none',
					},
				}}
			>
				<CloseButton />
				<BrandSwitcher />
				<Navigation items={items} />
			</aside>
			{isOpen && (
				<div
					onClick={() => setIsOpen(false)}
					css={mq({
						display: ['block', null, null, null, 'none'],
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(0,0,0,0.4)',
						zIndex: 10,
					})}
				/>
			)}
		</Fragment>
	);
};

const CloseButton = () => {
	const { setIsOpen } = useSidebar();
	const { COLORS, SPACING, LAYOUT } = useBrand();
	return (
		<button
			type="button"
			onClick={() => setIsOpen(false)}
			css={{
				position: 'absolute',
				top: 0,
				right: 0,
				margin: `${SPACING(2)} !important`,
				padding: 0,
				background: 'none',
				border: 'none',
				cursor: 'pointer',
				zIndex: 2,
				[`@media only screen and (min-width: ${LAYOUT.breakpoints.lg}px)`]: { display: 'none' },
			}}
			aria-label="Close sidebar"
		>
			<CloseIcon color={COLORS.neutral} size="small" />
		</button>
	);
};
