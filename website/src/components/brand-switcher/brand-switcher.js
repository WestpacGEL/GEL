/** @jsx jsx */
import { Fragment, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Select, { components } from 'react-select';

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
import { ExpandMoreIcon, ExpandLessIcon } from '@westpac/Icon';

import { useBrandSwitcher } from '../providers/brand-switcher';

const brandsMap = {
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
			<Logo css={{ width: 30, height: 30, marginRight: 10 }} />
			<div css={{ display: 'flex', alignItem: 'center' }}>{props.data.label}</div>
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
			<div css={{ height: 35, padding: SPACING(2) }}>
				<Link href={`/?b=${brandName}`}>
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
						justifyContent: 'start',
						height: '100%',
						padding: `${SPACING(2, true)} ${SPACING(4, true)}`,
					}),
					control: base => ({
						...base,
						borderRadius: 0,
						border: 0,
						borderBottom: `solid 1px ${COLORS.tints.muted30}`,
						margin: `${SPACING(4, true)} ${SPACING(3, true)} 0 ${SPACING(3, true)}`,
					}),
					dropdownIndicator: base => ({ ...base, color: COLORS.primary }),
				}}
				onChange={data => {
					setBrand(data.value);
				}}
				options={Object.keys(brandsMap).map(k => ({ value: k, label: brandsMap[k].label }))}
			/>
		</Fragment>
	);
};
