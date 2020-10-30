/** @jsx jsx */

import React, { Fragment, useState, useEffect } from 'react';
import { DownloadIcon, RefreshIcon } from '@westpac/icon';
import { jsx, useBrand, keyframes, useMediaQuery } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';
import { Switch } from '@westpac/switch';
import { Select } from '@westpac/text-input';
import { Container, Grid, Cell } from '@westpac/grid';
import { Button } from '@westpac/button';
import { Section, SectionHeading } from '../../../components/section';
import { Body } from '../../../components/body';
import { BlockList, BlockListItem, BlockListHeading } from '../../../components/block-list';

import PageHeader from '../../../components/header/page-header';
import { PageContext } from '../../../components/providers/pageContext';
import { Gridly, Footer } from '../../../components/layout';
import { BASE_URL } from '../../../config.js';
import GEL from '../../../../../GEL.json';

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

const OptionOverride = ({ state: _, children, ...rest }) => {
	const { SPACING } = useBrand();
	return (
		<div
			css={{
				backgroundColor: '#fff',
				padding: SPACING(3),
				marginBottom: SPACING(1),
			}}
		>
			<div {...rest}>{children}</div>
		</div>
	);
};

const BlenderOption = ({ desc, link, ...rest }) => {
	const { TYPE, PACKS, SPACING, COLORS } = useBrand();

	const hint = (
		<Fragment>
			<div css={{ marginTop: SPACING(1) }}>{desc}</div>
			<a href={link} css={{ display: 'inline-block', marginTop: SPACING(1) }}>
				Documentation
			</a>
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

const SectionDesigners = () => {
	return (
		<Section paddingTop="large">
			<Container>
				<Grid>
					<Cell width={7}>
						<SectionHeading>Designers</SectionHeading>
						<Body>
							<p>
								The links opposite provide access to all the design assets and informaiton you’ll
								need to get started.
							</p>
						</Body>
					</Cell>
					<Cell left={9} width={4}>
						<BlockListHeading>Design resources</BlockListHeading>
						<BlockList>
							<BlockListItem href="#0" target="_blank">
								Sketch Cloud Libraries
							</BlockListItem>
							<BlockListItem href="#0" target="_blank">
								Sketch UI Kits
							</BlockListItem>
							<BlockListItem href="#0" target="_blank">
								Master Brand Guidelines
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
				<form action="/api/blender2/" method="POST" onSubmit={displayLoading}>
					<Grid>
						<Cell width={7}>
							<SectionHeading tabindex="-1">Developers</SectionHeading>
							<Body tabindex="-1">
								<p>
									Select the components you require for your project from the form below. To
									minimise code bloat, your download will only contain the assets and their
									dependencies that you add to the build.
								</p>
							</Body>
							<Fieldset css={mq({ marginTop: SPACING(6) })}>
								<Legend>
									<BlockListHeading>Select components</BlockListHeading>
								</Legend>

								<div
									css={mq({
										display: 'flex',
										alignItems: 'baseline',
										marginTop: [null, null, SPACING(2)],
										marginBottom: SPACING(3),
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

								<FormCheck
									type="checkbox"
									name="packages[]"
									value={selected}
									onChange={(value) => handleSelectPkgChange(value)}
								>
									{supportedPkgs.map((name, i) => {
										const niceName = name.charAt(0).toUpperCase() + name.slice(1);

										return (
											<BlenderOption
												key={i}
												value={name}
												desc={GEL.components[name].description}
												link={`${BASE_URL}/components/${niceName.toLowerCase()}`}
											>
												{niceName}
											</BlenderOption>
										);
									})}
								</FormCheck>
							</Fieldset>
						</Cell>
						<Cell left={9} width={4}>
							<Fieldset>
								<Legend>
									<BlockListHeading>Build options</BlockListHeading>
								</Legend>

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
											label="Include component versions in CSS classes"
											block
											checked
										/>
									</BlockListItem>
									<BlockListItem>
										<label
											for="tokensFormat"
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
									{/* <FormCheck type="checkbox" name="modules">
										<Option value="true">Modules</Option>
									</FormCheck>
									<FormCheck type="checkbox" name="prettify">
										<Option value="true">Prettify</Option>
									</FormCheck>
									<FormCheck type="checkbox" name="excludeJquery">
										<Option value="true">Exclude jQuery</Option>
									</FormCheck>
									<FormCheck type="checkbox" name="noVersionInClass">
										<Option value="true">Exclude versions in classes</Option>
									</FormCheck> */}
								</BlockList>
							</Fieldset>

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
