/** @jsx jsx */
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import React, { useLayoutEffect, useState, useRef, Fragment } from 'react';
import { Cell, Container, Grid } from '@westpac/grid';
import { StopwatchPictogram, TruckPictogram, AccessibilityPictogram } from '@westpac/pictogram';
import { BrandHeading } from '@westpac/heading';
import throttle from 'lodash.throttle';

import { MenuBtn } from './menu-btn';
import HeaderImage from './home-page-header-image';
import HomePageStickyHeaderImage from './home-page-sticky-header-image';
import { Body } from '../body';
import { antialiasingStyling, brandHeaderStyling } from '../_utils';
import { usePageContext } from '../providers/pageContext';

const HomePageHeader = () => {
	const { BRAND, COLORS, SPACING } = useBrand();
	const headerStyling = brandHeaderStyling[BRAND.code](COLORS);
	const mq = useMediaQuery();
	const main = useRef(null);

	return (
		<section
			ref={main}
			css={mq({
				position: 'relative',
				overflow: 'hidden',
				paddingTop: [SPACING(15), null, SPACING(18)],
				paddingBottom: [SPACING(7), null, SPACING(11)],
				background: [null, null, headerStyling.background],
				color: [null, null, headerStyling.color],
				...antialiasingStyling,

				...(BRAND.code === 'WBC' && {
					'::before': {
						content: '""',
						display: 'block',
						position: 'absolute',
						zIndex: 0,
						top: SPACING(15),
						bottom: 0,
						left: 0,
						width: ['12px', null, '24px'],
						backgroundColor: COLORS.pop,
					},
				}),
			})}
		>
			<HeaderImage brand={BRAND} aria-hidden="true" />
			<StickyHeader mainRef={main} />
			<HeroIntro />
		</section>
	);
};

const StickyHeader = () => {
	const { COLORS, BRAND, SPACING, PACKS } = useBrand();
	const mq = useMediaQuery();
	const headerStyling = brandHeaderStyling[BRAND.code](COLORS);
	const [hasScroll, setHasScroll] = useState(false);
	const [hasScrolledPageHeader, setHasScrolledPageHeader] = useState(false);
	const header = useRef(null);
	const { pageHeadingRef } = usePageContext();

	// Focus the page heading
	useLayoutEffect(() => {
		pageHeadingRef.current.focus();
	}, []);

	useLayoutEffect(() => {
		const section = header.current.closest('section');

		const setHeader = () => {
			const scroll = window.scrollY;

			setHasScroll(scroll > 5);
			setHasScrolledPageHeader(section.clientHeight - window.scrollY <= 66);
		};
		setHeader();

		const scrollHandler = throttle(setHeader, 10);

		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	return (
		<Fragment>
			<header
				ref={header}
				css={mq({
					boxSizing: 'border-box',
					display: 'flex',
					alignItems: 'center',
					position: ['fixed', null, !hasScrolledPageHeader && 'absolute'],
					zIndex: 9,
					top: 0,
					left: 0,
					right: 0,
					height: 66,
					marginLeft: [null, null, null, null, hasScrolledPageHeader && 300],
					paddingLeft: [SPACING(8), null, SPACING(10), null, SPACING(5)], //66px (button) + 6px (gap),
					background: [headerStyling.background, null, !hasScrolledPageHeader && 'unset'],
					color: headerStyling.color,
					overflow: 'hidden',
					boxShadow: [
						hasScroll && '0 2px 5px rgba(0,0,0,0.4)',
						null,
						hasScrolledPageHeader ? '0 2px 5px rgba(0,0,0,0.3)' : 'none',
					],
					transition: ['box-shadow 0.2s', null, 'none'],
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
						boxSizing: 'border-box',
						display: 'flex',
						alignItems: 'center',
						borderBottom: [
							null,
							null,
							!hasScrolledPageHeader && BRAND !== 'WBC' && '1px solid rgba(255,255,255,0.7)',
						],
						zIndex: 6,
						height: '100%',
						flex: 1,
						margin: 0,
					})}
				>
					<h1
						ref={pageHeadingRef}
						tabIndex="0"
						css={{
							margin: 0,
							...PACKS.typeScale.bodyFont[9],
							fontWeight: 'normal',
						}}
					>
						<strong>GEL</strong> Design System
					</h1>
				</div>

				<HomePageStickyHeaderImage brand={BRAND} hide={!hasScrolledPageHeader} aria-hidden="true" />
			</header>
		</Fragment>
	);
};

const HeroFeaturesItem = ({ pictogram: Pictogram, children }) => {
	const mq = useMediaQuery();
	const { PACKS, SPACING } = useBrand();

	return (
		<Cell
			tag="li"
			width={[12, 4]}
			css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<div aria-hidden="true">
				<Pictogram mode="light" width={78} css={mq({ display: ['none', null, 'block'] })} />
				<Pictogram mode="duo" width={78} css={mq({ display: ['block', null, 'none'] })} />
			</div>
			<Body
				css={mq({ marginTop: [SPACING(3), SPACING(4)], textAlign: 'center' })}
				overrides={{
					Body: {
						styles: (styles) => ({
							...styles,
							...PACKS.typeScale.bodyFont[8],
							maxWidth: 290,
						}),
					},
				}}
			>
				{children}
			</Body>
		</Cell>
	);
};

const HeroFeatures = () => {
	const { SPACING } = useBrand();
	const mq = useMediaQuery();
	return (
		<Grid
			tag="ul"
			role="list"
			rowGap={[24, 'normal']}
			columnGap={[null, 30]}
			css={mq({
				paddingLeft: 0,
				listStyle: 'none',
				marginTop: [SPACING(4), SPACING(10)],
			})}
		>
			<HeroFeaturesItem pictogram={StopwatchPictogram}>
				Go to market faster leveraging tools to get you up and running instantly
			</HeroFeaturesItem>
			<HeroFeaturesItem pictogram={TruckPictogram}>
				Design, build and ship consistent brand experiences
			</HeroFeaturesItem>
			<HeroFeaturesItem pictogram={AccessibilityPictogram}>
				Create more accessible solutions that are inclusive of all customers
			</HeroFeaturesItem>
		</Grid>
	);
};
const HeroIntro = () => {
	const { SPACING, BRAND, PACKS } = useBrand();
	const mq = useMediaQuery();

	return (
		<Container
			css={mq({
				zIndex: 3,
				position: 'relative',
			})}
		>
			<Grid>
				<Cell width={[10, 12, 10]} left={[2, 1, 2]}>
					<BrandHeading
						tag="h2"
						size={[4, null, 1]}
						uppercase={BRAND.code === 'WBC'}
						css={mq({
							...(BRAND.code === 'WBC' && {
								fontSize: ['3rem', null, '4.5rem'],
							}),
						})}
					>
						Deliver quality user interfaces that scale – <em>fast!</em>
					</BrandHeading>
				</Cell>
			</Grid>
			<Grid css={mq({ marginTop: [SPACING(4), SPACING(6)] })}>
				<Cell width={10} left={2}>
					<Body>
						<p
							css={mq({
								margin: 0,
								...PACKS.typeScale.bodyFont[8],
							})}
						>
							Simplify your projects with reusable components and patterns
						</p>
					</Body>
				</Cell>
			</Grid>
			<HeroFeatures />
		</Container>
	);
};

export default HomePageHeader;
