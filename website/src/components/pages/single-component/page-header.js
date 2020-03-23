/** @jsx jsx */
import React, { useEffect, useState, useRef } from 'react';
import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { HamburgerMenuIcon } from '@westpac/icon';
import HeaderImageRight from '../../symbols/HeaderImageRight';
import HeaderImageLeft from '../../symbols/HeaderImageLeft';

import { useSidebar } from '../../providers/sidebar';

export const PageHeader = ({ name, version }) => {
	const { COLORS, SPACING, BRAND } = useBrand();
	const [hasScrolled, setHasScrolled] = useState(false);
	const header = useRef(null);

	useEffect(() => {
		const main = header.current.parentElement;

		const scrollHandler = () => {
			if (main.scrollTop >= 0 && main.scrollTop < 135) {
				header.current.style.height = `${200 - main.scrollTop}px`;
				header.current.style.paddingTop = `${main.scrollTop}px`;
				header.current.style.position = 'relative';

				header.current.nextSibling.style.height = '0px';
			} else {
				header.current.style.height = '65px';
				header.current.style.paddingTop = '0px';
				header.current.style.position = 'fixed';

				header.current.nextSibling.style.height = '200px';
			}
			if (main.scrollTop >= 65) {
				setHasScrolled(true);
			} else {
				setHasScrolled(false);
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
				ref={header}
				css={{
					background: COLORS.primary,
					color: COLORS.light,
					height: '200px',
					position: 'relative',
					flexDirection: hasScrolled ? 'row' : 'column',
					width: hasScrolled ? '100%' : 'auto',
					alignItems: hasScrolled ? 'center' : 'unset',
					display: 'flex',
					zIndex: 999,
					overflow: 'hidden',
				}}
			>
				<div
					css={{
						position: 'absolute',
						zIndex: -1,
						right: 0,
						bottom: 0,
						top: 0,
					}}
				>
					<HeaderImageRight height={'200px'} />
				</div>
				<div
					css={{
						position: 'absolute',
						left: 0,
						bottom: 0,
						top: 0,
						zIndex: -1,
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
						flexGrow: 1,
						justifyContent: hasScrolled ? 'flex-start' : 'center',
						marginLeft: SPACING(3),
						marginBottom: hasScrolled ? 0 : SPACING(3),
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
			<div css={{ display: 'block' }}></div>
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
