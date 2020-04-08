/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Cell, Container, Grid } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import { Body } from '@westpac/body';
import { HamburgerMenuIcon } from '@westpac/icon';
import HeaderImage from '../components/header/home-page-header-image';
import { brandHeaderColors } from '../components/pages/single-component/_utils';
import { AccessibilitySvg, StopwatchSvg, TruckSvg } from '../components/header/symbols';
import { useSidebar } from '../components/providers/sidebar';

const Homepage = () => {
	const { COLORS, SPACING, BRAND } = useBrand();
	const backgroundColor = brandHeaderColors[BRAND](COLORS);

	return (
		<div css={{ textAlign: 'center' }}>
			<section
				css={{
					background: backgroundColor,
					color: BRAND === 'STG' ? COLORS.text : COLORS.light,
					paddingBottom: SPACING(12),
					position: 'relative',
					overflow: 'hidden',
				}}
			>
				<HeaderImage brand={BRAND} />
				<Header />
				<HeroIntro />
			</section>

			<section css={{ padding: `${SPACING(12)} 0` }}>
				<Container>
					<Heading tag="h2" size={5}>
						Accessibility is in everything we do
					</Heading>
					<p>
						Accessibility and inclusive design is a strong part of how we design in the Design
						Quality team.
					</p>

					<p>
						We delve into the detail and pressure test solutions against the latest WCAG
						requirements, delivering the most accessible components and patterns possible. We then
						guide teams further along the path of accessibility. Read more about our commitment to
						accessibility.
					</p>
				</Container>
			</section>

			<section css={{ background: COLORS.background, padding: `${SPACING(12)} 0` }}>
				<Container>
					<Heading tag="h2" size={4}>
						Built on React
					</Heading>
					<p>
						We're moving with the times. With React we can showcase so much more and deliver higher
						quality, more accessible code.
					</p>

					<Heading tag="h3" size={5}>
						Who else is using React?
					</Heading>
				</Container>
			</section>

			<section css={{ padding: `${SPACING(12)} 0` }}>
				<Container>
					<Heading tag="h2" size={4}>
						Subscribe to our update
					</Heading>
					<p>Get news about components, code chages, new resources, and helpful tips</p>
				</Container>
			</section>

			<section css={{ background: COLORS.background, padding: `${SPACING(8)} 0` }}>
				<Container>
					<Heading tag="h2" size={4}>
						Downloads & links
					</Heading>
					<p>
						Get the Sketch UI or Axure kit to start designing. Visit Git to get the latest code and
						development framework
					</p>
				</Container>
			</section>
		</div>
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
				zIndex: 3,
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
					[`@media only screen and (min-width: ${LAYOUT.breakpoints.sm}px)`]: {
						margin: SPACING(2),
					},
					[`@media only screen and (min-width: ${LAYOUT.breakpoints.xl}px)`]: {
						display: 'none',
					},
				}}
				onClick={() => setIsOpen(status => !status)}
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
				<Cell width={4}>
					<IconText icon={StopwatchSvg} iconHighlightColor={COLORS.light}>
						Get to market faster by leveraging <br />
						our knowledge and tools
					</IconText>
				</Cell>
				<Cell width={4}>
					<IconText icon={TruckSvg}>
						Design, build and ship consistent, quality, <br />
						branded solutions
					</IconText>
				</Cell>
				<Cell width={4}>
					<IconText icon={AccessibilitySvg}>
						Be more accessible and inclusive with our <br />
						assets
					</IconText>
				</Cell>
			</Grid>
		</Container>
	);
};

export default Homepage;
