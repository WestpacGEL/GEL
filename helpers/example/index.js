/* @jsx jsx */

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import { Global, css, jsx } from '@emotion/core';
import { Container } from '../../components/grid';

import { GEL } from '../../components/core';
import bomBrand from '../../brands/BOM';
import bsaBrand from '../../brands/BSA';
import btfgBrand from '../../brands/BTFG';
import stgBrand from '../../brands/STG';
import wbcBrand from '../../brands/WBC';
import wbgBrand from '../../brands/WBG';

// ==============================
// Get the data
// ==============================

const BRANDS = {
	BOM: bomBrand,
	BSA: bsaBrand,
	BTFG: btfgBrand,
	STG: stgBrand,
	WBC: wbcBrand,
	WBG: wbgBrand,
};

// ==============================
// Compose the pieces
// ==============================

const App = ({ components, packageName }) => {
	const [inputValue, setInputValue] = useState('');
	const [brand, setBrand] = useState('WBC');

	// update doc title
	useEffect(() => {
		document.title = `${packageName} Example - GEL`;
	}, packageName);

	// filter components for search
	const navItems = inputValue.length
		? components.filter(p => p.label.toLowerCase().includes(inputValue.toLowerCase()))
		: components;

	const primaryColor = BRANDS[brand].colors.primary.default;

	return (
		<Router>
			<GEL brand={BRANDS[brand]}>
				<Body>
					<Global
						styles={css`
							body {
								-moz-font-feature-settings: 'liga' on;
								-moz-osx-font-smoothing: grayscale;
								-webkit-font-smoothing: antialiased;
								/* background-color: #fafbfc; */
								color: #253858;
								font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial,
									sans-serif;
								font-style: normal;
								font-weight: 400;
								letter-spacing: 0;
								line-height: 1.3;
								margin: 0;
								text-rendering: optimizeLegibility;
							}
							code {
								font-family: Monaco, monospace;
								font-size: 0.85em;
							}
							p > code {
								background-color: #ffebe6;
								color: #bf2600;
								border-radius: 3px;
								display: inline-block;
								padding: 1px 3px;
							}
						`}
					/>
					<Sidebar>
						<SidebarTitle to="/">{packageName}</SidebarTitle>
						<SidebarSearch
							onChange={e => setInputValue(e.target.value)}
							placeholder="Search..."
							type="search"
							value={inputValue}
						/>

						<SidebarNav>
							{navItems.map(({ label, slug }) => (
								<SidebarItem
									primaryColor={primaryColor}
									key={slug}
									to={`/${slug}`}
									data-test-nav-link
								>
									{label}
								</SidebarItem>
							))}
						</SidebarNav>

						<SidebarSwitcher>
							{Object.keys(BRANDS).map(b => {
								const checked = brand === b;
								return (
									<SidebarSwitch key={b} isChecked={checked}>
										<input
											name="brand"
											type="radio"
											onChange={e => setBrand(b)}
											value={b}
											checked={checked}
										/>
										{b}
									</SidebarSwitch>
								);
							})}
						</SidebarSwitcher>
					</Sidebar>
					<Switch>
						<Route exact path="/" render={route => <Home {...route} packageName={packageName} />} />
						{components.map(({ slug, ...props }) => (
							<Route
								key={slug}
								path={`/${slug}`}
								render={route => <Page {...route} {...props} />}
							/>
						))}
					</Switch>
				</Body>
			</GEL>
		</Router>
	);
};

class Page extends React.Component {
	state = { error: null, info: null };
	componentDidCatch(error, info) {
		this.setState({ error, info });
	}
	render() {
		const { Module, filename, label } = this.props;
		const { error, info } = this.state;

		if (error) {
			const errorLabel = `Error in ${filename}`;
			console.error(errorLabel, error);

			return (
				<Article>
					<Container>
						<h1>{errorLabel}</h1>
						<h2 css={{ color: '#BF2600' }}>
							<code>{error.message}</code>
						</h2>
						<pre
							css={{
								backgroundColor: '#FFEBE6',
								borderRadius: 4,
								color: '#DE350B',
								paddingBottom: '1em',
							}}
						>
							<code>{info.componentStack}</code>
						</pre>
					</Container>
				</Article>
			);
		}

		return (
			<Article>
				<Container>
					<h1>{label}</h1>
					<Module.default />
				</Container>
			</Article>
		);
	}
}

