/** @jsx jsx */
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import React, { useEffect, useState, useRef, Fragment } from 'react';
import { HamburgerMenuIcon } from '@westpac/icon';
import { Body } from '@westpac/body';
import { Cell, Container, Grid } from '@westpac/grid';
import { BrandHeading } from '@westpac/heading';
import HeaderImage from './home-page-header-image';
import StickyHeaderImage from './sticky-header-image';
import { brandHeaderStyling, brandIconHighlightColors } from '../_utils';
import { AccessibilitySvg, StopwatchSvg, TruckSvg } from '../symbols';
import { useSidebar } from '../providers/sidebar';

const HomePageHeader = () => {
	const { BRAND, COLORS, SPACING } = useBrand();
	const headerStyling = brandHeaderStyling[BRAND](COLORS);
	const mq = useMediaQuery();
	const main = useRef(null);

	return (
		<section
			ref={main}
			css={mq({
				position: 'relative',
				overflow: 'hidden',
				paddingTop: [SPACING(14), SPACING(18)],
				paddingBottom: [SPACING(7), SPACING(11)],
				background: [null, null, headerStyling.background],
				color: [null, null, headerStyling.color],
			})}
		>
			<HeaderImage brand={BRAND} aria-hidden="true" />
			<StickyHeader mainRef={main} />
			<HeroIntro />
		</section>
	);
};

const StickyHeader = () => {
	const { COLORS, SPACING, BRAND, LAYOUT } = useBrand();
	const mq = useMediaQuery();
	const { isOpen, setIsOpen } = useSidebar();
	const headerStyling = brandHeaderStyling[BRAND](COLORS);
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
				css={mq({
					boxSizing: 'border-box',
					display: 'flex',
					alignItems: 'center',
					position: ['fixed', null, !hasScrolled && 'absolute'],
					zIndex: 9,
					top: 0,
					left: 0,
					right: 0,
					height: 66,
					marginLeft: [null, null, null, null, hasScrolled && 300],
					paddingLeft: [72, null, null, null, 60], //66px (button) + 6px (gap),
					background: [headerStyling.background, null, !hasScrolled && 'unset'],
					color: headerStyling.color,
					fontSmooth: 'always',
					boxShadow: ['0 2px 5px rgba(0,0,0,0.3)', null, !hasScrolled && 'none'],
					overflow: 'hidden',
				})}
			>
				<button
					type="button"
					css={mq({
						display: ['flex', null, null, null, 'none'],
						alignItems: 'center',
						justifyContent: 'center',

						background: 'none',
						border: 'none',
						cursor: 'pointer',

						position: 'fixed',
						zIndex: 3,
						top: 0,
						left: 0,
						height: 66,
						width: 66,
						margin: [null, null, SPACING(2)],
						padding: 0,
					})}
					onClick={() => setIsOpen(!isOpen)}
				>
					<HamburgerMenuIcon color={BRAND === 'STG' ? COLORS.text : '#fff'} />
				</button>
				<p
					css={mq({
						boxSizing: 'border-box',
						display: 'flex',
						alignItems: 'center',
						borderBottom: [null, null, hasScrolled ? 0 : '1px solid rgba(255,255,255,0.7)'],
						zIndex: 6,
						height: '100%',
						flex: 1,
						margin: 0,
					})}
				>
					Design<strong>System</strong>
				</p>

				<StickyHeaderImage brand={BRAND} hide={!hasScrolled} aria-hidden="true" />
			</div>
		</Fragment>
	);
};

const IconText = ({ icon, iconMobile, children }) => {
	const mq = useMediaQuery();
	const { LAYOUT, SPACING, PACKS } = useBrand();
	return (
		<Body
			css={{ textAlign: 'center' }}
			overrides={{
				Body: {
					styles: (styles) => ({
						...styles,
						p: {
							margin: 0,
							...PACKS.typeScale.bodyFont[8],
						},
					}),
				},
			}}
		>
			<div
				css={{
					display: 'none',
					[`@media (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
						display: 'inline-block',
					},
				}}
				aria-hidden="true"
			>
				{icon}
			</div>
			<div
				css={{
					display: 'inline-block',
					[`@media (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
						display: 'none',
					},
				}}
				aria-hidden="true"
			>
				{iconMobile}
			</div>
			<p
				css={mq({
					marginTop: [`${SPACING(3)} !important`, `${SPACING(4)} !important`],
				})}
			>
				{children}
			</p>
		</Body>
	);
};

const HeroIntro = () => {
	const { SPACING, COLORS, BRAND, PACKS } = useBrand();
	const mq = useMediaQuery();

	return (
		<Container
			css={mq({
				zIndex: 3,
				position: 'relative',
			})}
		>
			<Grid>
				<Cell width={[10, 12, 8]} left={[2, 1, 3]}>
					<Body>
						<BrandHeading
							tag="h1"
							size={[4, null, 1]}
							css={mq({
								color: [null, null, `inherit !important`],
							})}
						>
							Design to scale with confidence
						</BrandHeading>
					</Body>
				</Cell>
			</Grid>
			<Grid css={mq({ marginTop: [SPACING(4), SPACING(6)] })}>
				<Cell width={10} left={2}>
					<p
						css={mq({
							margin: 0,
							...PACKS.typeScale.bodyFont[8],
						})}
					>
						Assemble enterprise solutions with our components and patterns
					</p>
				</Cell>
			</Grid>
			<Grid
				rowGap={[24, 'normal']}
				columnGap={[null, 30]}
				css={mq({ marginTop: [SPACING(4), SPACING(10)] })}
			>
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
		</Container>
	);
};

export default HomePageHeader;
