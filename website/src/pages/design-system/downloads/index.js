/** @jsx jsx */

import React, { Fragment, useState, useEffect } from 'react';
import {
	DownloadIcon,
	RefreshIcon,
	CopyContentIcon,
	NewWindowIcon,
	TickIcon,
	DownloadFileIcon,
} from '@westpac/icon';
import { jsx, useBrand, keyframes, useMediaQuery } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';
import { Switch } from '@westpac/switch';
import { Alert } from '@westpac/alert';
import { Textarea, Select } from '@westpac/text-input';
import { Container, Grid, Cell } from '@westpac/grid';
import { Button } from '@westpac/button';
import merge from 'lodash.merge';

import { Section, SectionHeading } from '../../../components/section';
import { Body } from '../../../components/body';
import { Head } from '../../../components/head';
import { BlockList, BlockListItem, BlockListHeading } from '../../../components/block-list';
import PageHeader from '../../../components/header/page-header';
import { PageContext } from '../../../components/providers/pageContext';
import { Gridly, Footer } from '../../../components/layout';
import { BASE_URL } from '../../../config.js';
import GEL from '../../../../../GEL.json';
import { getBrandContent } from './_utils';

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
			}}
		>
			<div {...rest}>{children}</div>
		</li>
	);
};
const BlenderComponentOption = ({ desc, link, ...rest }) => {
	const { TYPE, PACKS, SPACING, COLORS } = useBrand();

	const hint = (
		<Fragment>
			<div css={{ marginTop: SPACING(1) }}>{desc}</div>
			{/* <a href={link} css={{ display: 'inline-block', marginTop: SPACING(1) }}>
				Documentation
			</a> */}
		</Fragment>
	);

	return (
		<Option
			hint={hint}
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

	const [copySuccess, setCopySuccess] = useState('');

	const npmCommand = `npm install @westpac/core ${selected
		.map((pkg) => `@westpac/${pkg}`)
		.join(' ')}`;

	const handleCopy = () => {
		navigator.clipboard.writeText(npmCommand);
		setCopySuccess('Copied!');
	};

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
			<Status text={copySuccess} css={{ marginTop: SPACING(1) }} />
		</div>
	);
};

