/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

import { BRANDS } from './brands';

export function Sidebar({ components, brand, setBrand, parent = '' }) {
	const [searchValue, setSearchValue] = useState('');
	const location = useLocation();
	const { COLORS } = useBrand();

	let navItems = components;
	const length = (location.pathname.match(/\//g) || []).length;

	if (location.pathname !== '/' && length === 1) {
		navItems = navItems.filter(component => location.pathname === `/${component.parent}`);
	} else if (length > 1) {
		navItems = navItems.filter(component => location.pathname.split('/')[1] === component.parent);
	} else {
		navItems = navItems.filter(component => component.landing);
		if(navItems.length === 0) {
			navItems = components;
		}
	}

	if (searchValue.length) {
		navItems = navItems.filter(p => p.label.toLowerCase().includes(searchValue.toLowerCase()));
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
				onChange={e => setSearchValue(e.target.value)}
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
				<ul
					css={{
						listStyle: 'none',
						margin: '1rem 0',
						padding: 0,
					}}
				>
					{navItems.map(({ label, slug }) => (
						<li data-test-nav key={slug}>
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
								}}
							>
								{label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>

			<div
				css={{
					display: 'flex',
					fontSize: '0.8125rem',
				}}
			>
				{Object.keys(BRANDS).map(b => {
					const isChecked = brand === b;
					return (
						<label
							key={b}
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
								paddingBottom: '0.75rem',
								paddingTop: '0.75rem',
								textAlign: 'center',

								input: {
									height: 1,
									position: 'absolute',
									visibility: 'hidden',
									width: 1,
								},
							}}
						>
							<input
								name="brand"
								type="radio"
								onChange={e => setBrand(b)}
								value={b}
								checked={isChecked}
							/>
							{b}
						</label>
					);
				})}
			</div>
		</div>
	);
}
