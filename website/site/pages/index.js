/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, useBrand } from '@westpac/core';
import { Cell, Container, Grid } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import { LightBulbIcon, MapIcon, UmbrellaIcon } from '@westpac/icon';

const Homepage = () => {
	const { COLORS, PACKS, SPACING, TYPE } = useBrand();

	console.log({ TYPE });
	return (
		<Fragment>
			<section
				css={{
					background: COLORS.primary,
					color: COLORS.light,
					padding: `${SPACING(12)} 0`,
				}}
			>
				<Container>
					<Heading size={1} css={{ fontFamily: TYPE.brandFont.fontFamily }}>
						Design to scale with confidence
					</Heading>

					<p>Assemble enterprise solutions with our components and patterns</p>

					<Grid css={{ marginTop: SPACING(8) }}>
						<Cell width={4}>
							<IconText icon={UmbrellaIcon}>
								Get to market faster by leveraging our knowledge and tools
							</IconText>
						</Cell>
						<Cell width={4}>
							<IconText icon={LightBulbIcon}>
								Design, build and ship consistent, quality, branded solutions
							</IconText>
						</Cell>
						<Cell width={4}>
							<IconText icon={MapIcon}>Be more accessible and inclusive with our assets</IconText>
						</Cell>
					</Grid>
				</Container>
			</section>

			<section css={{ padding: `${SPACING(8)} 0` }}>
				<Container>
					<Heading size={2}>Accessibility is in everything we do</Heading>
					<p>
						Accessibility and inclusive design is a strong part of how we design in the Design
						Quality team. We delve into the detail and pressure test solutions against the latest
						WCAG requirements, delivering the most accessible components and patterns possible. We
						then guide teams further along the path of accessibility. Read more about our commitment
						to accessibility
					</p>
				</Container>
			</section>

			<section css={{ background: COLORS.background, padding: `${SPACING(8)} 0` }}>
				<Container>
					<Heading size={2}>Built on React</Heading>
					<p>
						We're moving with the times. With React we can showcase so much more and deliver higher
						quality, more accessible code.
					</p>

					<Heading size={3}>Who else is using React?</Heading>
				</Container>
			</section>

			<section css={{ padding: `${SPACING(8)} 0` }}>
				<Container>
					<Heading size={2}>Subscribe to our update</Heading>
					<p>Get news about components, code chages, new resources, and helpful tips</p>
				</Container>
			</section>

			<section css={{ background: COLORS.background, padding: `${SPACING(8)} 0` }}>
				<Container>
					<Heading size={2}>Downloads & links</Heading>
					<p>
						Get the Sketch UI or Axure kit to start designing. Visit Git to get the latest code and
						development framework
					</p>
				</Container>
			</section>
		</Fragment>
	);
};

const IconText = ({ icon: Icon, children }) => {
	const { COLORS } = useBrand();
	return (
		<div css={{ textAlign: 'center' }}>
			<Icon size="xlarge" color={COLORS.light} />
			<p>{children}</p>
		</div>
	);
};

export default Homepage;