const InstructionalBody = (props) => {
	const { PACKS } = useBrand();
	return (
		<Body
			overrides={{
				Body: {
					styles: (styles) => ({
						...styles,
						...PACKS.typeScale.bodyFont[10],

						p: {
							marginTop: 0,
						},
					}),
				},
			}}
			{...props}
		/>
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

const SectionDesigners = () => {
	const { BRAND, SPACING } = useBrand();
	const brandContent = getBrandContent()[BRAND];
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
							<Alert look="info" heading="Brand fonts" css={{ marginTop: SPACING(6) }}>
								<FontText />
							</Alert>
						</Body>
					</Cell>
					<Cell left={[null, null, 9]} width={[12, null, 4]}>
						<BlockListHeading icon={NewWindowIcon}>Design resources</BlockListHeading>
						<BlockList>
							<BlockListItem href="#0" target="_blank">
								Sketch Cloud Libraries
							</BlockListItem>
							<BlockListItem href="#0" target="_blank">
								Sketch UI Kits
							</BlockListItem>
							<BlockListItem href={brandContent.guidelinesURL} target="_blank">
								Masterbrand Guidelines
							</BlockListItem>
						</BlockList>
					</Cell>
				</Grid>
			</Container>
		</Section>
	);
};

const SectionDevelopers = () => {
	const { BRAND, SPACING } = useBrand();
	const mq = useMediaQuery();

	const [isLoading, setLoading] = useState(false);

	const supportedPkgs = Object.keys(GEL.components).filter(
		(name) => GEL.components[name].blender && !GEL.components[name].blender.isCore
	);
	const checkState = {};
	supportedPkgs.map((name) => (checkState[name] = false));
	const [selected, setSelected] = useState([]);
	const [selectAllToggle, setSelectAllToggle] = useState([]);

	useEffect(() => {
		setSelectAllToggle(selected.length === supportedPkgs.length ? ['all'] : []);
	}, [selected]);

	function handleToggleChange() {
		setSelected(selected.length === supportedPkgs.length ? [] : supportedPkgs);
	}
	function handleClearAllClick() {
		setSelected([]);
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
							<p>There are two codebases available to download: Vanilla HTML/CSS, or React.</p>
							<p>
								Select the components you require for your project then either download a zip for
								Vanilla HTML/CSS, or use the npm CLI command for React.
							</p>
							<Alert look="info" heading="Brand fonts" css={{ marginTop: SPACING(6) }}>
								<p css={{ marginTop: 0 }}>
									Developers can download web fonts directly from Sharepoint by following the link
									below.
								</p>
								<p>
									<a
										href={`https://westpacgroup.sharepoint.com/sites/TS1206/Shared%20Documents/webfonts/${BRAND}`}
										target="blank"
									>
										Download web fonts
									</a>
								</p>
							</Alert>
						</Body>
					</Cell>
				</Grid>
				<form action="/api/blender2/" method="POST" onSubmit={displayLoading}>
					<Grid css={{ marginTop: SPACING(6) }}>
						<Cell width={[12, null, 7]}>
							<Fieldset>
								<Legend>
									<BlockListHeading icon={TickIcon} id="step1">
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
										css={{ marginTop: '0.3125rem', marginBottom: '0.3125rem' }}
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
									{selected.length > 0 && (
										<Button
											look="link"
											size="small"
											onClick={() => handleClearAllClick()}
											css={{ marginLeft: SPACING(1) }}
										>
											{`${selected.length === supportedPkgs.length ? 'Clear all' : 'Clear'} ${
												selected.length
											} ${selected.length === 1 ? 'component' : 'components'}`}
										</Button>
									)}
								</div>

								<BlenderComponents
									name="packages[]"
									value={selected}
									onChange={(value) => handleSelectPkgChange(value)}
								>
									{supportedPkgs.map((name, i) => {
										const niceName = name.charAt(0).toUpperCase() + name.slice(1);

										return (
											<BlenderComponentOption
												key={i}
												value={name}
												desc={GEL.components[name].description}
												link={`${BASE_URL}/components/${niceName.toLowerCase()}`}
											>
												{niceName}
											</BlenderComponentOption>
										);
									})}
								</BlenderComponents>
							</Fieldset>
						</Cell>
						<Cell left={[null, null, 9]} width={[12, null, 4]}>
							<Fieldset>
								<Legend>
									<BlockListHeading icon={DownloadFileIcon} id="step2">
										<span>
											Step 2: <em>Choose a codebase</em>
										</span>
									</BlockListHeading>
								</Legend>

								<div>
									<h4 tabIndex="-1">Vanilla HTML/CSS</h4>
									<InstructionalBody tabIndex="-1">
										<p>Choose your build options and click the Download button below.</p>
									</InstructionalBody>

									<BlockList css={mq({ marginTop: [null, null, SPACING(2)] })}>
										<BlockListItem>
											<Switch name="modules" size="small" label="Modules" block />
										</BlockListItem>
										<BlockListItem>
											<Switch name="prettify" size="small" label="Prettify" block />
										</BlockListItem>
										<BlockListItem>
											<Switch
												name="excludeJquery"
												size="small"
												label="Include jQuery"
												block
												checked
											/>
										</BlockListItem>
										<BlockListItem>
											<Switch
												name="noVersionInClass"
												size="small"
												label="Component versions in CSS classes"
												block
												checked
											/>
										</BlockListItem>
										<BlockListItem>
											<label
												htmlFor="tokensFormat"
												css={{
													display: 'block',
													marginBottom: SPACING(1),
												}}
											>
												Token format
											</label>
											<Select name="tokensFormat" id="tokensFormat">
												<option value="json">JSON</option>
												<option value="less">LESS</option>
												<option value="css">CSS</option>
												<option value="sass">SCSS/SASS</option>
											</Select>
										</BlockListItem>
									</BlockList>

									<input type="hidden" name="brand" value={BRAND} />

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
										Download
									</Button>
								</div>

								<div css={{ marginTop: SPACING(6) }}>
									<h4 tabIndex="-1">React</h4>
									<InstructionalBody tabIndex="-1">
										<p>
											Simply copy the npm CLI command below and use it in your development
											environment.
										</p>
									</InstructionalBody>
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
	const { COLORS } = useBrand();

	const [showGrid, setShowGrid] = useState(false);

	return (
		<Fragment>
			<Head title="Downloads" />
			<PageContext.Provider value={{ showGrid, setShowGrid }}>
				<div css={{ flexGrow: 1, position: 'relative', backgroundColor: COLORS.background }}>
					<PageHeader name="Download" />
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
