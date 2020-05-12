/** @jsx jsx */
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell, Container, Grid } from '@westpac/grid';
import { Button } from '@westpac/button';
import { Heading } from '@westpac/heading';
import { Body } from '@westpac/body';
import { TextInput } from '@westpac/text-input';
import HomePageHeader from '../../components/header/home-page-header';
import { Footer } from '../../components/layout/footer';
import {
	ReactLogo,
	AtlassianLogo,
	AxureLogo,
	FacebookLogo,
	GithubLogo,
	GovLogo,
	IbmLogo,
	MyobLogo,
	ShopifyLogo,
	SketchLogo,
	MicrosoftLogo,
	TwitterLogo,
} from '../../components/symbols';

const Homepage = () => {
	const { COLORS, SPACING } = useBrand();
	const mq = useMediaQuery();

	return (
		<div css={{ textAlign: 'center', lineHeight: 2 }}>
			<HomePageHeader />
			<section>
				<Container
					fluid
					css={{
						maxWidth: '60rem',
						margin: '0 auto',
					}}
				>
					<Grid columns={12} css={mq({ padding: [`${SPACING(7)} 0`, `${SPACING(15)} 0`] })}>
						<Cell width={[10, 12, 10, 10]} left={[2, 1, 2, 2]}>
							<Heading tag="h2" size={5}>
								Accessibility is in everything we do
							</Heading>
							<Body css={{ marginBottom: SPACING(3), marginTop: SPACING(4) }}>
								Accessibility and inclusive design is a strong part of how we design in the Design
								Quality team.
							</Body>

							<Body css={{ margin: `${SPACING(3)} 0` }}>
								We delve into the detail and pressure test solutions against the latest WCAG
								requirements, delivering the most accessible components and patterns possible. We
								then guide teams further along the path of accessibility. Read more about our
								commitment to accessibility.
							</Body>
							<a href="" css={{ margin: `${SPACING(3)} 0`, color: COLORS.primary }}>
								Read more about our commitment to accessibility
							</a>
						</Cell>
					</Grid>
				</Container>
			</section>
			<section
				css={{
					background: COLORS.background,
				}}
			>
				<Container
					fluid
					css={{
						maxWidth: '60rem',
						margin: '0 auto',
					}}
				>
					<Grid
						columns={12}
						css={mq({
							paddingTop: [SPACING(5), SPACING(10)],
							paddingBottom: [SPACING(7), SPACING(15)],
						})}
					>
						<Cell width={[10, 12, 10, 10]} left={[2, 1, 2, 2]}>
							<ReactLogo size={'60px'} />
							<Heading tag="h2" size={5} css={{ padding: `${SPACING(3)} 0` }}>
								Built on React
							</Heading>
							<Body css={{ marginTop: SPACING(1), marginBottom: 0 }}>
								We're moving with the times. With React we can showcase so much more and deliver
								higher quality, more accessible code.
							</Body>

							<Heading
								tag="h3"
								size={7}
								css={mq({
									borderBottom: `1px solid ${COLORS.text}`,
									paddingBottom: SPACING(3),
									paddingTop: [SPACING(5), SPACING(7)],
								})}
							>
								Who else is using React?
							</Heading>
						</Cell>
						<Cell width={[10, 12, 10, 10]} left={[2, 1, 2, 2]}>
							<Grid columns={12}>
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
							<Grid css={{ marginTop: SPACING(3) }} columns={12}>
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
						</Cell>
					</Grid>
				</Container>
			</section>
			<section>
				<Container
					fluid
					css={{
						maxWidth: '60rem',
						margin: '0 auto',
					}}
				>
					<Grid columns={12} css={mq({ padding: [`${SPACING(7)} 0`, `${SPACING(15)} 0`] })}>
						<Cell width={[10, 12, 10, 10]} left={[2, 1, 2, 2]}>
							<Heading tag="h2" size={5}>
								Subscribe to our updates
							</Heading>
							<Body
								css={mq({
									margin: [`${SPACING(3)} 0 ${SPACING(2)} 0`, `${SPACING(4)} 0`],
								})}
							>
								Get news about components, code chages, new resources, and helpful tips.
							</Body>
						</Cell>
						<Cell width={[10, 12, 10, 10]} left={[2, 1, 2, 2]}>
							<form
								action="//westpac.us11.list-manage.com/subscribe/post?u=d3cf7e940bf311ace99e397b7&amp;id=c78955f1b4"
								method="post"
								id="mc-embedded-subscribe-form"
								name="mc-embedded-subscribe-form"
								target="_blank"
								noValidate=""
							>
								<Grid
									columns={12}
									style={{
										maxWidth: '25rem',
										margin: '0 auto',
										textAlign: 'start',
									}}
								>
									<Cell width={[12, 8]} left={1}>
										<label css={{ marginTop: SPACING(1) }} htmlFor="mce-EMAIL">
											Enter your e-mail address
										</label>
										<TextInput type="text" name="EMAIL" id="mce-EMAIL" />
									</Cell>
									<Cell width={[12, 4]} style={{ display: 'flex', alignItems: 'flex-end' }}>
										<Button
											type="submit"
											look="primary"
											name="subscribe"
											id="mc-embedded-subscribe"
											style={{
												width: '100%',
											}}
										>
											Subscribe
										</Button>
									</Cell>
								</Grid>
							</form>
						</Cell>
					</Grid>
				</Container>
			</section>

			<section
				css={{
					background: COLORS.background,
				}}
			>
				<Container
					fluid
					css={{
						maxWidth: '60rem',
						margin: '0 auto',
					}}
				>
					<Grid columns={12} css={mq({ padding: [`${SPACING(7)} 0`, `${SPACING(15)} 0`] })}>
						<Cell width={[10, 12, 10, 10]} left={[2, 1, 2, 2]}>
							<Heading tag="h2" size={5}>
								Downloads & links
							</Heading>
							<Body
								css={mq({
									margin: [`${SPACING(3)} 0 ${SPACING(5)} 0`, `${SPACING(4)} 0 ${SPACING(7)} 0`],
								})}
							>
								Get the Sketch UI or Axure kit to start designing. Visit Git to get the latest code
								and development framework.
							</Body>
							<DownloadAndLinksSection />
						</Cell>
					</Grid>
				</Container>
			</section>
			<Footer />
		</div>
	);
};

