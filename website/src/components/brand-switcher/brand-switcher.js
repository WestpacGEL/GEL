/** @jsx jsx */
import { Fragment, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Select, { components } from 'react-select';
import { ExpandMoreIcon, ExpandLessIcon } from '@westpac/icon';
import { BASE_URL, BASE_PAGE } from '../config';

import { jsx, useBrand } from '@westpac/core';
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

import { useBrandSwitcher } from '../providers/brand-switcher';

export const brandsMap = {
	BOM: {
		logo: BOMLogo,
		label: 'Bank of Melbourne',
		smallLogo: BOMShieldLogo,
	},
	BSA: {
		logo: BSALogo,
		label: 'Bank of South Australia',
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
	const { SPACING, COLORS } = useBrand();
	const Logo = brandsMap[brand].logo;

	return (
		<Fragment>
			<div css={{ height: 35, padding: `${SPACING(6)} ${SPACING(4)}` }}>
				<Link href={BASE_PAGE} as={`${BASE_URL}?b=${brandName}`}>
					<a>
						<Logo />
					</a>
				</Link>
			</div>
			<Select
				closeMenuOnSelect={false}
				components={{ Option }}
				placeholder={'Change brand'}
				styles={{
					option: base => ({
						...base,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						height: '60px',
						padding: `${SPACING(2, true)} ${SPACING(4, true)}`,
						borderBottom: `solid 1px ${COLORS.tints.muted30}`,
						cursor: 'pointer',
					}),
					control: base => ({
						...base,
						borderRadius: 0,
						border: 0,
						borderBottom: `solid 1px ${COLORS.tints.muted30}`,
						height: '66px',
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
					}),
					indicatorSeparator: base => ({
						...base,
						margin: '0',
					}),
					dropdownIndicator: base => ({
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
						},
					}),
				}}
				onChange={data => {
					setBrand(data.value);
				}}
				options={Object.keys(brandsMap).map(k => ({ value: k, label: brandsMap[k].label }))}
			/>
		</Fragment>
	);
};
