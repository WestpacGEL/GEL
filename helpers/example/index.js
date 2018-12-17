/* @jsx jsx */

import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';

import { Global, css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useContainerQuery } from '../../components/hooks';

// ==============================
// Get the data
// ==============================

const BRANDS = {
	BOM: { primaryLight: '#EAE6FF' },
	BSA: { primaryLight: '#DEEBFF' },
	STG: { primaryLight: '#E3FCEF' },
	WBC: { primaryLight: '#FFEBE6' },
};

// ==============================
// Compose the pieces
// ==============================

const App = ({ components, packageName }) => {
	const [inputValue, setInputValue] = useState('');
	const [theme, setTheme] = useState('WBC');

	// update doc title
	useEffect(() => {
		document.title = `${packageName} Example - GEL`;
	}, packageName);

	// filter components for search
	const navItems = inputValue.length
		? components.filter(p => p.label.toLowerCase().includes(inputValue.toLowerCase()))
		: components;

	return (
		<Router>
			<ThemeProvider theme={BRANDS[theme]}>
				<Body>
					<Global
						styles={css`
							body {
								-moz-font-feature-settings: 'liga' on;
								-moz-osx-font-smoothing: grayscale;
								-webkit-font-smoothing: antialiased;
								background-color: #fafbfc;
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
								<SidebarItem key={slug} to={`/${slug}`}>
									{label}
								</SidebarItem>
							))}
						</SidebarNav>

						<SidebarSwitcher>
							{Object.keys(BRANDS).map(brand => (
								<SidebarSwitch key={brand} isChecked={theme === brand}>
									<input
										name="brand"
										type="radio"
										onChange={e => setTheme(brand)}
										value={brand}
										checked={theme === brand}
									/>
									{brand}
								</SidebarSwitch>
							))}
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
			</ThemeProvider>
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

const Home = ({ packageName }) => {
	const ref = useRef();
	const width = useContainerQuery(ref);

	return (
		<Article>
			<Container>
				<div ref={ref} />
				<pre>{width}</pre>
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
};

// ==============================
// Styled components
// ==============================

const Body = styled.div({
	alignItems: 'stretch',
	display: 'flex',
	height: '100vh',
});
const Article = styled.article({
	flex: 1,
	overflowY: 'auto',
});
const Container = styled.div({
	marginLeft: 'auto',
	marginRight: 'auto',
	maxWidth: 800,
	padding: 20,
});

const Sidebar = styled.div({
	backgroundColor: '#F4F5F7',
	borderRight: '1px solid rgba(0, 0, 0, 0.075)',
	display: 'flex',
	flexDirection: 'column',
	width: 240,
});
const SidebarNav = props => (
	<nav css={{ flex: 1 }}>
		<ul css={{ listStyle: 'none', margin: 0, padding: 0 }} {...props} />
	</nav>
);
const SidebarSearch = styled.input({
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
});
const SidebarLink = styled(NavLink)(props => ({
	backgroundColor: '#F4F5F7',
	borderLeft: '3px solid transparent',
	color: '#2684FF',
	display: 'block',
	fontWeight: 500,
	outline: 0,
	padding: '10px 20px',
	textDecoration: 'none',

	':hover, :focus': {
		background: '#fafbfc',
		borderLeftColor: '#2684FF',
	},

	'&.active': {
		// background: '#fafbfc',
		borderLeftColor: '#2684FF',
		color: 'inherit',
	},
}));
const SidebarItem = props => (
	<li>
		<SidebarLink {...props} />
	</li>
);
const SidebarTitle = styled(NavLink)({
	color: 'inherit',
	display: 'block',
	fontWeight: 500,
	fontSize: '1.25em',
	padding: 20,
	textDecoration: 'none',
});

const SidebarSwitcher = styled.div({
	display: 'flex',
	fontSize: '0.85rem',
});
const SidebarSwitch = styled.label(({ isChecked }) => ({
	alignItems: 'center',
	borderTop: '1px solid',
	borderTopColor: isChecked ? '#2684FF' : 'rgba(0, 0, 0, 0.1)',
	boxSizing: 'border-box',
	color: isChecked ? 'inherit' : '#2684FF',
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
}));

// ==============================
// Render to node
// ==============================

export default (pkg, components) => {
	const rootElement = document.getElementById('root');
	ReactDOM.render(<App packageName={pkg} components={components} />, rootElement);
};
