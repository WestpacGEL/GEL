/** @jsx jsx */
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import React, { useEffect, useState, useRef, Fragment } from 'react';
import { HamburgerMenuIcon } from '@westpac/icon';
import { Body } from '@westpac/body';
import { Cell, Container, Grid } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import HeaderImage from './home-page-header-image';
import StickyHeaderImage from './sticky-header-image';
import { brandHeaderColors, brandIconHighlightColors } from '../_utils';
import { AccessibilitySvg, StopwatchSvg, TruckSvg } from '../symbols';
import { useSidebar } from '../providers/sidebar';

const HomePageHeader = () => {
	const { BRAND, COLORS, SPACING, LAYOUT } = useBrand();
	const backgroundColor = brandHeaderColors[BRAND](COLORS);
	const mq = useMediaQuery();
	const main = useRef(null);

	return (
		<section
			ref={main}
			css={mq({
				color: BRAND === 'STG' ? COLORS.text : COLORS.light,
				position: 'relative',
				overflow: 'hidden',
				background: 'unset',
				[`@media only screen and (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
					background: backgroundColor,
				},
			})}
		>
			<HeaderImage brand={BRAND} />
			<StickyHeader mainRef={main} />
			<HeroIntro />
		</section>
	);
};

const StickyHeader = () => {
	const { COLORS, SPACING, BRAND, LAYOUT } = useBrand();
	const { isOpen, setIsOpen } = useSidebar();
	const backgroundColor = brandHeaderColors[BRAND](COLORS);
	const [hasScrolled, setHasScrolled] = useState(false);
	const header = useRef(null);
	useEffect(() => {
		const main = header.current.closest('main');
		const section = header.current.closest('section');
		const scrollHandler = () => {
			if (section.clientHeight - main.scrollTop <= 65) {
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
		<Fragment>
			<div
				ref={header}
				css={{
					overflow: 'hidden',
					display: 'flex',
					alignItems: 'center',
					paddingLeft: SPACING(12),
					width: '100%',
					zIndex: 9,
					position: 'fixed',
					background: backgroundColor,
					boxShadow: `0px 5px 11px -2px ${COLORS.borderDark}`,
					transition: 'box-shadow 0.3s ease-in-out',
					[`@media only screen and (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
						background: hasScrolled ? backgroundColor : 'unset',
						position: hasScrolled ? 'fixed' : 'absolute',
						boxShadow: hasScrolled ? `0px 5px 11px -2px ${COLORS.borderDark}` : 'none',
					},
				}}
			>
				<button
					css={{
						display: 'block',
						padding: 0,
						left: 0,
						background: 'none',
						border: 'none',
						cursor: 'pointer',
						zIndex: 3,
						position: 'fixed',
						height: '66px',
						width: '66px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						paddingBottom: '5px',
						top: 0,
						[`@media only screen and (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
							margin: SPACING(2),
						},
						[`@media only screen and (min-width: ${LAYOUT.breakpoints.xl}px)`]: {
							display: 'none',
						},
					}}
					onClick={() => setIsOpen(!isOpen)}
				>
					<HamburgerMenuIcon color={BRAND === 'STG' ? COLORS.text : COLORS.light} />
				</button>
				<div
					css={{
						height: '66px',
						display: 'flex',
						alignItems: 'center',
						width: '100%',
						margin: 0,
						marginTop: '-2px',
						borderBottom: 0,
						zIndex: 6,
						[`@media only screen and (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
							borderBottom: hasScrolled ? 'none' : `1px solid ${COLORS.light}`,
						},
					}}
				>
					<p>
						<strong>UI</strong> Framework
					</p>
				</div>

				<StickyHeaderImage brand={BRAND} hide={!hasScrolled} />
			</div>
		</Fragment>
	);
};

const IconText = ({ icon, iconMobile, children }) => {
	const { LAYOUT } = useBrand();
	return (
		<div css={{ textAlign: 'center' }}>
			<div
				css={{
					[`@media (max-width: ${LAYOUT.breakpoints.sm - 1}px)`]: {
						display: 'none',
					},
				}}
			>
				{icon}
			</div>
			<div
				css={{
					[`@media (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
						display: 'none',
					},
				}}
			>
				{iconMobile}
			</div>

			<p css={{ fontSize: '18px', lineHeight: 1.2 }}>{children}</p>
		</div>
	);
};

const HeroIntro = () => {
	const { SPACING, TYPE, COLORS, BRAND, LAYOUT } = useBrand();
	const mq = useMediaQuery();

	return (
		<Container
			css={mq({
				zIndex: 3,
				position: 'relative',
				overflow: 'hidden',
				margin: '0 auto',
				maxWidth: '60rem',
				marginTop: '66px',
				marginBottom: [SPACING(7), SPACING(11)],
				[`@media (max-width: ${LAYOUT.breakpoints.sm}px)`]: {
					color: COLORS.text,
				},
			})}
		>
			<Grid columns={12}>
				<Cell width={[10, 12, 10, 10]} left={[2, 1, 2, 2]}>
					<Heading
						size={1}
						css={mq({
							paddingTop: [SPACING(4), SPACING(7)],
							paddingBottom: [SPACING(4), SPACING(6)],
							fontFamily: `${TYPE.brandFont.fontFamily} !important`,
							maxWidth: 600,
							fontWeight: '500 !important',
							margin: '0 auto !important',
							zIndex: 3,
							[`@media (max-width: ${LAYOUT.breakpoints.sm}px)`]: {
								color: COLORS.hero,
							},
						})}
					>
						Design to scale with confidence
					</Heading>

					<Body>Assemble enterprise solutions with our components and patterns</Body>

					<Grid css={mq({ marginTop: [SPACING(4), SPACING(10)] })}>
						<Cell width={[12, 4]}>
							<IconText
								icon={
									<StopwatchSvg
										outlineColor={COLORS.light}
										highlightOutlineColor={COLORS.light}
										highlightColor={COLORS.light}
									/>
								}
								iconMobile={
									<StopwatchSvg
										outlineColor={COLORS.borderDark}
										highlightOutlineColor={COLORS.text}
										highlightColor={brandIconHighlightColors[BRAND](COLORS)}
									/>
								}
							>
								Get to market faster by leveraging our knowledge and tools
							</IconText>
						</Cell>
						<Cell width={[12, 4]}>
							<IconText
								icon={
									<TruckSvg
										outlineColor={COLORS.light}
										highlightOutlineColor={COLORS.light}
										highlightColor="none"
									/>
								}
								iconMobile={
									<TruckSvg
										outlineColor={COLORS.borderDark}
										highlightOutlineColor={COLORS.text}
										highlightColor={brandIconHighlightColors[BRAND](COLORS)}
									/>
								}
							>
								Design, build and ship consistent, quality, branded solutions
							</IconText>
						</Cell>
						<Cell width={[12, 4]}>
							<IconText
								icon={
									<AccessibilitySvg
										outlineColor={COLORS.light}
										highlightOutlineColor={COLORS.light}
										highlightColor="none"
									/>
								}
								iconMobile={
									<AccessibilitySvg
										outlineColor={COLORS.borderDark}
										highlightOutlineColor={COLORS.text}
										highlightColor={brandIconHighlightColors[BRAND](COLORS)}
									/>
								}
							>
								Be more accessible and inclusive with our assets
							</IconText>
						</Cell>
					</Grid>
				</Cell>
			</Grid>
		</Container>
	);
};

export default HomePageHeader;