export default Homepage;

const DownloadAndLinksSection = () => {
	const { SPACING, COLORS } = useBrand();
	const mq = useMediaQuery();

	return (
		<div
			css={{
				paddingBottom: SPACING(12),
				marginBottom: SPACING(3),
				textAlign: 'left',
			}}
		>
			<Grid columns={13}>
				<Cell width={[13, 6]}>
					<Heading
						tag="h3"
						size={7}
						css={{
							borderBottom: `1px solid ${COLORS.text}`,
							paddingBottom: SPACING(3),
							marginBottom: SPACING(2),
						}}
					>
						Downloads
					</Heading>
					<div
						css={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							height: '72px',
							borderBottom: `1px solid ${COLORS.border}`,
							marginTop: SPACING(2),
						}}
					>
						Sketch UI Kit Download <SketchLogo size="50px" />
					</div>
					<div
						css={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							height: '72px',
							borderBottom: `1px solid ${COLORS.border}`,
						}}
					>
						Axure UI Kit Download <AxureLogo size="70px" />
					</div>
				</Cell>
				<Cell width={[0, 1]} />
				<Cell width={[13, 6]}>
					<Heading
						tag="h3"
						size={7}
						css={mq({
							borderBottom: `1px solid ${COLORS.text}`,
							paddingBottom: SPACING(3),
							paddingTop: [SPACING(4), 0],
							marginBottom: SPACING(2),
						})}
					>
						Links
					</Heading>
					<div
						css={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							height: '72px',
							borderBottom: `1px solid ${COLORS.border}`,
							marginTop: SPACING(2),
						}}
					>
						Go to GitHub <GithubLogo size="50px" />
					</div>
				</Cell>
			</Grid>
		</div>
	);
};
