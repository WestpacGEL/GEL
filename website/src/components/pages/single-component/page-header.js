/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { HamburgerMenuIcon } from '@westpac/icon';
import HeaderImageRight from '../../symbols/HeaderImageRight';
import HeaderImageLeft from '../../symbols/HeaderImageLeft';

import { useSidebar } from '../../providers/sidebar';

export const PageHeader = ({ name, version }) => {
	const { COLORS, SPACING } = useBrand();
	const [hasScrolled, setHasScrolled] = useState(false);

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

	return (
		<>
			<div
				css={{
					background: COLORS.primary,
					color: COLORS.light,
					height: hasScrolled ? '65px' : '200px',
					position: hasScrolled ? 'fixed' : 'relative',
					transition: '0.3s',
					display: 'flex',
					flexDirection: hasScrolled ? 'row' : 'column',
					zIndex: 2,
					width: hasScrolled ? '100%' : 'auto',
					alignItems: hasScrolled ? 'center' : 'unset',
					overflow: 'hidden',
				}}
			>
				<div
					css={{
						position: 'absolute',
						zIndex: -1,
						right: hasScrolled ? '235px' : 0,
					}}
				>
					<HeaderImageRight height={'200px'} />
				</div>
				<div
					css={{
						position: 'absolute',
						zIndex: -1,
						alignSelf: 'flex-start',
					}}
				>
					<HeaderImageLeft height={'200px'} />
				</div>
				<div>
					<MenuIcon />
				</div>
				<div
					css={{
						display: 'flex',
						flexDirection: hasScrolled ? 'row' : 'column',
						alignItems: hasScrolled ? 'baseline' : 'initial',
						marginLeft: SPACING(3),
						marginBottom: SPACING(3),
						paddingTop: SPACING(3),
					}}
				>
					<Heading
						size={hasScrolled ? 7 : 1}
						css={{ textTransform: 'capitalize', marginRight: SPACING(1) }}
					>
						{name}
					</Heading>
					<span css={{ fontSize: '16px' }}> Version {version}</span>
				</div>
			</div>
			{hasScrolled && <div css={{ height: hasScrolled ? '155px' : '200px', transition: '0.5s' }} />}
		</>
	);
};

const MenuIcon = () => {
	const { setIsOpen } = useSidebar();
	const { COLORS, SPACING } = useBrand();
	return (
		<button
			css={{
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
