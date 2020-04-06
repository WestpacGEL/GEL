/** @jsx jsx */
import React, { useEffect, useState, useRef, Fragment } from 'react';
import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { HamburgerMenuIcon } from '@westpac/icon';
import HeaderImage from '../../header/component-page-header-image';

import { useSidebar } from '../../providers/sidebar';
import { brandHeaderColors } from './_utils';

const MenuIcon = () => {
	const { setIsOpen } = useSidebar();
	const { COLORS, SPACING } = useBrand();
	return (
		<button
			css={{
				padding: SPACING(4),
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

export const PageHeader = ({ name, version }) => {
	const { COLORS, SPACING, BRAND } = useBrand();
	const [hasScrolled, setHasScrolled] = useState(false);
	const header = useRef(null);
	const headerPaddingElement = useRef(null);

	useEffect(() => {
		const main = header.current.parentElement;
		const scrollHandler = () => {
			if (main.scrollTop >= 0 && main.scrollTop < 135) {
				header.current.style.height = `${200 - main.scrollTop}px`;
				header.current.style.marginTop = `${-50 + main.scrollTop}px`;
				header.current.style.position = 'relative';
				headerPaddingElement.current.style.height = '0px';
			} else {
				headerPaddingElement.current.style.height = '200px';
				header.current.style.height = '65px';
				header.current.style.marginTop = '-50px';
				header.current.style.position = 'fixed';
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

	const backgroundColor = brandHeaderColors[BRAND](COLORS);

	return (
		<Fragment>
			<div
				ref={header}
				css={{
					background: backgroundColor,
					color: COLORS.light,
					height: '200px',
					marginTop: '-50px',
					paddingTop: '50px',
					position: 'relative',
					flexDirection: hasScrolled ? 'row' : 'column',
					width: hasScrolled ? '100%' : 'auto',
					alignItems: hasScrolled ? 'center' : 'unset',
					display: 'flex',
					flex: 'none',
					zIndex: 5,
					overflow: 'hidden',
				}}
			>
				<HeaderImage brand={BRAND} />
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
						marginLeft: SPACING(6),
						marginBottom: hasScrolled ? 0 : SPACING(3),
					}}
				>
					<Heading size={hasScrolled ? 7 : 1} css={{ textTransform: 'capitalize' }}>
						{name}
					</Heading>
					<span css={{ fontSize: '16px', marginLeft: hasScrolled ? SPACING(1) : 0 }}>
						{' '}
						Version {version}
					</span>
				</div>
			</div>
			<div css={{ flex: 'none' }} ref={headerPaddingElement} />
		</Fragment>
	);
};
