/** @jsx jsx */
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { GEL, jsx, useBrand } from '@westpac/core';

import { BrandPicker } from '../brand-picker';
import { Footer, Normalize, Sidebar } from './';
import { useBrandSwitcher, BrandSwitcherProvider } from '../providers/brand-switcher';
import { SidebarProvider } from '../providers/sidebar';
import gql from 'graphql-tag';

/*
  Wrapper with logic
*/

const Wrapper = (props) => {
	const router = useRouter();
	if (!router) return null;

	const brandParam = router.query.b || '';

	const { brands, brand } = useBrandSwitcher();

	const brandNames = Object.keys(brands);
	const isMatch = brandNames.filter((name) => name === brandParam).length > 0;

	// If no brand is detected, show the brand picker...
	if (!isMatch) {
		// show brand selector
		return (
			<GEL brand={brands['WBC']}>
				<Normalize />
				<BrandPicker />
			</GEL>
		);
	}

	let { data, error } = useQuery(
		gql`
			query AllSettings {
				allSettings(where: { name: "navigation" }) {
					id
					name
					value
				}
			}
		`
	);

	// Handle async state...
	if (error) return <p>There was an error fetching data for the navigation.</p>;
	if (!data || !data.allSettings) return null;

	const navigation = data.allSettings[0] ? JSON.parse(data.allSettings[0].value) : [];

	return (
		<GEL brand={brands[brand]}>
			<Normalize />
			<SidebarProvider>
				<GridContainer>
					<Sidebar items={navigation} />
					<MainContainer>{props.children}</MainContainer>
				</GridContainer>
			</SidebarProvider>
		</GEL>
	);
};

/*
  Styled components
*/

const GridContainer = (props) => {
	const { LAYOUT } = useBrand();
	return (
		<div
			css={{
				display: 'grid',
				gridTemplateColumns: '1fr',
				width: '100vw',
				height: '100vh',

				[`@media only screen and (min-width: ${LAYOUT.breakpoints.xl}px)`]: {
					gridTemplateColumns: '300px auto',
				},
			}}
			{...props}
		/>
	);
};

const MainContainer = (props) => {
	const { LAYOUT } = useBrand();
	return (
		<main
			{...props}
			css={{
				scrollBehavior: 'smooth',
				display: 'flex !important',
				flexDirection: 'column',
				overflowY: 'scroll',
				[`@media only screen and (min-width: ${LAYOUT.breakpoints.xl}px)`]: {
					gridColumnStart: 2,
					gridColumnEnd: 3,
				},
			}}
		/>
	);
};

export const Layout = (props) => {
	return (
		<BrandSwitcherProvider brand={props.brand}>
			<Wrapper {...props} />
		</BrandSwitcherProvider>
	);
};
