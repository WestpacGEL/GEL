/** @jsx jsx */

import React, { Fragment, useState } from 'react';
import { DownloadIcon, RefreshIcon } from '@westpac/icon';
import { jsx, useBrand, keyframes } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';
import { Select } from '@westpac/text-input';
import { Grid, Cell } from '@westpac/grid';
import { Button } from '@westpac/button';
import { Body } from '@westpac/body';

import PageHeader from '../../../components/header/page-header';
import { Footer } from '../../../components/layout';
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

function TokensPage() {
	const { BRAND, TYPE, SPACING } = useBrand();
	const [isLoading, setLoading] = useState(false);

	const supportedPkgs = Object.keys(GEL.components).filter(name => GEL.components[name].blender);
	const checkState = {};
	supportedPkgs.map(name => (checkState[name] = false));
	const [selected, setSelected] = useState([]);

	function checkAll() {
		if (selected.length === supportedPkgs.length) {
			setSelected([]);
		} else {
			setSelected(supportedPkgs);
		}
	}

	function displayLoading() {
		setLoading(true);
		setTimeout(() => setLoading(false), 2000);
	}

	return (
		<Fragment>
			<PageHeader name="The Blender" />

			<div css={{ marginBottom: SPACING(20) }}>
				<Grid>
					<Cell width={10} left={2}>
						<form
							action="/api/blender2/"
							method="POST"
							css={{ margin: '2rem' }}
							onSubmit={displayLoading}
						>
							<fieldset>
								<legend>Choose components</legend>

								<FormCheck
									type="checkbox"
									checked={selected.length === supportedPkgs.length ? ['all'] : []}
									onChange={checkAll}
								>
									<Option value="all">Select all</Option>
								</FormCheck>

								<FormCheck
									type="checkbox"
									name="packages[]"
									value={selected}
									onChange={value => setSelected(value)}
								>
									{supportedPkgs.map((name, i) => {
										const niceName = name.charAt(0).toUpperCase() + name.slice(1);

										return (
											<div
												key={i}
												css={{
													display: 'grid',
													gridTemplateColumns: '3fr auto',
												}}
											>
												<Option value={name}>
													<span
														css={{
															...TYPE.bodyFont[700],
															fontSize: '1.1428571429rem',
														}}
													>
														{niceName}
													</span>
													<p
														css={{
															margin: 0,
														}}
													>
														{GEL.components[name].description}
													</p>
												</Option>
												<Body>
													<a href={`${BASE_URL}/components/${niceName.toLowerCase()}`}>
														View {niceName}
													</a>
												</Body>
											</div>
										);
									})}
								</FormCheck>
							</fieldset>

							<fieldset>
								<legend>Choose options</legend>

								<FormCheck type="checkbox" name="modules">
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
								</FormCheck>
								<label
									css={{
										display: 'block',
										margin: '0.5rem 0',
									}}
								>
									Tokens format
									<Select name="tokensFormat" inline>
										<option value="json">JSON</option>
										<option value="less">LESS</option>
										<option value="css">CSS</option>
										<option value="sass">SCSS/SASS</option>
									</Select>
								</label>
							</fieldset>

							<input type="hidden" name="brand" value={BRAND} />

							<Button
								look="primary"
								type="submit"
								disabled={isLoading}
								iconAfter={isLoading ? Loading : DownloadIcon}
							>
								Download
							</Button>
						</form>
					</Cell>
				</Grid>
			</div>

			<Footer />
		</Fragment>
	);
}

export default TokensPage;
