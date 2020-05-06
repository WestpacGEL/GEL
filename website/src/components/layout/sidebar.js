/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { CloseIcon } from '@westpac/icon';
import { useRef } from 'react';

import { useSidebar } from '../providers/sidebar';
import { BrandSwitcher } from '../brand-switcher';
import { Navigation } from '.';

export const Sidebar = ({ items }) => {
	const { COLORS, LAYOUT } = useBrand();
	const { isOpen, isScrolled, setIsScrolled } = useSidebar();
	const ref = useRef();

	const handleScroll = () => {
		const scrollTop = ref.current.scrollTop;
		if (!isScrolled && scrollTop > 0) {
			setIsScrolled(true);
		} else if (scrollTop === 0) {
			setIsScrolled(false);
		}
	};

	return (
		<aside
			ref={ref}
			onScroll={handleScroll}
			css={{
				background: 'white',
				gridColumnStart: 1,
				gridColumnEnd: 2,
				transition: 'transform 0.15s',
				borderRight: `1px solid ${COLORS.border}`,
				zIndex: 2,
				overflow: 'auto',
				height: '100vh',
				boxSizing: 'border-box',

				[`@media only screen and (max-width: ${LAYOUT.breakpoints.xl - 1}px)`]: {
					position: 'absolute',
					zIndex: 10,
					top: 0,
					left: 0,
					width: 300,
					transform: isOpen ? 'translateX(0px)' : 'translateX(-300px)',
				},
			}}
		>
			<CloseButton />
			<BrandSwitcher />
			<Navigation items={items} />
		</aside>
	);
};

const CloseButton = () => {
	const { setIsOpen } = useSidebar();
	const { COLORS, SPACING, LAYOUT } = useBrand();
	return (
		<button
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
				[`@media only screen and (min-width: ${LAYOUT.breakpoints.xl}px)`]: { display: 'none' },
			}}
		>
			<CloseIcon color={COLORS.neutral} size="small" />
		</button>
	);
};
