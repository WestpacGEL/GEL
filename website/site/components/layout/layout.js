/** @jsx jsx */
import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

import BrandPicker from '../brand-picker';
import Footer from '../footer';
import Normalize from './normalize';
import Sidebar from '../sidebar';
import { useBrandSwitcher, BrandSwitcherProvider } from '../providers/brand-switcher';
import { ALL_COMPONENTS } from '../../../graphql';

const Layout = ({ children }) => {
	const router = useRouter();
	const brandParam = router.query.brand || '';

	const { brands, brand } = useBrandSwitcher();
	const { data, error } = useQuery(ALL_COMPONENTS);

	const brandNames = Object.keys(brands);
	const isMatch = brandNames.filter(name => name === brandParam).length > 0;

	if (!isMatch) {
		// TODO: check in cookies

		// show brand selector
		return <BrandPicker />;
	}

	if (!data) return 'loading...';
	if (error) return 'error!!';

	const components = data.allComponents;

	return (
		<GEL brand={brands[brand]}>
			<Normalize />
			<GridContainer>
				<SidebarContainer>
					<Sidebar components={components} />
				</SidebarContainer>
				<MainContainer>
					{children}
					<Footer />
				</MainContainer>
			</GridContainer>
		</GEL>
	);
};

const GridContainer = props => (
	<div
		css={{
			fontFamily:
				'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
			display: 'grid',
			width: '100vw',
			height: '100vh',
			gridTemplateColumns: '270px auto',
			gridColumnGap: 20,
		}}
		{...props}
	/>
);

const SidebarContainer = props => (
	<div
		css={{
			gridColumnStart: 1,
			gridColumnEnd: 2,
		}}
		{...props}
	/>
);

const MainContainer = props => (
	<div
		css={{
			gridColumnStart: 2,
			gridColumnEnd: 3,
			overflowY: 'scroll',
		}}
		{...props}
	/>
);

export default ({ children }) => (
	<BrandSwitcherProvider>
		<Layout>{children}</Layout>
	</BrandSwitcherProvider>
);
