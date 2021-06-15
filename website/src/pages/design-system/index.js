/** @jsx jsx */
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell, Container, Grid } from '@westpac/grid';
import { TextInput } from '@westpac/text-input';
import { Button } from '@westpac/button';
import { Fragment } from 'react';

import { BlockList, BlockListItem, BlockListHeading } from '../../components/block-list';
import HomePageHeader from '../../components/header/home-page-header';
import { PageContextProvider } from '../../components/providers/pageContext';
import { Section, SectionHeading } from '../../components/section';
import { Footer } from '../../components/layout';
import { Head } from '../../components/head';
import { Body } from '../../components/body';
import {
	ReactLogo,
	AtlassianLogo,
	FacebookLogo,
	GitHubLogo,
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
		<Fragment>
			<Head />
			<PageContextProvider>
				<main
					id="content"
					css={{
						textAlign: 'center',
					}}
				>
					<HomePageHeader />
					<div>
						<Section paddingTop="large" paddingBottom="large" light>
							<Container>
								<SectionHeading tag="h2" tight>
									Accessible by design
								</SectionHeading>
								<Grid>
									<Cell width={[10, 12, 10]} left={[2, 1, 2]}>
										<Body>
											<p>
												Accessibility and inclusive design is a strong part of the GEL Design
												System.
											</p>
											<p>
												The system supports teams to deliver to the Group accessibility commitment,
												to provide meaningful banking experiences to all customers.
											</p>
											<p>
												Solutions have been thought about in detail and pressure tested against the
												latest WCAG recommendations, delivering the most accessible components and
												patterns possible.
											</p>
											<p>
												The Design Quality team can then guide teams further along the path of
												accessibility.
											</p>
										</Body>
									</Cell>
								</Grid>
							</Container>
						</Section>

						<Section paddingTop="large" paddingBottom="large">
							<Container>
								<SectionHeading tag="h2" tight symbol={ReactLogo}>
									Built on React
								</SectionHeading>
								<Grid>
									<Cell width={[10, 12, 10]} left={[2, 1, 2]}>
										<Body>
											<p>
												The GEL Design System is now using React. You can still access HTML/CSS but
												with React at its core we can showcase so much more and deliver even
												higher-quality, more accessible code.
											</p>
										</Body>
										<Body css={mq({ marginTop: [SPACING(5), null, SPACING(7)] })}>
											<h3>Who else is using React?</h3>
										</Body>

										<div
											css={{
												borderTop: `1px solid ${COLORS.neutral}`,
												paddingTop: SPACING(5),
											}}
										>
											<Grid rowGap={[SPACING(4), null, SPACING(7)]} css={{ alignItems: 'center' }}>
												<Cell width={[12, 6, 3]}>
													<GovLogo width={113} />
												</Cell>
												<Cell width={[12, 6, 3]}>
													<MicrosoftLogo width={127} />
												</Cell>
												<Cell width={[12, 6, 3]}>
													<MyobLogo width={90} />
												</Cell>
												<Cell width={[12, 6, 3]}>
													<IbmLogo width={77} />
												</Cell>
												<Cell width={[12, 6, 3]}>
													<AtlassianLogo width={159} />
												</Cell>
												<Cell width={[12, 6, 3]}>
													<FacebookLogo width={39} />
												</Cell>
												<Cell width={[12, 6, 3]}>
													<TwitterLogo width={50} />
												</Cell>
												<Cell width={[12, 6, 3]}>
													<ShopifyLogo width={138} />
												</Cell>
											</Grid>
										</div>
									</Cell>
								</Grid>
							</Container>
						</Section>

						<Section paddingTop="large" paddingBottom="large" light>
							<Container>
								<SectionHeading tight>Subscribe to GEL updates</SectionHeading>
								<Grid>
									<Cell width={[10, 12, 10]} left={[2, 1, 2]}>
										<Body>
											<p>
												Get the latest brand and component updates as well as access to new
												resources and helpful tips.
											</p>
										</Body>

										<form
											action="//westpac.us11.list-manage.com/subscribe/post?u=d3cf7e940bf311ace99e397b7&amp;id=c78955f1b4"
											method="post"
											id="mc-embedded-subscribe-form"
											name="mc-embedded-subscribe-form"
											target="_blank"
											noValidate=""
											css={mq({ marginTop: [SPACING(5), null, SPACING(7)] })}
										>
											<Grid rowGap={[SPACING(3), null, 'unset']} css={{ textAlign: 'left' }}>
												<Cell width={[10, null, 5, 4]} left={[2, null, 3, 4]}>
													<label
														htmlFor="mce-EMAIL"
														css={{
															display: 'inline-block',
															width: '100%',
															marginBottom: SPACING(2),
														}}
													>
														Enter your e-mail address
													</label>
													<TextInput
														type="email"
														size="large"
														name="EMAIL"
														id="mce-EMAIL"
														autoComplete="email"
													/>
												</Cell>
												<Cell
													width={[10, null, 2]}
													left={[2, null, 'auto']}
													css={{ display: 'flex', alignItems: 'flex-end' }}
												>
													<Button
														type="submit"
														look="primary"
														size="large"
														block={[true, null, false]}
														name="subscribe"
														id="mc-embedded-subscribe"
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

						<Section paddingTop="large" paddingBottom="large">
							<Container>
								<SectionHeading tight>Downloads &amp; links</SectionHeading>
								<Grid>
									<Cell width={[10, 12, 10]} left={[2, 1, 2]}>
										<Body>
											<p>
												Design on-brand with greater efficiency and accuracy using the Sketch UI
												Kit.
											</p>
											<p>
												Visit GitHub to follow Westpac GEL Design System code updates and log
												issues.
											</p>
										</Body>
									</Cell>
								</Grid>
								<DownloadsAndLinks css={mq({ marginTop: [SPACING(5), null, SPACING(7)] })} />
							</Container>
						</Section>
					</div>
					<Footer />
				</main>
			</PageContextProvider>
		</Fragment>
	);
};

export default Homepage;

const DownloadsAndLinks = (props) => {
	const { SPACING } = useBrand();
	const mq = useMediaQuery();

	return (
		<Grid
			rowGap={[24, 'normal']}
			columnGap={[null, SPACING(5), SPACING(8), SPACING(10)]}
			css={{ textAlign: 'left' }}
			{...props}
		>
			<Cell width={[10, 6, null, 5]} left={[2, 'auto', null, 2]}>
				<BlockListHeading>Downloads</BlockListHeading>
				<BlockList
					css={mq({
						marginTop: [null, null, SPACING(2)],
					})}
				>
					<BlockListItem href="/resources/design/sketch-ui-kit" logo={SketchLogo}>
						Sketch UI Kit
					</BlockListItem>
				</BlockList>
			</Cell>
			<Cell width={[10, 6, null, 5]} left={[2, 'auto']}>
				<BlockListHeading>Links</BlockListHeading>
				<BlockList
					css={mq({
						marginTop: [null, null, SPACING(2)],
					})}
				>
					<BlockListItem href="https://github.com/WestpacGEL/GEL" target="_blank" logo={GitHubLogo}>
						Follow Westpac GEL on GitHub
					</BlockListItem>
				</BlockList>
			</Cell>
		</Grid>
	);
};
