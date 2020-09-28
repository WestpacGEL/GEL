/** @jsx jsx */
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { CloseIcon } from '@westpac/icon';
import { Fragment } from 'react';

import { useSidebar } from '../providers/sidebar';
import { BrandSwitcher } from '../brand-switcher';
import { Navigation } from '.';

export const Sidebar = ({ items }) => {
	const { COLORS } = useBrand();
	const { isOpen, setIsOpen } = useSidebar();
	const mq = useMediaQuery();

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
				<CloseButton />
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

const CloseButton = () => {
	const { setIsOpen } = useSidebar();
	const { COLORS, SPACING, LAYOUT } = useBrand();
	const mq = useMediaQuery();
	return (
		<button
			type="button"
			onClick={() => setIsOpen(false)}
			css={mq({
				display: [null, null, null, null, 'none'],
				position: 'absolute',
				top: 0,
				right: 0,
				margin: SPACING(2),
				padding: 0,
				background: 'none',
				border: 'none',
				cursor: 'pointer',
				zIndex: 2,
			})}
			aria-label="Close sidebar"
		>
			<CloseIcon color={COLORS.neutral} size="small" />
		</button>
	);
};
