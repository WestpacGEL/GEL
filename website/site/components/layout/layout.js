/** @jsx jsx */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

import { GEL, jsx, useBrand } from '@westpac/core';

import { BrandPicker } from '../brand-picker';
import { Footer, Normalize, Sidebar } from './';
import { useBrandSwitcher, BrandSwitcherProvider } from '../providers/brand-switcher';
import { SidebarProvider, useSidebar } from '../providers/sidebar';

import { ALL_COMPONENTS } from '../../../graphql';

const LayoutView = ({ components, children }) => {
	const { isOpen, setIsOpen } = useSidebar();

	return (
		<GridContainer>
			<SidebarContainer>
				<Sidebar components={components} />
			</SidebarContainer>
			<MainContainer>
				{children}
				<Footer />
			</MainContainer>
		</GridContainer>
	);
};

/*
  Wrapper with logic
*/

const Wrapper = props => {
	const router = useRouter();
	const brandParam = router.query.brand || '';

	const { brands, brand } = useBrandSwitcher();
	const { data, error } = useQuery(ALL_COMPONENTS);

	const brandNames = Object.keys(brands);
	const isMatch = brandNames.filter(name => name === brandParam).length > 0;

	// If no brand is detected, show the brand picker...
	if (!isMatch) {
		// show brand selector
		return <BrandPicker />;
	}

	// Handle async state...
	if (!data) return 'loading...';
	if (error) return 'error!!';

	// We can now assume we have our components data...
	const components = data.allComponents;

	return (
		<GEL brand={brands[brand]}>
			<Normalize />
			<SidebarProvider>
				<LayoutView components={components} {...props} />
			</SidebarProvider>
		</GEL>
	);
};

/*
  Styled components
*/

const GridContainer = props => {
	return (
		<div
			css={{
				display: 'grid',
				gridTemplateColumns: '1fr',
				width: '100vw',
				height: '100vh',
				fontFamily:
					'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',

				'@media only screen and (min-width: 840px)': {
					gridTemplateColumns: '270px auto',
				},
			}}
			{...props}
		/>
	);
};

const SidebarContainer = ({ children, ...props }) => {
	const { isOpen, setIsOpen } = useSidebar();
	const { COLORS } = useBrand();
	return (
		<aside
			css={{
				background: 'white',
				gridColumnStart: 1,
				gridColumnEnd: 2,
				transition: 'transform 0.15s',
				boxShadow: `1px 0 1px ${COLORS.border}`,

				'@media only screen and (max-width: 839px)': {
					position: 'absolute',
					top: 0,
					left: 0,
					width: 270,
					minHeight: '100vh',
					transform: isOpen ? 'translateX(0px)' : 'translateX(-270px)',
				},
			}}
			{...props}
		>
			{isOpen && (
				<button onClick={() => setIsOpen(false)} css={{ position: 'absolute', top: 0, right: 0 }}>
					close
				</button>
			)}
			{children}
		</aside>
	);
};

const MainContainer = props => {
	const { isOpen, setIsOpen } = useSidebar();
	return (
		<main
			css={{
				gridColumnStart: 2,
				gridColumnEnd: 3,
				overflowY: 'scroll',
			}}
			{...props}
			setIsOpen={setIsOpen}
			isOpen={isOpen}
		/>
	);
};

export const Layout = props => (
	<BrandSwitcherProvider>
		<Wrapper {...props} />
	</BrandSwitcherProvider>
);
