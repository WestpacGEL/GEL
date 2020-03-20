/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx, useBrand } from '@westpac/core';
import { Container } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import { HamburgerMenuIcon } from '@westpac/icon';

import { useSidebar } from '../../providers/sidebar';

export const PageHeader = ({ name, version }) => {
	const { COLORS, SPACING } = useBrand();
	const [hasScrolled, setHasScrolled] = useState(false);
	const [scrollComplete, setScrollComplete] = useState(false);

	useEffect(() => {
		const main = document.getElementsByTagName('main')[0];

		const scrollHandler = () => {
			if (main.scrollTop > 50) {
				setHasScrolled(true);
				console.log(hasScrolled);
			} else {
				setHasScrolled(false);
				console.log(hasScrolled);
			}
		};

		main.addEventListener('scroll', scrollHandler);
		return () => {
			main.removeEventListener('scroll', scrollHandler);
		};
	});

	useEffect(() => {
		setTimeout(() => {
			if (hasScrolled) setScrollComplete(true);
			if (!hasScrolled) setScrollComplete(false);
		}, 0);
	}, [hasScrolled]);

	return (
		<>
			<div
				css={{
					background: COLORS.primary,
					color: COLORS.light,
					height: hasScrolled ? '65px' : '200px',
					position: hasScrolled ? 'fixed' : 'relative',
					transition: '0.5s',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-start',
					flexDirection: hasScrolled ? 'row' : 'column',
					zIndex: 2,
					width: '100%',
				}}
			>
				<MenuIcon />
				<div
					css={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						marginLeft: SPACING(3),
						marginBottom: SPACING(3),
						paddingTop: SPACING(3),
					}}
				>
					<Heading size={hasScrolled ? 6 : 1} css={{ textTransform: 'capitalize' }}>
						{name}
					</Heading>
					<span>Version {version}</span>
				</div>
			</div>
			{hasScrolled && (
				<div css={{ height: scrollComplete ? '155px' : '200px', transition: '0.5s' }} />
			)}
		</>
	);
};

const MenuIcon = () => {
	const { setIsOpen } = useSidebar();
	const { COLORS, SPACING } = useBrand();
	return (
		<button
			css={{
				top: 0,
				left: 0,
				margin: SPACING(2),
				background: 'none',
				border: 'none',
				cursor: 'pointer',
				'@media only screen and (min-width: 840px)': {
					display: 'none',
				},
			}}
			onClick={() => setIsOpen(status => !status)}
		>
			<HamburgerMenuIcon color={COLORS.light} />
		</button>
	);
};
