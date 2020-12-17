/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { ExpandMoreIcon, ExpandLessIcon } from '@westpac/icon';
import { Select } from '@westpac/text-input';
import { VisuallyHidden } from '@westpac/a11y';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

import { BRANDS } from './brands';

// Helper components
const SubMenuButton = ({ hidden, children, ...rest }) => (
	<button
		css={{
			width: '100%',
			backgroundColor: 'transparent',
			border: 'none',
			cursor: 'pointer',
			marginTop: '1rem !important',
			display: 'flex',
			justifyContent: 'space-between',
			fontSize: '1.125rem !important',
		}}
		{...rest}
	>
		{children}
		{hidden ? <ExpandMoreIcon /> : <ExpandLessIcon />}
	</button>
);

const SubMenu = ({ hidden, ...rest }) => (
	<ul
		css={{
			listStyle: 'none',
			margin: '0.5rem 0 1rem 0',
			padding: 0,
			display: hidden ? 'none' : 'block',
		}}
		{...rest}
	/>
);

const MenuItem = ({ slug, label, ...rest }) => {
	const { COLORS } = useBrand();
	const shortLabel = label.match(/([^\/]+)$/)[1];
	return (
		<li data-test-nav key={slug} {...rest}>
			<NavLink
				data-test-nav-link
				to={`/${slug}`}
				css={{
					backgroundColor: '#F4F5F7',
					borderLeft: '3px solid transparent',
					color: COLORS.primary,
					display: 'block',
					fontWeight: 500,
					padding: '0.625rem 1.0625rem',
					fontSize: '1rem',
					textDecoration: 'none',

					':hover, :focus': {
						background: '#fafbfc',
						textDecoration: 'inherit',
					},

					':focus': {
						outlineOffset: -3,
					},

					'&.active': {
						borderLeftColor: COLORS.primary,
						color: 'inherit',
					},
					textTransform: 'capitalize',
				}}
			>
				{shortLabel}
			</NavLink>
		</li>
	);
};

export function Sidebar({ components, brandName, setBrandName, parent = '' }) {
	const [searchValue, setSearchValue] = useState('');
	const [examplesHidden, setExamplesHidden] = useState(false);
	const [demosHidden, setDemosHidden] = useState(false);
	const location = useLocation();

	let navItems = components;
	const length = (location.pathname.match(/\//g) || []).length;

	if (location.pathname !== '/' && length === 1) {
		navItems = navItems.filter((component) => location.pathname === `/${component.parent}`);
	} else if (length > 1) {
		navItems = navItems.filter((component) => location.pathname.split('/')[1] === component.parent);
	} else {
		navItems = navItems.filter((component) => component.landing);
	}
	if (navItems.length === 0) {
		navItems = components;
	}

	if (searchValue.length) {
		navItems = navItems.filter((p) => p.label.toLowerCase().includes(searchValue.toLowerCase()));
	}

	return (
		<div
			css={{
				backgroundColor: '#F4F5F7',
				borderRight: '1px solid rgba(0, 0, 0, 0.075)',
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
				position: 'fixed',
				width: 240,
			}}
		>
			<NavLink
				to="/"
				css={{
					color: 'inherit',
					display: 'block',
					fontWeight: 500,
					fontSize: '1.25rem',
					padding: '1.25rem',
					textDecoration: 'none',

					':hover, :focus': {
						textDecoration: 'inherit',
					},

					':focus': {
						outlineOffset: -3,
					},
				}}
			>
				GEL
			</NavLink>
			<input
				onChange={(e) => setSearchValue(e.target.value)}
				placeholder="Search..."
				type="search"
				value={searchValue}
				css={{
					background: 0,
					borderWidth: '1px 0',
					borderStyle: 'solid',
					borderColor: 'rgba(0, 0, 0, 0.075)',
					boxSizing: 'border-box',
					fontSize: 'inherit',
					padding: '0.625rem 1.25rem',
					width: '100%',

					':focus': {
						background: 'rgba(0,0,0,0.04)',
						outlineOffset: -3,
					},
				}}
			/>

			<nav
				css={{
					flex: 1,
					overflowY: 'auto',
				}}
			>
				<SubMenuButton hidden={examplesHidden} onClick={() => setExamplesHidden(!examplesHidden)}>
					Examples
				</SubMenuButton>
				<SubMenu hidden={examplesHidden}>
					{navItems.reduce(
						(items, { label, slug, type }) =>
							type === 'example'
								? items.concat(<MenuItem key={slug} slug={slug} label={label} />)
								: items,
						[]
					)}
				</SubMenu>
				<SubMenuButton hidden={demosHidden} onClick={() => setDemosHidden(!demosHidden)}>
					Demos
				</SubMenuButton>
				<SubMenu hidden={demosHidden}>
					{navItems.reduce(
						(items, { label, slug, type }) =>
							type === 'demo'
								? items.concat(<MenuItem key={slug} slug={slug} label={label} />)
								: items,
						[]
					)}
				</SubMenu>
			</nav>

			<div
				css={{
					padding: '0.375rem',
					borderTop: '1px solid rgba(0, 0, 0, 0.075)',
				}}
			>
				<VisuallyHidden tag="label" forHtml="brandSelector">Brand:</VisuallyHidden>
				<Select id="brandSelector" value={brandName} onChange={(e) => setBrandName(e.target.value)}>
					{Object.keys(BRANDS).map((brand) => <option value={brand}>{brand}</option>)}
				</Select>
			</div>
		</div>
	);
}
