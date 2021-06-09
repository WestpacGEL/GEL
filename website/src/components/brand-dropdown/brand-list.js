/** @jsx jsx */

import React from 'react';
import { jsx, useBrand } from '@westpac/core';
import { useBrandSwitcher } from '../providers/brand-switcher';
import { useBrandDropdownContext } from './brand-dropdown-context';
import { useSidebarContext } from '../providers/sidebar';

import {
	BOMMultibrandLargeLogo,
	BOMShieldLogo,
	BSAMultibrandLargeLogo,
	BSAStackedLogo,
	STGMultibrandLargeLogo,
	STGDragonLogo,
	WBCMultibrandLargeLogo,
	WBCLogo,
	WBGMultibrandLargeLogo,
	WBGLogo,
	RAMSMultibrandLargeLogo,
	RAMSLogo,
} from '@westpac/symbol';

export const brandsMap = {
	WBC: {
		logo: <WBCMultibrandLargeLogo />,
		smallLogo: <WBCLogo height={18} aria-hidden="true" />,
	},
	STG: {
		logo: <STGMultibrandLargeLogo />,
		smallLogo: <STGDragonLogo height={38} css={{ marginRight: -12 }} aria-hidden="true" />,
	},
	BOM: {
		logo: <BOMMultibrandLargeLogo />,
		smallLogo: <BOMShieldLogo height={39} css={{ marginRight: 9 }} aria-hidden="true" />,
	},
	BSA: {
		logo: <BSAMultibrandLargeLogo />,
		smallLogo: <BSAStackedLogo height={46} css={{ marginRight: 8 }} aria-hidden="true" />,
	},
	WBG: {
		logo: <WBGMultibrandLargeLogo />,
		smallLogo: <WBGLogo width={70} css={{ marginRight: -8 }} aria-hidden="true" />,
	},
	RAMS: {
		logo: <RAMSMultibrandLargeLogo />,
		smallLogo: <RAMSLogo width={70} css={{ marginRight: -8 }} aria-hidden="true" />,
	},
};

const OptionBtn = ({ brand, active, ...rest }) => {
	const { COLORS, PACKS, TYPE } = useBrand();
	const { setBrand } = useBrandSwitcher();
	const { close: closeBrandDropdown } = useBrandDropdownContext();
	const { close: closeSidebar } = useSidebarContext();

	const handleOptionClick = (brand) => {
		// Set brand
		setBrand(brand);

		// Close BrandDropdown and Sidebar
		closeBrandDropdown();
		setTimeout(() => {
			closeSidebar();
		}, 1000);
	};

	return (
		<button
			type="button"
			onClick={() => handleOptionClick(brand)}
			css={{
				appearance: 'none',
				whiteSpace: 'nowrap',
				cursor: 'pointer',
				lineHeight: 1.5,
				touchAction: 'manipulation',
				userSelect: 'none',
				boxSizing: 'border-box',
				backgroundColor: 'transparent',
				border: 0,
				fontSize: '0.875rem',
				color: active ? COLORS.primary : COLORS.text,
				display: 'flex',
				width: '100%',
				alignItems: 'center',
				justifyContent: 'space-between',
				height: '3.75rem',
				padding: '10px 18px 10px 18px',
				...(active && TYPE.bodyFont[700]),
				':hover, :focus': {
					backgroundColor: COLORS.background,
				},
				':focus': {
					outlineOffset: `-${PACKS.focus.outlineWidth} !important`,
				},
			}}
			{...rest}
		/>
	);
};

export const BrandList = (props) => {
	const { COLORS } = useBrand();
	const { brands, brand } = useBrandSwitcher();

	return (
		//a11y: as we're using `list-style:none` CSS, we need `role="list"` for VoiceOver to announce this as a list (see https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
		<ul role="list" css={{ paddingLeft: 0, listStyle: 'none', margin: 0 }} {...props}>
			{Object.entries(brandsMap).map(([key, val]) => (
				<li key={key} css={{ borderTop: `1px solid ${COLORS.border}` }}>
					<OptionBtn brand={key} active={brand === key}>
						<span css={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
							{brands[key].BRAND.name}
						</span>
						<div css={{ marginLeft: '0.4em' }}>{val.smallLogo}</div>
					</OptionBtn>
				</li>
			))}
		</ul>
	);
};
