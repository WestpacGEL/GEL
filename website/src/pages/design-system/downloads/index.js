/** @jsx jsx */

import React, { Fragment, useState } from 'react';
import { DownloadIcon, RefreshIcon } from '@westpac/icon';
import { jsx, useBrand, keyframes } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';
import { Select } from '@westpac/text-input';
import { Grid, Cell } from '@westpac/grid';
import { Button } from '@westpac/button';

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
	const { BRAND } = useBrand();
	const [isLoading, setLoading] = useState(false);

	function displayLoading() {
		setLoading(true);
		setTimeout(() => setLoading(false), 2000);
	}

	return (
		<Fragment>
			<PageHeader name="The Blender" />

			<Grid>
				<Cell width={10} left={2}>
					<form
						action={`${BASE_URL}/api/blender`}
						method="POST"
						css={{ margin: '2rem' }}
						onSubmit={displayLoading}
					>
						<fieldset>
							<legend>Choose components</legend>

							<FormCheck type="checkbox" name="packages[]">
								{Object.keys(GEL.components)
									.filter(name => GEL.components[name].blender)
									.map((name, i) => {
										const niceName = GEL.components[name].name.replace('@westpac/', '');
										return (
											<Option key={i} value={GEL.components[name].name}>
												{niceName.charAt(0).toUpperCase() + niceName.slice(1)}
											</Option>
										);
									})}
							</FormCheck>
						</fieldset>

						<fieldset>
							<legend>Choose options</legend>

							<FormCheck type="checkbox" name="modules">
								<Option>Modules</Option>
							</FormCheck>
							<FormCheck type="checkbox" name="prettify">
								<Option>Prettify</Option>
							</FormCheck>
							<FormCheck type="checkbox" name="excludeJquery">
								<Option>Exclude jQuery</Option>
							</FormCheck>
							<FormCheck type="checkbox" name="noVersionInClass">
								<Option>Exclude versions in classes</Option>
							</FormCheck>
							<label
								css={{
									display: 'block',
									margin: '0.5rem 0',
								}}
							>
								Tokens format
								<Select name="tokensFormat">
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

			<Footer />
		</Fragment>
	);
}

export default TokensPage;
