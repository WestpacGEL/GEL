/** @jsx jsx */
import React, { useEffect, useState, useRef } from 'react';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Heading, BrandHeading } from '@westpac/heading';
import { Button } from '@westpac/button';
import { VisuallyHidden } from '@westpac/a11y';

import { MenuButton } from './menu-button';
import HeaderImage from './component-page-header-image';
import { usePageContext } from '../providers/pageContext';
import { scrollMap, brandHeaderStyling } from '../_utils';

const GridIndicator = () => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();
	const { showGrid, setShowGrid } = usePageContext();

	return (
		<div
			css={{
				position: 'fixed',
				display: 'flex',
				alignItems: 'center',
				top: SPACING(2),
				right: SPACING(2),
				color: '#fff',
				fontWeight: 'bold',
			}}
		>
			<VisuallyHidden>Breakpoint:</VisuallyHidden>
			<span css={mq({ display: ['none', null, 'inline-block', 'none'] })}>SM</span>
			<span css={mq({ display: ['none', null, null, 'inline-block', 'none'] })}>MD</span>
			<span css={mq({ display: ['none', null, null, null, 'inline-block'] })}>LG</span>
			<Button
				look="unstyled"
				size="large"
				onClick={() => setShowGrid(!showGrid)}
				aria-hidden="true"
				css={mq({
					display: ['none', null, 'inline-block'],
					padding: SPACING(1),
					backgroundColor: 'transparent',
				})}
			>
				<div css={{ display: 'flex', justifyContent: 'center', height: 24, width: 24 }}>
					{[...new Array(4)].map((_, index) => (
						<div
							key={index}
							css={{
								height: '100%',
								width: 4,
								backgroundColor: 'rgba(255, 255, 255, 0.3)',

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

const PageHeaderHeading = (props) => {
	const { BRAND, LAYOUT, PACKS } = useBrand();

	return BRAND.code === 'WBC' ? (
		<BrandHeading
			tag="h1"
			size={7}
			uppercase
			overrides={{
				BrandHeading: {
					styles: (styles) => ({
						...styles,
						transition: 'font-size 0.2s ease',
						[`@media (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
							fontSize: `${PACKS.typeScale.brandFont[2].fontSize}`,
							lineHeight: `${PACKS.typeScale.brandFont[2].lineHeight}`,
							fontFamily: `${PACKS.typeScale.brandFont[2].fontFamily}`,
							'body.hasScrolled &': {
								fontSize: `${PACKS.typeScale.brandFont[7].fontSize}`,
								lineHeight: `${PACKS.typeScale.brandFont[7].lineHeight}`,
								fontFamily: `${PACKS.typeScale.brandFont[7].fontFamily}`,
							},
						},
					}),
				},
			}}
			{...props}
		/>
	) : (
		<Heading
			tag="h1"
			size={8}
			overrides={{
				Heading: {
					styles: (styles) => ({
						...styles,
						transition: 'font-size 0.2s ease',
						[`@media (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
							fontSize: `${PACKS.typeScale.bodyFont[3].fontSize}`,
							lineHeight: `${PACKS.typeScale.bodyFont[3].lineHeight}`,
							fontFamily: `${PACKS.typeScale.bodyFont[3].fontFamily}`,
							'body.hasScrolled &': {
								fontSize: `${PACKS.typeScale.bodyFont[8].fontSize}`,
								lineHeight: `${PACKS.typeScale.bodyFont[8].lineHeight}`,
								fontFamily: `${PACKS.typeScale.bodyFont[8].fontFamily}`,
							},
						},
					}),
				},
			}}
			{...props}
		/>
	);
};

const PageHeader = ({ name }) => {
	const { COLORS, BRAND, SPACING, LAYOUT } = useBrand();
	const mq = useMediaQuery();

	return (
		<header
			css={mq({
				flex: 'none',
				position: 'sticky',
				top: [0, null, -162], // 228 - 66 = height to stick
				zIndex: 5,
				display: 'flex',
				height: [66, null, 228],
				overflow: 'hidden',
				...brandHeaderStyling[BRAND.code](COLORS),
			})}
		>
			<HeaderImage brand={BRAND} />
			<div
				css={mq({
					display: 'flex',
					alignItems: 'flex-end', //align bottom
				})}
			>
				<MenuButton
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
						marginBottom: 0,
						[`@media (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
							marginLeft: SPACING(6),
							marginBottom: SPACING(7),
							'body.hasScrolled &': {
								marginLeft: SPACING(10),
								marginBottom: 0,
							},
						},
						[`@media (min-width: ${LAYOUT.breakpoints.lg}px)`]: {
							marginLeft: SPACING(6),
							'body.hasScrolled &': {
								marginLeft: SPACING(4),
								marginBottom: 0,
							},
						},
						height: [66, null],
						transition: 'margin 0.2s ease',
						willChange: 'opacity',
					})}
				>
					<PageHeaderHeading>{name}</PageHeaderHeading>
				</div>
			</div>
			<GridIndicator />
		</header>
	);
};

export default PageHeader;
