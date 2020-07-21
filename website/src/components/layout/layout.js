/** @jsx jsx */
import { GEL, jsx, useBrand, useMediaQuery } from '@westpac/core';
import { useContainerQuery } from '@westpac/hooks';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { useRef, useEffect } from 'react';
import gql from 'graphql-tag';

import { useBrandSwitcher, BrandSwitcherProvider } from '../providers/brand-switcher';
import { SidebarProvider, useSidebar } from '../providers/sidebar';
import { BrandPicker } from '../brand-picker';
import { Normalize, Sidebar } from './';

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
	const mq = useMediaQuery();
	const { LAYOUT } = useBrand();
	const ref = useRef();
	const { width } = useContainerQuery(ref);
	const { setIsOpen } = useSidebar();

	useEffect(() => {
		setIsOpen(width >= LAYOUT.breakpoints.lg);
	}, [width]);

	return (
		<div
			ref={ref}
			css={mq({
				display: 'grid',
				gridTemplateColumns: ['1fr', null, null, null, '300px auto'],
			})}
			{...props}
		/>
	);
};

const MainContainer = (props) => {
	const mq = useMediaQuery();
	return (
		<div
			className="main" //scroll event listening on '.main'
			css={mq({
				display: 'flex',
				flexDirection: 'column',
				gridColumnStart: [null, null, null, null, 2],
				gridColumnEnd: [null, null, null, null, 3],
				position: 'relative',
				zIndex: 0, //scrollbar on top of fixed elements
			})}
			{...props}
		/>
	);
};

export const Layout = (props) => (
	<BrandSwitcherProvider brand={props.brand}>
		<Wrapper {...props} />
	</BrandSwitcherProvider>
);
