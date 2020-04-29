/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import Select, { components } from 'react-select';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { BASE_URL } from '../../config';
import { useBrandSwitcher } from '../providers/brand-switcher';
import { useSidebar } from '../providers/sidebar';
import {
	BOMLogo,
	BSALogo,
	BTFGLogo,
	STGLogo,
	WBCLogo,
	WBGLogo,
	BOMShieldLogo,
	BSAStackedLogo,
	BTFGStackedLogo,
	STGDragonLogo,
} from '@westpac/symbol';

export const brandsMap = {
	BOM: {
		logo: BOMLogo,
		label: 'Bank of Melbourne',
		smallLogo: BOMShieldLogo,
	},
	BSA: {
		logo: BSALogo,
		label: 'BankSA',
		smallLogo: BSAStackedLogo,
	},
	BTFG: {
		logo: BTFGLogo,
		label: 'BT Financial Group',
		smallLogo: BTFGStackedLogo,
	},
	STG: {
		logo: STGLogo,
		label: 'St. George',
		smallLogo: STGDragonLogo,
	},
	WBC: {
		logo: WBCLogo,
		label: 'Westpac',
		smallLogo: WBCLogo,
	},
	WBG: {
		logo: WBGLogo,
		label: 'Westpac Group',
		smallLogo: WBCLogo,
	},
};

const Option = props => {
	const Logo = brandsMap[props.data.value].smallLogo;
	return (
		<components.Option {...props}>
			<div css={{ display: 'flex', alignItem: 'center' }}>{props.data.label}</div>
			<Logo css={{ width: 30, height: 30, marginRight: 10 }} />
		</components.Option>
	);
};

export const BrandSwitcher = () => {
	const brandName = useRouter().query.b || '';
	const { brand, setBrand } = useBrandSwitcher();
	const { isScrolled } = useSidebar();
	const { SPACING, COLORS, PACKS } = useBrand();
	const Logo = brandsMap[brand].logo;

	return (
		<div css={{ position: 'sticky', top: 0 }}>
			<div
				css={{
					display: 'flex',
					alignItems: 'center',
					height: 90,
					padding: `0 ${SPACING(3)}`,
					background: '#fff',
				}}
			>
				<Link href={'/'} as={`${BASE_URL}`}>
					<a>
						<Logo />
					</a>
				</Link>
			</div>
			<Select
				closeMenuOnSlect={false}
				components={{ Option }}
				placeholder={'Change brand'}
				styles={{
					container: (base, { selectProps: { menuIsOpen } }) => ({
						...base,
						...(isScrolled && !menuIsOpen && { boxShadow: '0 4px 4px rgba(0, 0, 0, 0.3)' }),
					}),
					menu: base => ({
						...base,
						margin: 0,
						borderRadius: 0,
						boxShadow: '0 4px 4px rgba(0, 0, 0, 0.3)',
					}),
					menuList: base => ({
						...base,
						maxHeight: '100%',
						padding: 0,
					}),
					option: (base, { isFocused }) => ({
						...base,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						height: '60px',
						padding: `0 ${SPACING(3)}`,
						borderBottom: `solid 1px ${COLORS.tints.muted30}`,
						cursor: 'pointer',
						...(isFocused && { backgroundColor: COLORS.background }),
					}),
					control: base => ({
						...base,
						borderRadius: 0,
						border: 0,
						borderBottom: `solid 1px ${COLORS.tints.muted30}`,
						height: '66px',
						boxShadow: 'none',

						':hover': {
							borderBottom: `solid 1px ${COLORS.tints.muted30}`,
						},
					}),
					valueContainer: base => ({
						...base,
						display: 'flex',
						alignItems: 'center',
						paddingLeft: SPACING(4),
					}),
					placeholder: base => ({
						...base,
						color: COLORS.text,
						fontSize: '0.875rem',
					}),
					indicatorSeparator: base => ({
						...base,
						margin: '0',
					}),
					dropdownIndicator: (base, { selectProps: { menuIsOpen } }) => ({
						...base,
						color: COLORS.primary,
						width: '66px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						cursor: 'pointer',
						svg: {
							height: '24px',
							width: 'auto',
							transform: `rotate(${menuIsOpen ? 180 : 0}deg)`,
							transition: 'transform 0.2s linear',
						},
					}),
				}}
				onChange={data => {
					setBrand(data.value);
				}}
				options={Object.keys(brandsMap).map(k => ({ value: k, label: brandsMap[k].label }))}
			/>
		</div>
	);
};
