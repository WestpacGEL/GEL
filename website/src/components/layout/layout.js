/** @jsx jsx */
import { GEL, jsx, css, Global, useBrand, useMediaQuery } from '@westpac/core';
import { useQuery } from '@apollo/react-hooks';
import { SkipLink } from '@westpac/a11y';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import gql from 'graphql-tag';

import { useBrandSwitcher, BrandSwitcherProvider } from '../providers/brand-switcher';
import { SidebarContextProvider } from '../providers/sidebar';
import { brandOverrides } from '../../brand-overrides';
import { FontPreloader } from '../fontPreloader';
import { BrandPicker } from '../brand-picker';
import { BASE_URL } from '../../config.js';
import { Sidebar } from './';

const LoadGELFonts = () => (
	<Global
		styles={css`
			@font-face {
				font-family: 'graphik';
				src: url('${BASE_URL}/fonts/Graphik-Bold-Web.eot');
				src: url('${BASE_URL}/fonts/Graphik-Bold-Web.eot?#iefix') format('embedded-opentype'),
					url('${BASE_URL}/fonts/Graphik-Bold-Web.woff') format('woff'),
					url('${BASE_URL}/fonts/Graphik-Bold-Web.ttf') format('truetype'),
					url('${BASE_URL}/fonts/Graphik-Bold-Web.svg#Graphik-Bold') format('svg');
				font-weight: 700;
				font-style: normal;
			}
			@font-face {
				font-family: 'guardian';
				src: url('${BASE_URL}/fonts/GuardianEgyp-LightIt-Web.eot');
				src: url('${BASE_URL}/fonts/GuardianEgyp-LightIt-Web.eot?#iefix')
						format('embedded-opentype'),
					url('${BASE_URL}/fonts/GuardianEgyp-LightIt-Web.woff') format('woff'),
					url('${BASE_URL}/fonts/GuardianEgyp-LightIt-Web.ttf') format('truetype'),
					url('${BASE_URL}/fonts/GuardianEgyp-LightIt-Web.svg#Guardian Egyptian Web') format('svg');
				font-weight: 300;
				font-style: italic;
			}
		`}
	/>
);

const GlobalReset = () => {
	const { COLORS } = useBrand();

	return (
		<Global
			styles={css`
				html {
					line-height: 1.15;
					-webkit-text-size-adjust: 100%;
				}
				body {
					margin: 0;
					background-color: ${COLORS.background};
				}
			`}
		/>
	);
};

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
			<GEL brand={brandOverrides(brands['WBC'])}>
				<GlobalReset />
				<SkipLink href="#content">Skip to main content</SkipLink>
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
		<GEL brand={brandOverrides(brands[brand])}>
			<GlobalReset />
			<SkipLink href="#content">Skip to main content</SkipLink>
			<SidebarContextProvider>
				<GridContainer>
					<Sidebar items={navigation} />
					<MainContainer>{props.children}</MainContainer>
				</GridContainer>
			</SidebarContextProvider>
		</GEL>
	);
};

/*
  Styled components
*/

const GridContainer = (props) => {
	const mq = useMediaQuery();
	return (
		<div
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
				paddingBottom: '3.0625rem', //space for fixed footer
			})}
			{...props}
		/>
	);
};

export const Layout = (props) => (
	<Fragment>
		<LoadGELFonts />
		<FontPreloader />
		<BrandSwitcherProvider brand={props.brand}>
			<Wrapper {...props} />
		</BrandSwitcherProvider>
	</Fragment>
);
