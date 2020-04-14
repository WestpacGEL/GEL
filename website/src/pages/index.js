/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Cell, Container, Grid } from '@westpac/grid';
import { Button } from '@westpac/button';
import { Heading } from '@westpac/heading';
import { TextInput } from '@westpac/text-input';
import HomePageHeader from '../components/header/home-page-header';
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
} from '../components/symbols';

const Homepage = () => {
	const { COLORS, SPACING, BRAND } = useBrand();

	return (
		<div css={{ textAlign: 'center', lineHeight: 2 }}>
			<HomePageHeader />
			<section css={{ padding: `${SPACING(14)} 0` }}>
				<Container
					css={{
						maxWidth: '60rem',
						margin: '0 auto',
					}}
				>
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

			<section
				css={{
					background: COLORS.background,
					padding: `${SPACING(14)} 0`,
				}}
			>
				<Container
					css={{
						maxWidth: '60rem',
						margin: '0 auto',
					}}
				>
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
							paddingBottom: SPACING(4),
							paddingTop: SPACING(6),
						}}
					>
						Who else is using React?
					</Heading>

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
				<Container
					css={{
						maxWidth: '60rem',
						margin: '0 auto',
					}}
				>
					<Heading tag="h2" size={5} css={{ padding: `${SPACING(3)} 0` }}>
						Subscribe to our updates
					</Heading>
					<p>Get news about components, code chages, new resources, and helpful tips.</p>
					<form
						action="//westpac.us11.list-manage.com/subscribe/post?u=d3cf7e940bf311ace99e397b7&amp;id=c78955f1b4"
						method="post"
						id="mc-embedded-subscribe-form"
						name="mc-embedded-subscribe-form"
						target="_blank"
						novalidate=""
					>
						<Grid
							columns={12}
							style={{ maxWidth: '25rem', margin: '2rem auto', textAlign: 'start' }}
						>
							<Cell width={[12, 8]}>
								<label htmlFor="mce-EMAIL">Enter your e-mail address</label>
								<TextInput type="text" name="EMAIL" id="mce-EMAIL" />
							</Cell>
							<Cell width={[12, 4]} style={{ display: 'flex', alignItems: 'flex-end' }}>
								<Button type="submit" name="subscribe" id="mc-embedded-subscribe">
									Subscribe
								</Button>
							</Cell>
						</Grid>
					</form>
				</Container>
			</section>

			<section
				css={{
					background: COLORS.background,
					padding: `${SPACING(12)} 0`,
				}}
			>
				<Container
					css={{
						maxWidth: '60rem',
						margin: '0 auto',
					}}
				>
					<Heading tag="h2" size={5}>
						Downloads & links
					</Heading>
					<p>
						Get the Sketch UI or Axure kit to start designing. Visit Git to get the latest code and
						development framework.
					</p>
					<DownloadAndLinksSection />
				</Container>
			</section>
		</div>
	);
};

export default Homepage;

const DownloadAndLinksSection = ({ item }) => {
	const { SPACING, COLORS } = useBrand();

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
							paddingTop: SPACING(6),
						}}
					>
						Downloads
					</Heading>
					<div
						css={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: `${SPACING(3)} 0`,
							borderBottom: `1px solid ${COLORS.border}`,
						}}
					>
						Sketch UI Kit Download <SketchLogo size="50px" />
					</div>
					<div
						css={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: `${SPACING(3)} 0`,
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
						css={{
							borderBottom: `1px solid ${COLORS.text}`,
							paddingBottom: SPACING(3),
							paddingTop: SPACING(6),
						}}
					>
						Links
					</Heading>
					<div
						css={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: `${SPACING(3)} 0`,
							borderBottom: `1px solid ${COLORS.border}`,
						}}
					>
						Go to GitHub <GithubLogo size="50px" />
					</div>
				</Cell>
			</Grid>
		</div>
	);
};
