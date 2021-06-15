/** @jsx jsx */

import React, { useLayoutEffect } from 'react';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Heading, BrandHeading } from '@westpac/heading';

import { MenuBtn } from './menu-btn';
import { GridIndicator } from './grid-indicator';
import HeaderImage from './component-page-header-image';
import { brandHeaderStyling } from '../_utils';
import { usePageContext } from '../providers/pageContext';
import { useRouter } from 'next/router';

const PageHeaderHeading = (props) => {
	const { BRAND, LAYOUT, PACKS } = useBrand();
	const { pageHeadingRef } = usePageContext();
	const router = useRouter();

	// Focus the page heading when the route changes, ensure tab route changes are excluded
	useLayoutEffect(() => {
		const handleRouteChange = (url) => {
			const pathname = router.asPath.split('?')[0];
			if (!url.includes(pathname)) {
				pageHeadingRef.current.focus();
			}
		};
		router.events.on('routeChangeStart', handleRouteChange);

		return () => {
			router.events.off('routeChangeStart', handleRouteChange);
		};
	}, [router.asPath]);

	return BRAND.code === 'WBC' ? (
		<BrandHeading
			ref={pageHeadingRef}
			tag="h1"
			size={7}
			uppercase
			tabIndex="-1"
			overrides={{
				BrandHeading: {
					styles: (styles) => ({
						...styles,

						[`@media (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
							fontSize: PACKS.typeScale.brandFont[2].fontSize,

							'body.hasScrolledLarge &': {
								fontSize: PACKS.typeScale.brandFont[7].fontSize,
							},
						},
					}),
				},
			}}
			{...props}
		/>
	) : (
		<Heading
			ref={pageHeadingRef}
			tag="h1"
			size={8}
			tabIndex="-1"
			overrides={{
				Heading: {
					styles: (styles) => ({
						...styles,

						[`@media (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
							fontSize: PACKS.typeScale.bodyFont[3].fontSize,

							'body.hasScrolledLarge &': {
								fontSize: PACKS.typeScale.bodyFont[8].fontSize,
							},
						},
					}),
				},
			}}
			{...props}
		/>
	);
};

const PageHeader = ({ name, ...rest }) => {
	const { COLORS, BRAND, SPACING, LAYOUT } = useBrand();
	const mq = useMediaQuery();

	return (
		<header
			css={[
				mq({
					flex: 'none',
					position: 'sticky',
					top: [0, null, -162], // 228 - 66 = height to stick
					zIndex: 5,
					display: 'flex',
					height: [66, null, 228],
					overflow: 'hidden',
					...brandHeaderStyling[BRAND.code](COLORS),
					transition: 'box-shadow 0.2s ease',

					'body.hasScrolledSmall &': {
						boxShadow: ['0 2px 5px rgba(0,0,0,0.3)', null, 'none'],
					},
					'body.hasScrolledLarge &': {
						boxShadow: [null, null, '0 2px 5px rgba(0,0,0,0.3)'],
					},
				})[0],
			]}
			{...rest}
		>
			<GridIndicator />
			<HeaderImage brand={BRAND} />
			<div
				css={mq({
					display: 'flex',
					alignItems: 'flex-end', //align bottom
				})}
			>
				<MenuBtn
					css={mq({
						position: 'fixed',
						zIndex: 1,
						top: 0,
						left: [0, null, SPACING(2)],
						display: [null, null, null, null, 'none'],
					})}
				/>
				<div
					css={mq({
						display: ['flex', null],
						alignItems: ['center', null],
						marginLeft: SPACING(8),
						height: [66, null],
						willChange: 'opacity',

						[`@media (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
							marginLeft: SPACING(6),
							marginBottom: SPACING(7),

							'body.hasScrolledSmall &': {
								marginLeft: SPACING(6),
								opacity: 0,
							},
							'body.hasScrolledLarge &': {
								marginLeft: SPACING(10),
								marginBottom: 0,
								opacity: 1,
								transition: 'opacity 0.3s ease',
							},
						},
						[`@media (min-width: ${LAYOUT.breakpoints.lg}px)`]: {
							marginLeft: SPACING(6),

							'body.hasScrolledLarge &': {
								marginLeft: SPACING(4),
							},
						},
					})}
				>
					<PageHeaderHeading>{name}</PageHeaderHeading>
				</div>
			</div>
		</header>
	);
};

export default PageHeader;
