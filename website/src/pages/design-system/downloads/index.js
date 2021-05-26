/** @jsx jsx */

import React, { Fragment, useState, useEffect } from 'react';
import {
	DownloadIcon,
	RefreshIcon,
	CopyContentIcon,
	NewWindowIcon,
	CubeIcon,
	DownloadFileIcon,
} from '@westpac/icon';
import { jsx, useBrand, keyframes, useMediaQuery } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';
import { Switch } from '@westpac/switch';
import { Textarea, Select } from '@westpac/text-input';
import { Container, Grid, Cell } from '@westpac/grid';
import { Button } from '@westpac/button';
import { useTransition, animated } from 'react-spring';
import { useQuery } from '@apollo/react-hooks';
import merge from 'lodash.merge';
import gql from 'graphql-tag';
import Link from 'next/link';

import { Section, SectionHeading } from '../../../components/section';
import { Body } from '../../../components/body';
import { Head } from '../../../components/head';
import { BlockList, BlockListItem, BlockListHeading } from '../../../components/block-list';
import PageHeader from '../../../components/header/page-header';
import { PageContext } from '../../../components/providers/pageContext';
import { Gridly, Footer } from '../../../components/layout';
import { BASE_URL } from '../../../config.js';
import { Icon } from '../../../../../components/icon/src/Icon';
import GEL from '../../../../../GEL.json';

const ArrowUpRightIcon = (props) => {
	const { COLORS } = useBrand();
	return (
		<Icon assistiveText="Link arrow" {...props}>
			<path
				fill={COLORS.primary}
				fillRule="evenodd"
				d="M20 10l-6-6-1.42 1.42L16.17 9H4v12h2V11h10.17l-3.59 3.58L14 16z"
			/>
		</Icon>
	);
};

