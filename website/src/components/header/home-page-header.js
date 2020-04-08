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
	const { BRAND, COLORS, SPACING } = useBrand();
	const backgroundColor = brandHeaderColors[BRAND](COLORS);
	return (
		<section
			css={{
				background: backgroundColor,
				color: BRAND === 'STG' ? COLORS.text : COLORS.light,
				paddingBottom: SPACING(12),
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<Header />
			<HeroIntro />
		</section>
	);
};

const Header = () => {
	const { COLORS, SPACING, BRAND, LAYOUT } = useBrand();
	const { isOpen, setIsOpen } = useSidebar();
	return (
		<div
			css={{
				display: 'flex',
				alignItems: 'center',
				zIndex: 9,
				position: 'relative',
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
					padding: `${SPACING(3)} 0`,
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

const IconText = ({ icon: Icon, children, iconHighlightColor = 'none' }) => {
	const { COLORS } = useBrand();
	return (
		<div css={{ textAlign: 'center' }}>
			<Icon
				size="90px"
				outlineColor={COLORS.light}
				highlightOutlineColor={COLORS.light}
				highlightColor={iconHighlightColor}
			/>
			<p>{children}</p>
		</div>
	);
};

const HeroIntro = () => {
	const { SPACING, TYPE, COLORS, BRAND } = useBrand();
	return (
		<Container css={{ zIndex: 3, position: 'relative' }}>
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
				}}
			>
				Design to scale with confidence
			</Heading>

			<p>Assemble enterprise solutions with our components and patterns</p>

			<Grid css={{ marginTop: SPACING(8) }}>
				<Cell width={[12, 4]}>
					<IconText icon={StopwatchSvg} iconHighlightColor={COLORS.light}>
						Get to market faster by leveraging <br />
						our knowledge and tools
					</IconText>
				</Cell>
				<Cell width={[12, 4]}>
					<IconText icon={TruckSvg}>
						Design, build and ship consistent, quality, <br />
						branded solutions
					</IconText>
				</Cell>
				<Cell width={[12, 4]}>
					<IconText icon={AccessibilitySvg}>
						Be more accessible and inclusive with our <br />
						assets
					</IconText>
				</Cell>
			</Grid>
			<HeaderImage brand={BRAND} />
		</Container>
	);
};

export default HomePageHeader;
