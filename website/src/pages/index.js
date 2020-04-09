/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Cell, Container, Grid } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import HomePageHeader from '../components/header/home-page-header';
import {
	ReactLogo,
	AtlassianLogo,
	FacebookLogo,
	GovLogo,
	IbmLogo,
	MyobLogo,
	ShopifyLogo,
	MicrosoftLogo,
	TwitterLogo,
} from '../components/symbols';

const Homepage = () => {
	const { COLORS, SPACING, BRAND } = useBrand();

	return (
		<div css={{ textAlign: 'center', lineHeight: 2 }}>
			<HomePageHeader />

			<section css={{ padding: `${SPACING(14)} 0` }}>
				<Container>
					<Heading tag="h2" size={5}>
						Accessibility is in everything we do
					</Heading>
					<p css={{ marginBottom: SPACING(3), marginTop: SPACING(4) }}>
						Accessibility and inclusive design is a strong part of how we design in the Design
						Quality team.
					</p>

					<p css={{ margin: `${SPACING(3)} 0` }}>
						We delve into the detail and pressure test solutions against the latest WCAG
						requirements, delivering the most accessible components and patterns possible. We then
						guide teams further along the path of accessibility. Read more about our commitment to
						accessibility.
					</p>
					<a href="" css={{ margin: `${SPACING(3)} 0`, color: COLORS.primary }}>
						Read more about our commitment to accessibility
					</a>
				</Container>
			</section>

			<section css={{ background: COLORS.background, padding: `${SPACING(14)} 0` }}>
				<Container>
					<ReactLogo size={'100px'} />
					<Heading tag="h2" size={5} css={{ padding: `${SPACING(3)} 0` }}>
						Built on React
					</Heading>
					<p css={{ margin: `${SPACING(3)} 0` }}>
						We're moving with the times. With React we can showcase so much more and deliver higher
						quality, more accessible code.
					</p>

					<Heading
						tag="h3"
						size={7}
						css={{
							borderBottom: `1px solid ${COLORS.text}`,
							paddingBottom: SPACING(3),
							paddingTop: SPACING(6),
						}}
					>
						Who else is using React?
					</Heading>
				</Container>
				<Container>
					<Grid css={{ marginTop: SPACING(4) }}>
						<Cell css={{ paddingTop: SPACING(2) }} width={[12, 3]}>
							<GovLogo size={'113px'} />
						</Cell>
						<Cell css={{ paddingTop: SPACING(2) }} width={[12, 3]}>
							<MicrosoftLogo size={'127px'} />
						</Cell>
						<Cell css={{ paddingTop: SPACING(2) }} width={[12, 3]}>
							<MyobLogo size={'90px'} />
						</Cell>
						<Cell css={{ paddingTop: SPACING(2) }} width={[12, 3]}>
							<IbmLogo size={'77px'} />
						</Cell>
					</Grid>
					<Grid>
						<Cell css={{ paddingTop: SPACING(2) }} width={[12, 3]}>
							<AtlassianLogo size={'159px'} />
						</Cell>
						<Cell css={{ paddingTop: SPACING(2) }} width={[12, 3]}>
							<FacebookLogo size={'39px'} />
						</Cell>
						<Cell css={{ paddingTop: SPACING(2) }} width={[12, 3]}>
							<TwitterLogo size={'50px'} />
						</Cell>
						<Cell css={{ paddingTop: SPACING(2) }} width={[12, 3]}>
							<ShopifyLogo size={'138px'} />
						</Cell>
					</Grid>
				</Container>
			</section>

			<section css={{ padding: `${SPACING(14)} 0` }}>
				<Container>
					<Heading tag="h2" size={5}>
						Subscribe to our updates
					</Heading>
					<p>Get news about components, code chages, new resources, and helpful tips.</p>
				</Container>
			</section>

			<section css={{ background: COLORS.background, padding: `${SPACING(12)} 0` }}>
				<Container>
					<Heading tag="h2" size={5}>
						Downloads & links
					</Heading>
					<p>
						Get the Sketch UI or Axure kit to start designing. Visit Git to get the latest code and
						development framework.
					</p>
				</Container>
			</section>
		</div>
	);
};

export default Homepage;
