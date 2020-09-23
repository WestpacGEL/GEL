/** @jsx jsx */
import React, { Fragment, useEffect, useState, useRef } from 'react';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Heading, BrandHeading } from '@westpac/heading';
import { Button } from '@westpac/button';
import { HamburgerMenuIcon } from '@westpac/icon';
import HeaderImage from './component-page-header-image';

import { useSidebar } from '../providers/sidebar';
import { usePageContext } from '../providers/pageContext';
import { brandHeaderStyling, gridlyIconColors } from '../_utils';
import throttle from 'lodash.throttle';

const MenuButton = () => {
	const mq = useMediaQuery();
	const { setIsOpen } = useSidebar();

	const Icon = () => <HamburgerMenuIcon color="#fff" />;

	return (
		<Button
			look="link"
			size="xlarge"
			onClick={() => setIsOpen((status) => !status)}
			iconBefore={Icon}
			overrides={{
				Button: {
					styles: (styles) => ({
						...styles,
						position: 'fixed',
						top: '0.5625rem',
						left: '1.5rem',
						...mq({ display: [null, null, null, null, 'none'] })[0],
					}),
				},
			}}
		/>
	);
};

const GridIndicator = () => {
	const { BRAND } = useBrand();
	const mq = useMediaQuery();
	const { showGrid, setShowGrid } = usePageContext();

	const ButtonContentWrapper = ({ children, ...rest }) => <Fragment>{children}</Fragment>;

	return (
		<div
			css={{
				position: 'fixed',
				display: 'flex',
				alignItems: 'center',
				top: '0.5625rem',
				right: '1.5rem',
				color: '#fff',
				fontWeight: 'bold',
			}}
		>
			<span css={mq({ display: ['inline-block', 'none'] })}>XS</span>
			<span css={mq({ display: ['none', 'inline-block', 'none'] })}>XSL</span>
			<span css={mq({ display: ['none', null, 'inline-block', 'none'] })}>SM</span>
			<span css={mq({ display: ['none', null, null, 'inline-block', 'none'] })}>MD</span>
			<span css={mq({ display: ['none', null, null, null, 'inline-block'] })}>LG</span>
			<Button
				look="link"
				size="xlarge"
				onClick={() => setShowGrid(!showGrid)}
				aria-pressed={showGrid}
				overrides={{
					Button: {
						styles: (styles) => ({
							...styles,
							marginLeft: '0.375rem',
						}),
					},
					Content: {
						component: ButtonContentWrapper,
					},
				}}
			>
				<div css={{ display: 'flex', justifyContent: 'center', height: 24, width: 24 }}>
					{[...new Array(4)].map((_, index) => (
						<div
							key={index}
							css={{
								height: '100%',
								width: 4,
								backgroundColor: gridlyIconColors[BRAND],

								'& + &': {
									marginLeft: 2,
								},
							}}
						/>
					))}
				</div>
			</Button>
		</div>
	);
};

const PageHeader = ({ name }) => {
	const { COLORS, BRAND } = useBrand();
	const mq = useMediaQuery();
	const [hasScroll, setHasScroll] = useState(false);
	const [hasScrolledSmall, setHasScrolledSmall] = useState(false);
	const [hasScrolledLarge, setHasScrolledLarge] = useState(false);
	const header = useRef(null);

	useEffect(() => {
		const setHeader = () => {
			const scroll = window.scrollY;

			setHasScroll(scroll > 5);
			setHasScrolledSmall(scroll > 46);
			setHasScrolledLarge(scroll >= 162);
		};
		setHeader();

		const scrollHandler = throttle(setHeader, 10);

		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	});

	return (
		<header
			ref={header}
			css={mq({
				flex: 'none',
				position: 'sticky',
				top: [0, null, -162], // 228 - 66 = height to stick
				zIndex: 5,
				display: 'flex',
				height: [66, null, 228],
				overflow: 'hidden',
				...brandHeaderStyling[BRAND](COLORS),
			})}
		>
			<HeaderImage brand={BRAND} />
			<div
				css={mq({
					display: 'flex',
					alignItems: 'flex-end', //align bottom
				})}
			>
				<MenuButton />
				<div
					css={mq({
						display: ['flex', null],
						alignItems: ['center', null],
						opacity: [null, null, hasScrolledSmall && !hasScrolledLarge ? 0 : 1],
						marginLeft: ['3.75rem', null, !hasScrolledLarge && '2.25rem', null, '2.25rem'],
						marginBottom: [null, null, !hasScrolledLarge && '2.875rem'],
						height: [66, null],
						transition: [
							null,
							null,
							!(hasScrolledSmall && !hasScrolledLarge) && 'opacity 0.2s ease',
						],
						willChange: 'opacity',
					})}
				>
					<BrandHeading
						tag="h1"
						size={[
							BRAND === 'WBC' ? 7 : 8,
							null,
							!hasScrolledLarge ? (BRAND === 'WBC' ? 2 : 3) : null,
						]}
					>
						{name}
					</BrandHeading>
				</div>
			</div>
			<GridIndicator />
		</header>
	);
};

export default PageHeader;
