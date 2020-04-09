/** @jsx jsx */
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

import { GEL, jsx, useBrand } from '@westpac/core';
import { CloseIcon } from '@westpac/icon';

import { BrandPicker } from '../brand-picker';
import { Footer, Normalize, Sidebar } from './';
import { useBrandSwitcher, BrandSwitcherProvider } from '../providers/brand-switcher';
import { SidebarProvider, useSidebar } from '../providers/sidebar';
import gql from 'graphql-tag';

/*
  Wrapper with logic
*/

const Wrapper = props => {
	const router = useRouter();
	if (!router) return null;

	const brandParam = router.query.b || '';

	const { brands, brand } = useBrandSwitcher();

	const brandNames = Object.keys(brands);
	const isMatch = brandNames.filter(name => name === brandParam).length > 0;

	// If no brand is detected, show the brand picker...
	if (!isMatch) {
		// show brand selector
		return <BrandPicker />;
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
					<SidebarContainer>
						<Sidebar items={navigation} />
					</SidebarContainer>
					<MainContainer>{props.children}</MainContainer>
				</GridContainer>
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
	const { isOpen } = useSidebar();
	const { COLORS } = useBrand();
	return (
		<aside
			css={{
				background: 'white',
				gridColumnStart: 1,
				gridColumnEnd: 2,
				transition: 'transform 0.15s',
				boxShadow: `1px 0 1px ${COLORS.border}`,
				zIndex: 2,
				overflowY: 'scroll',
				height: '100vh',
				'@media only screen and (max-width: 839px)': {
					position: 'absolute',
					zIndex: 10,
					top: 0,
					left: 0,
					width: 270,
					transform: isOpen ? 'translateX(0px)' : 'translateX(-270px)',
				},
			}}
			{...props}
		>
			<CloseButton />
			{children}
		</aside>
	);
};

const CloseButton = () => {
	const { setIsOpen } = useSidebar();
	const { COLORS, SPACING } = useBrand();
	return (
		<button
			onClick={() => setIsOpen(false)}
			css={{
				position: 'absolute',
				top: 0,
				right: 0,
				margin: SPACING(2),
				padding: 0,
				background: 'none',
				border: 'none',
				cursor: 'pointer',
				'@media only screen and (min-width: 840px)': { display: 'none' },
			}}
		>
			<CloseIcon color={COLORS.neutral} size="small" />
		</button>
	);
};

const MainContainer = props => {
	return (
		<main
			{...props}
			css={{
				scrollBehavior: 'smooth',
				display: 'flex !important',
				flexDirection: 'column',
				overflowY: 'scroll',
				'@media only screen and (min-width: 840px)': {
					gridColumnStart: 2,
					gridColumnEnd: 3,
				},
			}}
		/>
	);
};

export const Layout = props => {
	return (
		<BrandSwitcherProvider brand={props.brand}>
			<Wrapper {...props} />
		</BrandSwitcherProvider>
	);
};
