import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Fragment, useState, StrictMode } from 'react';

import { jsx, css, GEL, Global } from '@westpac/core';

import { BRANDS } from './brands';
import { Sidebar } from './SidebarStart';
import { HomeStart } from './HomeStart';
import { Page } from './Page';

export function AppStart({ components, packageName, pkg, version }) {
	const [brandName, setBrandName] = useState('WBC');

	const brand = BRANDS[brandName];

	return (
		<Router>
			<StrictMode>
				<Global
					styles={css`
						body {
							margin: 0;
						}
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
				<GEL brand={brand}>
					<div
						css={{
							alignItems: 'stretch',
							display: 'flex',
							minHeight: '100vh',
						}}
					>
						<Sidebar components={components} brandName={brandName} setBrandName={setBrandName} />
						<Switch>
							<Route
								exact
								path="/"
								render={(route) => (
									<HomeStart {...route} packageName={packageName} pkg={pkg} version={version} />
								)}
							/>
							{components.map(({ slug, ...props }) => (
								<Route
									key={slug}
									path={`/${slug}`}
									render={(route) => (
										<Page {...route} {...props} brand={brand} pkgVersion={version} />
									)}
								/>
							))}
							<Route
								render={(route) => (
									<HomeStart {...route} packageName={packageName} pkg={pkg} version={version} />
								)}
							/>
						</Switch>
					</div>
				</GEL>
			</StrictMode>
		</Router>
	);
}
