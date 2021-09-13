/** @jsx jsx */

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Fragment, useState, StrictMode } from 'react';

import { jsx, css, GEL, Global } from '@westpac/core';

import { BRANDS } from './brands';
import { Sidebar } from './SidebarDocs';
import { HomeDocs } from './HomeDocs';
import { Page } from './Page';

export function AppDocs({ components, packageName, pkg }) {
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
						<Switch>
							<Route
								exact
								path="/"
								render={(route) => (
									<Fragment>
										<Sidebar
											components={components}
											brandName={brandName}
											setBrandName={setBrandName}
										/>
										<HomeDocs {...route} />
									</Fragment>
								)}
							/>
							{components.map(({ slug, ...props }) => (
								<Route
									key={slug}
									exact
									path={`/${slug}`}
									render={(route) => (
										<Fragment>
											<Sidebar
												components={components}
												brandName={brandName}
												setBrandName={setBrandName}
												parent={slug}
											/>
											<Page {...route} {...props} brand={brand} slug={slug} />
										</Fragment>
									)}
								/>
							))}
							<Route
								render={(route) => (
									<Fragment>
										<Sidebar
											components={components}
											brandName={brandName}
											setBrandName={setBrandName}
										/>
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
