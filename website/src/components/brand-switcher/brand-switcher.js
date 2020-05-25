/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { ExpandMoreIcon, ExpandLessIcon } from '@westpac/icon';
import Select, { components } from 'react-select';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { BASE_URL } from '../../config';
import { useBrandSwitcher } from '../providers/brand-switcher';
import { useSidebar } from '../providers/sidebar';
import {
	BOMLogo,
	BSALogo,
	STGLogo,
	WBCLogo,
	WBGLogo,
	BOMShieldLogo,
	BSAStackedLogo,
	BTFGStackedLogo,
	STGDragonLogo,
} from '@westpac/symbol';

export const brandsMap = {
	WBC: {
		logo: WBCLogo,
		label: 'Westpac',
		smallLogo: WBCLogo,
	},
	STG: {
		logo: STGLogo,
		label: 'St. George',
		smallLogo: STGDragonLogo,
	},
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
	WBG: {
		logo: WBGLogo,
		label: 'Westpac Group',
		smallLogo: WBCLogo,
	},
};

const Option = (props) => {
	const Logo = brandsMap[props.data.value].smallLogo;
	return (
		<components.Option {...props}>
			{props.data.label}
			<Logo css={{ width: 50, height: 39 }} />
		</components.Option>
	);
};

const DropdownIndicator = (props) => {
	const { COLORS } = useBrand();
	const {
		selectProps: { menuIsOpen },
	} = props;
	return (
		<components.DropdownIndicator {...props}>
			{menuIsOpen ? (
				<ExpandLessIcon color={COLORS.primary} />
			) : (
				<ExpandMoreIcon color={COLORS.primary} />
			)}
		</components.DropdownIndicator>
	);
};
export const BrandSwitcher = () => {
	const brandName = useRouter().query.b || '';
	const { brand, setBrand } = useBrandSwitcher();
	const { isScrolled } = useSidebar();
	const { SPACING, COLORS, TYPE } = useBrand();
	const Logo = brandsMap[brand].logo;

	return (
		<div>
			<div
				css={{
					display: 'flex',
					alignItems: 'center',
					height: 90,
					padding: `0 ${SPACING(3)}`,
					background: '#fff',
				}}
			>
				<Link href={'/'} as={`${BASE_URL}?b=${brandName}`}>
					<a>
						<Logo />
					</a>
				</Link>
			</div>
			<Select
				components={{ Option, DropdownIndicator }}
				placeholder={'Change brand'}
				styles={{
					container: (base, { selectProps: { menuIsOpen } }) => ({
						...base,
						...(isScrolled && !menuIsOpen && { boxShadow: '0 4px 4px rgba(0, 0, 0, 0.3)' }),
					}),
					menu: (base) => ({
						...base,
						margin: 0,
						borderRadius: 0,
						boxShadow: '0 4px 4px rgba(0, 0, 0, 0.3)',
					}),
					menuList: (base) => ({
						...base,
						maxHeight: '100%',
						padding: 0,
					}),
					option: (base, { value, isFocused }) => ({
						...base,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						height: '60px',
						padding: `0 ${SPACING(3)}`,
						borderBottom: `solid 1px ${COLORS.border}`,
						cursor: 'pointer',
						fontSize: '0.875rem',
						...(brandName === value && TYPE.bodyFont[700]),
						...(isFocused && { backgroundColor: COLORS.background }),
					}),
					control: (base) => ({
						...base,
						borderRadius: 0,
						border: 0,
						borderBottom: !isScrolled && `solid 1px ${COLORS.border}`,
						height: '66px',
						boxShadow: 'none',

						':hover': {
							borderBottom: `solid 1px ${COLORS.border}`,
						},
					}),
					valueContainer: (base) => ({
						...base,
						display: 'flex',
						alignItems: 'center',
						paddingLeft: SPACING(3),
					}),
					placeholder: (base) => ({
						...base,
						...TYPE.bodyFont[400],
						color: COLORS.text,
						fontSize: '0.875rem',
					}),
					indicatorsContainer: (base) => ({
						...base,
						width: 72,
					}),
					indicatorSeparator: (base) => ({
						...base,
						margin: 0,
						backgroundColor: COLORS.border,
					}),
					dropdownIndicator: (base) => ({
						...base,
						margin: 'auto',
						color: COLORS.primary,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						cursor: 'pointer',
					}),
				}}
				onChange={(data) => {
					setBrand(data.value);
				}}
				options={Object.keys(brandsMap).map((k) => ({ value: k, label: brandsMap[k].label }))}
			/>
		</div>
	);
};
