/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { HamburgerMenuIcon } from '@westpac/icon';
import HeaderImage from './home-page-header-image';
import { brandHeaderColors } from '../pages/single-component/_utils';
import { AccessibilitySvg, StopwatchSvg, TruckSvg } from './symbols';
import { useSidebar } from '../providers/sidebar';
import { Cell, Container, Grid } from '@westpac/grid';
import { Heading } from '@westpac/heading';

const HomePageHeader = () => {
	const { BRAND, COLORS, SPACING, LAYOUT } = useBrand();
	const backgroundColor = brandHeaderColors[BRAND](COLORS);
	return (
		<section
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
			<Header />
			<HeroIntro />
		</section>
	);
};

const Header = () => {
	const { COLORS, SPACING, BRAND, LAYOUT } = useBrand();
	const { isOpen, setIsOpen } = useSidebar();
	const backgroundColor = brandHeaderColors[BRAND](COLORS);
	return (
		<div
			css={{
				display: 'flex',
				alignItems: 'center',
				zIndex: 9,
				position: 'relative',
				background: backgroundColor,
				[`@media only screen and (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
					background: 'unset',
				},
			}}
		>
			<button
				css={{
					display: 'block',
					margin: `${SPACING(4)} !important`,
					padding: 0,
					background: 'none',
					border: 'none',
					cursor: 'pointer',
					zIndex: 3,
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
					padding: `${SPACING(4)} 0`,
					borderBottom: 0,
					width: '100%',
					[`@media only screen and (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
						borderBottom: `1px solid ${COLORS.light}`,
					},
					[`@media only screen and (min-width: ${LAYOUT.breakpoints.xl}px)`]: {
						marginLeft: SPACING(7),
					},
				}}
			>
				<strong>UI</strong> Framework
			</p>
		</div>
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
								highlightColor={COLORS.hero}
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
								highlightColor={COLORS.hero}
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
								highlightColor={COLORS.hero}
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
