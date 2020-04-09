/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Cell, Container, Grid } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import HomePageHeader from '../components/header/home-page-header';

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

			<section css={{ padding: `${SPACING(14)} 0` }}>
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

export default Homepage;

const SectionHeading = () => {
	<section>{PropsTable.children}</section>;
};
