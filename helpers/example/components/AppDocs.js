/** @jsx jsx */

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Fragment, useState, StrictMode } from 'react';

import { jsx, css, GEL, Global } from '@westpac/core';

import { BRANDS } from './brands';
import { Sidebar } from './Sidebar';
import { HomeDocs } from './HomeDocs';
import { Page } from './Page';

export function AppDocs({ components, packageName, pkg }) {
	const [brand, setBrand] = useState('WBC');

	return (
		<Router>
			<StrictMode>
				<GEL brand={BRANDS[brand]}>
					<div
						css={{
							alignItems: 'stretch',
							display: 'flex',
							minHeight: '100vh',
						}}
					>
						<Global
							styles={css`
								code {
									font-family: Monaco, monospace;
									font-size: 0.85em;
								}
								p > code {
									background-color: #ffebe6;
									color: #bf2600;
									border-radius: '0.3rem';
									display: inline-block;
									padding: '0.1rem 0.3rem';
								}
							`}
						/>
						<Switch>
							<Route
								exact
								path="/"
								render={route => (
									<Fragment>
										<Sidebar components={components} brand={brand} setBrand={setBrand} />
										<HomeDocs {...route} />
									</Fragment>
								)}
							/>
							{components.map(({ slug, ...props }) => (
								<Route
									key={slug}
									exact
									path={`/${slug}`}
									render={route => (
										<Fragment>
											<Sidebar
												components={components}
												brand={brand}
												setBrand={setBrand}
												parent={slug}
											/>
											<Page {...route} {...props} brand={BRANDS[brand]} />
										</Fragment>
									)}
								/>
							))}
							<Route
								render={route => (
									<Fragment>
										<Sidebar components={components} brand={brand} setBrand={setBrand} />
										<HomeDocs {...route} />
									</Fragment>
								)}
							/>
						</Switch>
					</div>
				</GEL>
			</StrictMode>
		</Router>
	);
}