function Loading() {
	const spinning = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}`;

	return (
		<RefreshIcon
			color="#fff"
			css={{
				animation: `${spinning} 1s infinite linear`,
				marginLeft: '0.5rem',
			}}
		/>
	);
}

const Fieldset = (props) => {
	return <fieldset css={{ display: 'block', border: 0, padding: 0, margin: 0 }} {...props} />;
};

const Legend = (props) => {
	return (
		<legend
			css={{
				display: 'block',
				width: '100%',
				position: 'relative',
			}}
			{...props}
		/>
	);
};

const FormCheckOverride = ({ state: _, ...rest }) => <ul role="list" {...rest} />;
const BlenderComponents = (props) => (
	<FormCheck
		type="checkbox"
		overrides={{
			FormCheck: {
				component: FormCheckOverride,
				styles: (styles) => ({
					...styles,
					listStyle: 'none',
					padding: 0,
					margin: 0,
				}),
			},
		}}
		{...props}
	/>
);

const OptionOverride = ({ state: _, children, ...rest }) => {
	const { SPACING } = useBrand();
	return (
		<li
			css={{
				backgroundColor: '#fff',
				padding: SPACING(3),
				marginBottom: SPACING(1),
				':last-child': {
					marginBottom: 0,
				},
			}}
		>
			<div {...rest}>{children}</div>
		</li>
	);
};

function flattenAndKeyNav(nav) {
	let result = {};

	nav.map(({ children, ...subnav }) => {
		if (children) {
			result = { ...result, ...flattenAndKeyNav(children) };
		} else {
			result[subnav.path] = subnav;
		}
	});

	return result;
}

const BlenderComponentOption = ({ desc, value, ...rest }) => {
	const { TYPE, PACKS, SPACING, COLORS } = useBrand();

	let { data, error } = useQuery(
		gql`
			query data {
				allPages(where: { packageName: ${value.replace(/-/g, '_')} }) {
					pageTitle
					url
				}
				allSettings(where: { name: "navigation" }) {
					value
				}
			}
		`
	);

	const description = <p>{desc}</p>;
	let hint = description;
	if (data && !error) {
		const navigation = data.allSettings[0]
			? flattenAndKeyNav(JSON.parse(data.allSettings[0].value))
			: [];

		hint = (
			<Fragment>
				{description}
				<p>
					Docs:{' '}
					{data.allPages.map(({ pageTitle, url }) =>
						navigation[`${BASE_URL}${url}`] ? (
							<Link
								key={`${value}-${url}`}
								as={`${BASE_URL}${url}`}
								href={`${BASE_URL}${url}`}
								passHref
							>
								<a
									css={{
										display: 'inline-block',
										':not(:last-child)': { marginRight: SPACING(1) },
									}}
								>
									{pageTitle}
								</a>
							</Link>
						) : null
					)}
				</p>
			</Fragment>
		);
	}

	return (
		<Option
			hint={hint}
			value={value}
			{...rest}
			overrides={{
				Option: {
					component: OptionOverride,
					styles: (styles) => ({
						...styles,
						marginBottom: 0,
						paddingLeft: SPACING(9),
						'::before': {
							content: '""',
							position: 'absolute',
							zIndex: 1,
							top: 0,
							bottom: `-${SPACING(3)}`,
							left: SPACING(7),
							borderLeft: `1px solid ${COLORS.border}`,
						},
					}),
				},
				Label: {
					styles: (styles) => ({
						...styles,
						...PACKS.typeScale.bodyFont[9],
						...TYPE.bodyFont[700],
					}),
				},
				Hint: {
					styles: (styles) => ({
						...styles,
						p: { margin: 0 },
						'p + p': { marginTop: SPACING(2) },
					}),
				},
			}}
		/>
	);
};

const AutoGrowTextarea = ({ value, customCSS, ...rest }) => {
	return (
		<div
			css={merge(
				{
					display: 'grid', //using grid to put elements on top of each other, sized based on tallest
					'::after': {
						content: `"${value} "`, //need extra space to prevent jumpy behaviour
						whiteSpace: 'pre-wrap', //mimic textarea text behaviour
						visibility: 'hidden', //hide from view/clicks/screen readers
					},
					'> textarea': {
						resize: 'none', //after user resizes it ruins the auto sizing
						overflow: 'hidden', //hide scrollbar on growth (FF)
					},
					'::after, > textarea': {
						gridArea: '1 / 1 / 2 / 2', //place on top of each other
					},
				},
				customCSS
			)}
		>
			<Textarea value={value} {...rest} />
		</div>
	);
};

const NpmBox = ({ selected, ...rest }) => {
	const { SPACING } = useBrand();

	const [showStatus, setShowStatus] = useState(false);

	const transition = useTransition(showStatus, {
		config: { duration: 150 },
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});

	// Hide copy status text after 5sec
	useEffect(() => {
		showStatus &&
			setTimeout(() => {
				setShowStatus(false);
			}, 5000);
	}, [showStatus]);

	const npmCommand = `npm install ${selected.map((pkg) => `@westpac/${pkg}`).join(' ')}`;

	const handleCopy = () => {
		navigator.clipboard.writeText(npmCommand);
		setShowStatus(true);
	};

	const AnimatedStatus = animated(Status);

	return (
		<div {...rest}>
			<div css={{ position: 'relative' }}>
				<AutoGrowTextarea
					value={npmCommand}
					customCSS={{
						'::after, > textarea': {
							fontFamily:
								'"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace',
							fontSize: '0.875rem',
							lineHeight: 1.5,
							padding: '0.3125rem 5rem 0.3125rem 0.75rem',
							height: 'auto',
						},
						'::after': {
							border: '1px solid transparent', //mimic our default textarea styling
						},
					}}
					readOnly
				/>
				<Button
					look="link"
					size="small"
					iconAfter={CopyContentIcon}
					css={{ position: 'absolute', zIndex: 0, top: SPACING(1, 'minor'), right: 0 }}
					onClick={(e) => handleCopy()}
				>
					Copy
				</Button>
			</div>
			{transition(
				(style, item) =>
					item && <AnimatedStatus style={style} text="Copied!" css={{ marginTop: SPACING(1) }} />
			)}
		</div>
	);
};

const Status = ({ text, ...rest }) => {
	const { COLORS, PACKS } = useBrand();

	return (
		text && (
			<Body
				role="status"
				overrides={{
					Body: {
						styles: (styles) => ({
							...styles,
							...PACKS.typeScale.bodyFont[10],
							color: COLORS.success,
						}),
					},
				}}
				{...rest}
			>
				{text}
			</Body>
		)
	);
};

const urlMap = {
	WBC: {
		guidelinesURL:
			'https://westpacgroup.sharepoint.com/:f:/s/O365-UG-031831-GELOperatingEnvironmenttest/EnwmDFymE-dDtefynPcIwn4BdmYcqLZ2_ia2qdR6_YJcqA?e=rc10CQ',
	},
	STG: {
		guidelinesURL: 'http://stgeorge.mybrandmachine.com',
	},
	BOM: {
		guidelinesURL:
			'https://westpacgroup.sharepoint.com/:f:/s/O365-UG-031831-GELOperatingEnvironmenttest/EnwmDFymE-dDtefynPcIwn4BdmYcqLZ2_ia2qdR6_YJcqA?e=rc10CQ',
	},
	BSA: {
		guidelinesURL:
			'https://westpacgroup.sharepoint.com/:f:/s/O365-UG-031831-GELOperatingEnvironmenttest/EnwmDFymE-dDtefynPcIwn4BdmYcqLZ2_ia2qdR6_YJcqA?e=rc10CQ',
	},
	WBG: {
		guidelinesURL:
			'https://westpacgroup.sharepoint.com/:f:/s/O365-UG-031831-GELOperatingEnvironmenttest/EnwmDFymE-dDtefynPcIwn4BdmYcqLZ2_ia2qdR6_YJcqA?e=rc10CQ',
	},
	RAMS: {
		guidelinesURL:
			'https://westpacgroup.sharepoint.com/:f:/s/O365-UG-031831-GELOperatingEnvironmenttest/EnwmDFymE-dDtefynPcIwn4BdmYcqLZ2_ia2qdR6_YJcqA?e=rc10CQ',
	},
};

const fontTextWBC = () => (
	<Fragment>
		<p>
			Check the{' '}
			<a href={urlMap.WBC.guidelinesURL} target="_blank">
				Masterbrand Guidelines
			</a>{' '}
			to understand how to use brand fonts effectively. Never use a font without confirmation that
			you have the correct licence in place.
		</p>
		<p>
			Designers using Sketch can access brand font files within the{' '}
			<a href="/resources/design/sketch-ui-kit/">Sketch UI Kit</a>.
		</p>
		<p>
			Designers using other software can send a request for approval to{' '}
			<a href="mailto:brand@westpac.com.au">brand@westpac.com.au</a>.
		</p>
	</Fragment>
);
const fontTextSTG = () => (
	<Fragment>
		<p>
			Check the{' '}
			<a href={urlMap.STG.guidelinesURL} target="_blank">
				Masterbrand Guidelines
			</a>{' '}
			to understand how to use brand fonts effectively. Never use a font without confirmation that
			you have the correct licence in place.
		</p>
		<p>
			Designers using Sketch can access brand font files within the{' '}
			<a href="/resources/design/sketch-ui-kit/">Sketch UI Kit</a>.
		</p>
		<p>
			Designers using other software can send a request for approval via{' '}
			<a href="http://stgeorge.mybrandmachine.com" target="_blank">
				Brand Central
			</a>
			.
		</p>
	</Fragment>
);
const fontTextBOM = () => (
	<Fragment>
		<p>
			Check the{' '}
			<a href={urlMap.BOM.guidelinesURL} target="_blank">
				Masterbrand Guidelines
			</a>{' '}
			to understand how to use brand fonts effectively. Never use a font without confirmation that
			you have the correct licence in place.
		</p>
		<p>
			Send a request for approval to{' '}
			<a href="mailto:bombrand@bankofmelbourne.com.au">bombrand@bankofmelbourne.com.au</a>.
		</p>
	</Fragment>
);
const fontTextBSA = () => (
	<Fragment>
		<p>
			Check the{' '}
			<a href={urlMap.BSA.guidelinesURL} target="_blank">
				Masterbrand Guidelines
			</a>{' '}
			to understand how to use brand fonts effectively. Never use a font without confirmation that
			you have the correct licence in place.
		</p>
		<p>
			Send a request for approval to{' '}
			<a href="mailto:banksabrandandmarketing@banksa.com.au">
				banksabrandandmarketing@banksa.com.au
			</a>
			.
		</p>
	</Fragment>
);
const fontTextWBG = () => (
	<Fragment>
		<p>
			Check the{' '}
			<a href={urlMap.WBG.guidelinesURL} target="_blank">
				Masterbrand Guidelines
			</a>{' '}
			to understand how to use brand fonts effectively.
		</p>
		<p>
			<a href="https://fonts.google.com/specimen/Montserrat" target="_blank">
				Download Montserrat
			</a>
		</p>
	</Fragment>
);
const fontTextRAMS = () => (
	<Fragment>
		<p>
			Check the{' '}
			<a href={urlMap.RAMS.guidelinesURL} target="_blank">
				Masterbrand Guidelines
			</a>{' '}
			to understand how to use brand fonts effectively.
		</p>
		<p>
			<a href="https://fonts.google.com/specimen/Source+Sans+Pro" target="_blank">
				Download Source Sans Pro
			</a>
		</p>
	</Fragment>
);

const getBrandContent = () => ({
	WBC: {
		...urlMap.WBC,
		fontText: fontTextWBC,
	},
	STG: {
		...urlMap.STG,
		fontText: fontTextSTG,
	},
	BOM: {
		...urlMap.BOM,
		fontText: fontTextBOM,
	},
	BSA: {
		...urlMap.BSA,
		fontText: fontTextBSA,
	},
	WBG: {
		...urlMap.WBG,
		fontText: fontTextWBG,
	},
	RAMS: {
		...urlMap.RAMS,
		fontText: fontTextRAMS,
	},
});

const SectionDesigners = () => {
	const { BRAND } = useBrand();
	const brandContent = getBrandContent()[BRAND.code];
	const FontText = brandContent.fontText;

	return (
		<Section paddingTop="large">
			<Container>
				<Grid>
					<Cell width={[12, null, 7]}>
						<SectionHeading tight>Designers</SectionHeading>
						<Body>
							<p>
								The design resources list provides access to all the design assets and information
								you’ll need to get started.
							</p>
							<h3>Brand fonts</h3>
							<FontText />
						</Body>
					</Cell>
					<Cell left={[null, null, 9]} width={[12, null, 4]}>
						<BlockListHeading icon={NewWindowIcon}>Design resources</BlockListHeading>
						<BlockList>
							<BlockListItem href="/resources/design/sketch-ui-kit/">Sketch UI Kit</BlockListItem>
							{brandContent.guidelinesURL && (
								<BlockListItem href={brandContent.guidelinesURL} target="_blank">
									Masterbrand Guidelines
								</BlockListItem>
							)}
						</BlockList>
					</Cell>
				</Grid>
			</Container>
		</Section>
	);
};

const SectionDevelopers = () => {
	const { BRAND, SPACING, COLORS, PACKS } = useBrand();
	const mq = useMediaQuery();

	const [isLoading, setLoading] = useState(false);

	const hiddenPkgs = [...(BRAND.code !== 'WBC' ? ['pictogram'] : []), 'selector', 'collapsible'];

	const supportedPkgs = Object.keys(GEL.components).filter(
		(name) =>
			GEL.components[name].blender &&
			!GEL.components[name].blender.isCore &&
			!hiddenPkgs.includes(name)
	);
	const [selected, setSelected] = useState(['core']);
	const [selectAllToggle, setSelectAllToggle] = useState([]);

	useEffect(() => {
		setSelectAllToggle(selected.length === supportedPkgs.length + 1 ? ['all'] : []);
	}, [selected]);

	function handleToggleChange() {
		setSelected(
			selected.length === supportedPkgs.length + 1 ? ['core'] : ['core', ...supportedPkgs]
		);
	}
	function handleClearAllClick() {
		setSelected(['core']);
	}
	function handleSelectPkgChange(value) {
		setSelected(value);
	}

	function displayLoading() {
		setLoading(true);
		setTimeout(() => setLoading(false), 2000);
	}

	return (
		<Section>
			<Container>
				<Grid>
					<Cell width={[12, null, 7]}>
						<SectionHeading tight tabIndex="-1">
							Developers
						</SectionHeading>
						<Body tabIndex="-1">
							<p>
								There are <em>two</em> codebases available to download: HTML/CSS or React.
							</p>
							<p>
								Select the components you require for your project then either download a zip for
								HTML/CSS, or use the npm CLI command for React.
							</p>

							<h3>Brand fonts</h3>
							<p>
								Developers can{' '}
								<a
									href={`https://westpacgroup.sharepoint.com/sites/TS1206/Shared%20Documents/webfonts/${BRAND.code}.zip`}
									target="blank"
								>
									download web font files
								</a>{' '}
								directly from Sharepoint.
							</p>
						</Body>
					</Cell>
				</Grid>
				<form action="/api/blender2/" method="POST" onSubmit={displayLoading}>
					<Grid css={{ marginTop: SPACING(6) }}>
						<Cell width={[12, null, 7]}>
							<div css={mq({ marginBottom: [SPACING(6), null, 0] })}>
								<Fieldset>
									<Legend>
										<BlockListHeading icon={CubeIcon} id="step1">
											<span>
												Step 1: <em>Select components</em>
											</span>
										</BlockListHeading>
									</Legend>

									<div
										css={mq({
											display: 'flex',
											alignItems: 'baseline',
											marginTop: [SPACING(1), null, SPACING(2)],
											marginBottom: [SPACING(1), null, SPACING(2)],
										})}
									>
										<FormCheck
											type="checkbox"
											checked={selectAllToggle}
											onChange={() => handleToggleChange()}
											css={{
												marginTop: '0.3125rem',
												marginBottom: '0.3125rem',
											}}
											overrides={{
												Option: {
													styles: (styles) => ({
														...styles,
														marginBottom: 0,
													}),
												},
											}}
										>
											<Option value="all">Select all</Option>
										</FormCheck>
										{selected.length > 1 && (
											<Button
												look="link"
												size="small"
												onClick={() => handleClearAllClick()}
												css={{ marginLeft: SPACING(1) }}
											>
												{`${selected.length === supportedPkgs.length ? 'Clear all' : 'Clear'} ${
													selected.length - 1
												} ${selected.length === 1 ? 'component' : 'components'}`}
											</Button>
										)}
									</div>

									<input type="hidden" name="packages[]" value="core" />

									<BlenderComponents
										name="packages[]"
										value={selected}
										onChange={(value) => handleSelectPkgChange(value)}
									>
										<BlenderComponentOption
											value="core"
											disabled
											checked
											desc={GEL.components.core.description}
										>
											Core
										</BlenderComponentOption>
										{supportedPkgs.map((name, i) => {
											const niceName = name.charAt(0).toUpperCase() + name.slice(1);

											return (
												<BlenderComponentOption
													key={i}
													value={name}
													desc={GEL.components[name].description}
												>
													{niceName}
												</BlenderComponentOption>
											);
										})}
									</BlenderComponents>
								</Fieldset>

								<Button
									look="link"
									href="#step2"
									iconBefore={ArrowUpRightIcon}
									overrides={{
										Button: {
											styles: (styles) => ({
												...styles,
												color: COLORS.text,
												textDecoration: 'none',
											}),
										},
									}}
									css={mq({
										display: ['none', null, 'inline-flex'],
										marginTop: SPACING(4),
									})}
								>
									Go to Step 2 and choose a codebase
								</Button>
							</div>
						</Cell>
						<Cell left={[null, null, 9]} width={[12, null, 4]}>
							<Fieldset>
								<Legend id="step2" css={{ scrollMargin: '90px 0 0 0' }}>
									<BlockListHeading icon={DownloadFileIcon}>
										<span>
											Step 2: <em>Choose a codebase</em>
										</span>
									</BlockListHeading>
								</Legend>

								<div>
									<Body tabIndex="-1">
										<h4>HTML/CSS</h4>
										<p css={{ ...PACKS.typeScale.bodyFont[10] }}>
											Choose your build options and click the download button below.
										</p>
									</Body>

									<BlockList css={mq({ marginTop: [null, null, SPACING(2)] })}>
										<BlockListItem>
											<Switch name="modules" size="small" label="Modules" block />
										</BlockListItem>
										<BlockListItem>
											<Switch name="prettify" size="small" label="Prettify" block />
										</BlockListItem>
										<BlockListItem>
											<Switch
												name="includeJquery"
												size="small"
												label="Include jQuery"
												block
												checked
											/>
										</BlockListItem>
										<BlockListItem>
											<Switch
												name="versionInClass"
												size="small"
												label="Component versions in CSS classes"
												block
												checked
											/>
										</BlockListItem>
										<BlockListItem>
											<div css={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
												<label htmlFor="tokensFormat" css={{ flex: 1, paddingRight: SPACING(1) }}>
													Token format
												</label>
												<Select
													name="tokensFormat"
													id="tokensFormat"
													overrides={{
														Select: {
															styles: (styles) => ({
																...styles,
																display: 'inline-block',
																width: 'auto',
															}),
														},
													}}
												>
													<option value="json">JSON</option>
													<option value="less">LESS</option>
													<option value="css">CSS</option>
													<option value="sass">SCSS/SASS</option>
												</Select>
											</div>
										</BlockListItem>
									</BlockList>

									<input type="hidden" name="brand" value={BRAND.code} />

									<Button
										look="primary"
										size="large"
										type="submit"
										disabled={isLoading}
										iconAfter={isLoading ? Loading : DownloadIcon}
										block
										justify
										css={mq({ marginTop: SPACING(4) })}
									>
										Download HTML/CSS
									</Button>
								</div>

								<div css={{ marginTop: SPACING(6) }}>
									<Body tabIndex="-1">
										<h4>React</h4>
										<p css={{ ...PACKS.typeScale.bodyFont[10] }}>
											Simply copy the npm CLI command below and use it in your development
											environment.
										</p>
									</Body>
									<NpmBox selected={selected} />
								</div>
							</Fieldset>
						</Cell>
					</Grid>
				</form>
			</Container>
		</Section>
	);
};

function TokensPage() {
	const { COLORS, LAYOUT } = useBrand();
	const mq = useMediaQuery();

	const [showGrid, setShowGrid] = useState(false);

	return (
		<Fragment>
			<Head title="Downloads" />
			<PageContext.Provider value={{ showGrid, setShowGrid }}>
				<div css={{ flexGrow: 1, position: 'relative', backgroundColor: COLORS.background }}>
					<PageHeader
						name="Downloads"
						css={
							mq({
								transition: 'box-shadow 0.2s ease',

								'body.hasScrolledSmall &': {
									boxShadow: ['0 2px 5px rgba(0,0,0,0.3)', null, 'none'],
								},
								'body.hasScrolledLarge &': {
									boxShadow: [null, null, '0 2px 5px rgba(0,0,0,0.3)'],
								},
							})[0]
						}
					/>
					<Gridly show={showGrid} />
					<SectionDesigners />
					<SectionDevelopers />
					<Footer />
				</div>
			</PageContext.Provider>
		</Fragment>
	);
}

export default TokensPage;
