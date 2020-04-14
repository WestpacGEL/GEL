/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import React, { useEffect, useState, useRef, Fragment } from 'react';
import { HamburgerMenuIcon } from '@westpac/icon';
import HeaderImage from './home-page-header-image';
import StickyHeaderImage from './sticky-header-image';
import { brandHeaderColors, brandIconHighlightColors } from '../_utils';
import { AccessibilitySvg, StopwatchSvg, TruckSvg } from '../symbols';
import { useSidebar } from '../providers/sidebar';
import { Cell, Container, Grid } from '@westpac/grid';
import { Heading } from '@westpac/heading';

const HomePageHeader = () => {
	const { BRAND, COLORS, SPACING, LAYOUT } = useBrand();
	const backgroundColor = brandHeaderColors[BRAND](COLORS);

	const main = useRef(null);

	return (
		<section
			ref={main}
			css={{
				color: BRAND === 'STG' ? COLORS.text : COLORS.light,
				paddingBottom: SPACING(12),
				position: 'relative',
				overflow: 'hidden',
				background: 'unset',
				[`@media only screen and (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
					background: backgroundColor,
				},
			}}
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
	const headerPaddingElement = useRef(null);
	useEffect(() => {
		const main = header.current.closest('main');
		const section = header.current.closest('section');
		const scrollHandler = () => {
			if (main.scrollTop >= 0 && main.scrollTop < 135) {
				// header.current.style.height = `${200 - main.scrollTop}px`;
				// header.current.style.marginTop = `${-50 + main.scrollTop}px`;
				// header.current.style.position = 'relative';
				// headerPaddingElement.current.style.height = '0px';
			} else {
				// headerPaddingElement.current.style.height = '200px';
				// header.current.style.height = '65px';
				// header.current.style.marginTop = '-50px';
				// header.current.style.position = 'fixed';
			}
			console.log(section.clientHeight, main.scrollTop);

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
	console.log('hasScrolled', hasScrolled);

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
						margin: `${SPACING(4)} ${SPACING(4)} ${SPACING(4)} -${SPACING(8)} !important`,
						padding: 0,
						background: 'none',
						border: 'none',
						cursor: 'pointer',
						zIndex: 3,
						position: 'fixed',
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
				<p
					css={{
						textAlign: 'left',
						margin: 0,
						marginTop: '-2px',
						padding: `${SPACING(4)} 0`,
						borderBottom: 0,
						width: '100%',
						[`@media only screen and (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
							borderBottom: hasScrolled ? 'none' : `1px solid ${COLORS.light}`,
						},
						[`@media only screen and (min-width: ${LAYOUT.breakpoints.xl}px)`]: {
							marginLeft: SPACING(7),
						},
					}}
				>
					<strong>UI</strong> Framework
				</p>
				<StickyHeaderImage brand={BRAND} hide={!hasScrolled} />
			</div>

			<div
				css={{
					flex: 'none',
					[`@media (max-width: ${LAYOUT.breakpoints.sm}px)`]: {
						height: '65px !important',
					},
				}}
				ref={headerPaddingElement}
			/>
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

			<p>{children}</p>
		</div>
	);
};

const HeroIntro = () => {
	const { SPACING, TYPE, COLORS, BRAND, LAYOUT } = useBrand();

	return (
		<Container
			css={{
				zIndex: 3,
				position: 'relative',
				paddingBottom: SPACING(10),
				overflow: 'hidden',
				marginTop: '81px',
				[`@media (max-width: ${LAYOUT.breakpoints.sm}px)`]: {
					color: COLORS.text,
				},
			}}
		>
			<Heading
				size={2}
				css={{
					paddingTop: SPACING(12),
					paddingBottom: SPACING(4),
					fontFamily: TYPE.brandFont.fontFamily,
					maxWidth: 600,
					fontWeight: 500,
					margin: '0 auto !important',
					zIndex: 3,
					[`@media (max-width: ${LAYOUT.breakpoints.sm}px)`]: {
						color: COLORS.hero,
					},
				}}
			>
				Design to scale with confidence
			</Heading>

			<p>Assemble enterprise solutions with our components and patterns</p>

			<Grid css={{ marginTop: SPACING(8) }}>
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
						Get to market faster by leveraging <br />
						our knowledge and tools
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
						Design, build and ship consistent, quality, <br />
						branded solutions
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
						Be more accessible and inclusive with our <br />
						assets
					</IconText>
				</Cell>
			</Grid>
		</Container>
	);
};

export default HomePageHeader;
