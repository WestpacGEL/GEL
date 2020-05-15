/** @jsx jsx */
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell, Container, Grid } from '@westpac/grid';
import { Button } from '@westpac/button';
import { Heading } from '@westpac/heading';
import { TextInput } from '@westpac/text-input';
import HomePageHeader from '../../components/header/home-page-header';
import { Section } from '../../components/layout/section';
import { RichText } from '../../components/rich-text/rich-text';
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

	const sectionPadding = {
		paddingTop: [SPACING(7), '5.625rem'],
		paddingBottom: [SPACING(7), '5.625rem'],
	};

	return (
		<div css={{ textAlign: 'center' }}>
			<HomePageHeader />
			<Section>
				<Container>
					<Grid>
						<Cell width={[10, 12, 10]} left={[2, 1, 2]}>
							<RichText>
								<h2>Accessibility is in everything we do</h2>
								<p>
									Accessibility and inclusive design is a strong part of how we design in the Design
									Quality team.
								</p>
								<p>
									We delve into the detail and pressure test solutions against the latest WCAG
									requirements, delivering the most accessible components and patterns possible. We
									then guide teams further along the path of accessibility. Read more about our
									commitment to accessibility.
								</p>
								<p>
									Read more about{' '}
									<a href="#0" css={{ margin: `${SPACING(3)} 0`, color: COLORS.primary }}>
										our commitment to accessibility
									</a>
								</p>
							</RichText>
						</Cell>
					</Grid>
				</Container>
			</Section>

			<Section bgFill>
				<Container>
					<Grid>
						<Cell width={[10, 12, 10]} left={[2, 1, 2]}>
							<RichText>
								<ReactLogo size={'60px'} aria-hidden="true" css={{ marginBottom: '12px' }} />
								<h2>Built on React</h2>
								<p>
									We're moving with the times. With React we can showcase so much more and deliver
									higher quality, more accessible code.
								</p>
								<h3>Who else is using React?</h3>
							</RichText>

							<div
								css={{
									borderTop: `1px solid ${COLORS.neutral}`,
									paddingBottom: SPACING(5),
								}}
							>
								<Grid>
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
								<Grid css={{ marginTop: SPACING(3) }}>
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
							</div>
						</Cell>
					</Grid>
				</Container>
			</Section>

			<Section>
				<Container>
					<Grid>
						<Cell width={[10, 12, 10]} left={[2, 1, 2]}>
							<RichText>
								<h2>Subscribe to our updates</h2>
								<p>Get news about components, code chages, new resources, and helpful tips.</p>
							</RichText>

							<form
								action="//westpac.us11.list-manage.com/subscribe/post?u=d3cf7e940bf311ace99e397b7&amp;id=c78955f1b4"
								method="post"
								id="mc-embedded-subscribe-form"
								name="mc-embedded-subscribe-form"
								target="_blank"
								noValidate=""
							>
								<Grid
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
			</Section>

			<Section bgFill>
				<Container>
					<Grid>
						<Cell width={[10, 12, 10]} left={[2, 1, 2]}>
							<RichText>
								<h2>Downloads & links</h2>
								<p>
									Get the Sketch UI or Axure kit to start designing. Visit Git to get the latest
									code and development framework.
								</p>
							</RichText>
							<DownloadAndLinksSection css={{ marginTop: '42px' }} />
						</Cell>
					</Grid>
				</Container>
			</Section>
			<Footer />
		</div>
	);
};

export default Homepage;

const DownloadAndLinksSection = (props) => {
	const { SPACING, COLORS } = useBrand();
	const mq = useMediaQuery();

	return (
		<div
			css={{
				textAlign: 'left',
			}}
			{...props}
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
				<Cell width={[13, 6]} left={[0, 8]} css={mq({ marginTop: ['24px', 0] })}>
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
