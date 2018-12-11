import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import './styles.css';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

// ==============================
// Get the data
// ==============================

const PAGES = [
	{ label: 'Button', path: '/button' },
	{ label: 'Grid', path: '/grid' },
	{ label: 'Tabcordion', path: '/tabcordion' },
];

// ==============================
// Compose the pieces
// ==============================

const App = () => {
	const [inputValue, setInputValue] = useState('');
	const pages = inputValue.length
		? PAGES.filter(p => p.path.slice(1).includes(inputValue.toLowerCase()))
		: PAGES;

	return (
		<Router>
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
					<SidebarTitle>GEL Docs</SidebarTitle>
					<SidebarSearch
						onChange={e => setInputValue(e.target.value)}
						placeholder="Search..."
						type="search"
						value={inputValue}
					/>
					{pages.map(page => (
						<SidebarItem key={page.path} to={page.path}>
							{page.label}
						</SidebarItem>
					))}
				</Sidebar>
				<Switch>
					{PAGES.map(page => (
						<Route path={page.path} component={Page} />
					))}
				</Switch>
			</Body>
		</Router>
	);
};

const Page = props => (
	<Article>
		<Container>
			<h1>
				<code>{props.match.path}</code>
			</h1>
			<p>
				Tootsie roll muffin halvah candy carrot cake gingerbread sweet cotton candy. Cake pie
				caramels. Bear claw muffin cake cake macaroon tart.
			</p>
			<p>
				Cookie gummies jujubes soufflé lollipop. Wafer gummies tiramisu brownie dessert croissant.
				Macaroon bear claw dragée cotton candy jujubes croissant jelly.
			</p>
			<p>
				Cupcake jujubes toffee cheesecake gingerbread. Sesame snaps dragée gummi bears. Cheesecake
				apple pie dessert sweet pastry toffee gummi bears.
			</p>
			<p>
				Tart cotton candy powder. Jujubes sugar plum jujubes cake bonbon gingerbread icing sweet.
				Pie oat cake chocolate bar pudding liquorice ice cream.
			</p>
			<p>
				Donut dessert jelly beans macaroon. Cake lemon drops lollipop candy lollipop. Candy
				liquorice marzipan tiramisu liquorice tart sugar plum sugar plum. Powder cheesecake pudding
				cake pastry chocolate fruitcake.
			</p>
		</Container>
	</Article>
);

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
	width: 240,
});
const SidebarSearch = styled.input({
	background: 0,
	borderWidth: '1px 0px',
	borderStyle: 'solid',
	borderColor: 'rgba(0,0,0,0.1)',
	boxSizing: 'border-box',
	fontSize: 'inherit',
	outline: 0,
	marginBottom: 10,
	padding: '10px 20px',
	width: '100%',

	':focus': {
		background: 'rgba(0,0,0,0.05)',
	},
});
const SidebarItem = styled(NavLink)(props => ({
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
const SidebarTitle = styled.div({
	fontWeight: 500,
	fontSize: '1.25em',
	padding: 20,
});

// ==============================
// Render to node
// ==============================

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