const Home = ({ packageName }) => (
	<Article>
		<Container>
			<h1>{packageName} Examples</h1>
			<p>
				Click one of the examples on the left to view it. To load the examples for another package
				run:
			</p>
			<pre>
				<code>bolt dev {'{package_name}'}</code>
			</pre>
		</Container>
	</Article>
);

// ==============================
// Styled components
// ==============================

const Body = props => (
	<div
		css={{
			alignItems: 'stretch',
			display: 'flex',
			height: '100vh',
		}}
		{...props}
	/>
);
const Article = props => (
	<article
		css={{
			flex: 1,
			overflowY: 'auto',
		}}
		{...props}
	/>
);
/*const Container = props => (
	<div
		css={{
			marginLeft: 'auto',
			marginRight: 'auto',
			maxWidth: 800,
			padding: 20,
		}}
		{...props}
	/>
);*/

const Sidebar = props => (
	<div
		css={{
			backgroundColor: '#F4F5F7',
			borderRight: '1px solid rgba(0, 0, 0, 0.075)',
			display: 'flex',
			flexDirection: 'column',
			width: 240,
		}}
		{...props}
	/>
);
const SidebarNav = props => (
	<nav css={{ flex: 1 }}>
		<ul css={{ listStyle: 'none', margin: 0, padding: 0 }} {...props} />
	</nav>
);
const SidebarSearch = props => (
	<input
		css={{
			background: 0,
			borderWidth: '1px 0px',
			borderStyle: 'solid',
			borderColor: 'rgba(0, 0, 0, 0.075)',
			boxSizing: 'border-box',
			fontSize: 'inherit',
			outline: 0,
			marginBottom: 10,
			padding: '10px 20px',
			width: '100%',

			':focus': {
				background: 'rgba(0,0,0,0.04)',
			},
		}}
		{...props}
	/>
);
const SidebarLink = ({ primaryColor, ...props }) => (
	<NavLink
		css={{
			backgroundColor: '#F4F5F7',
			borderLeft: '3px solid transparent',
			color: primaryColor,
			display: 'block',
			fontWeight: 500,
			outline: 0,
			padding: '10px 20px',
			textDecoration: 'none',

			':hover, :focus': {
				background: '#fafbfc',
				borderLeftColor: primaryColor,
			},

			'&.active': {
				// background: '#fafbfc',
				borderLeftColor: primaryColor,
				color: 'inherit',
			},
		}}
		{...props}
	/>
);
const SidebarItem = props => (
	<li data-test-nav>
		<SidebarLink {...props} />
	</li>
);
const SidebarTitle = props => (
	<NavLink
		css={{
			color: 'inherit',
			display: 'block',
			fontWeight: 500,
			fontSize: '1.25em',
			padding: 20,
			textDecoration: 'none',
		}}
		{...props}
	/>
);

const SidebarSwitcher = props => (
	<div
		css={{
			display: 'flex',
			fontSize: '0.85rem',
		}}
		{...props}
	/>
);
const SidebarSwitch = ({ isChecked, ...props }) => (
	<label
		css={{
			alignItems: 'center',
			borderTop: '1px solid',
			borderTopColor: isChecked ? '#1F252C' : 'rgba(0, 0, 0, 0.1)',
			boxSizing: 'border-box',
			color: isChecked ? 'inherit' : '#1F252C',
			cursor: 'pointer',
			flex: 1,
			fontWeight: 500,
			justifyContent: 'center',
			paddingBottom: 12,
			paddingTop: 12,
			textAlign: 'center',

			input: {
				height: 1,
				position: 'absolute',
				visibility: 'hidden',
				width: 1,
			},
		}}
		{...props}
	/>
);

// ==============================
// Render to node
// ==============================

export default (pkg, components) => {
	const rootElement = document.getElementById('root');
	ReactDOM.render(<App packageName={pkg} components={components} />, rootElement);
};
