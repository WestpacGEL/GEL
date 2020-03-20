/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Cell, Container, Grid } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import { HamburgerMenuIcon, LightBulbIcon, MapIcon, UmbrellaIcon } from '@westpac/icon';
import HeaderImageRight from '../components/symbols/HeaderImageRight';

import { useSidebar } from '../components/providers/sidebar';

const Homepage = () => {
	const { COLORS, SPACING } = useBrand();

	return (
		<div css={{ textAlign: 'center' }}>
			<section
				css={{
					background: COLORS.primary,
					color: COLORS.light,
					paddingBottom: SPACING(12),
					position: 'relative',
				}}
			>
				<Header />
				<HeroIntro />

				<div
					css={{
						position: 'absolute',
						right: 0,
						top: 0,
						bottom: 0,
					}}
				>
					<HeaderImageRight height="100%" />
				</div>
			</section>

			<section css={{ padding: `${SPACING(12)} 0` }}>
				<Container>
					<Heading tag="h2" size={4}>
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

/* 
  Styled components
*/

const IconText = ({ icon: Icon, children }) => {
	const { COLORS } = useBrand();
	return (
		<div css={{ textAlign: 'center' }}>
			<Icon size="xlarge" color={COLORS.light} />
			<p>{children}</p>
		</div>
	);
};

const Header = () => {
	const { COLORS, SPACING } = useBrand();
	const { isOpen, setIsOpen } = useSidebar();
	return (
		<div
			css={{
				display: 'flex',
				alignItems: 'center',
				padding: SPACING(2),
				zIndex: 3,
				position: 'relative',
			}}
		>
			<button
				css={{
					marginRight: SPACING(2),
					background: 'none',
					border: 'none',
					cursor: 'pointer',
					'@media only screen and (min-width: 840px)': {
						display: 'none',
					},
				}}
				onClick={() => setIsOpen(status => !status)}
			>
				<HamburgerMenuIcon color={COLORS.light} />
			</button>
			<p
				css={{
					textAlign: 'left',
					margin: 0,
					padding: 0,
				}}
			>
				UI Framework
			</p>
		</div>
	);
};

const HeroIntro = () => {
	const { SPACING, TYPE } = useBrand();
	return (
		<Container css={{ zIndex: 3, position: 'relative' }}>
			<Heading
				size={1}
				css={{
					paddingTop: SPACING(12),
					fontFamily: TYPE.brandFont.fontFamily,
					maxWidth: 600,
					fontWeight: 500,
					margin: '0 auto',
					zIndex: 3,
				}}
			>
				Design to scale with confidence
			</Heading>

			<p>Assemble enterprise solutions with our components and patterns</p>

			<Grid css={{ marginTop: SPACING(8) }}>
				<Cell width={4}>
					<IconText icon={UmbrellaIcon}>
						Get to market faster by leveraging <br />
						our knowledge and tools
					</IconText>
				</Cell>
				<Cell width={4}>
					<IconText icon={LightBulbIcon}>
						Design, build and ship consistent, quality, <br />
						branded solutions
					</IconText>
				</Cell>
				<Cell width={4}>
					<IconText icon={MapIcon}>
						Be more accessible and inclusive with our <br />
						assets
					</IconText>
				</Cell>
			</Grid>
		</Container>
	);
};

export default Homepage;
