/** @jsx jsx */
import { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { jsx, useBrand } from '@westpac/core';
import { BOMLogo, BSALogo, BTFGLogo, STGLogo, WBCLogo, WBGLogo } from '@westpac/symbol';

import { useBrandSwitcher } from '../providers/brand-switcher';

export const BrandSwitcher = () => {
	const brandName = useRouter().query.b || '';
	const { brands, brand, setBrand } = useBrandSwitcher();
	const { SPACING, COLORS } = useBrand();

	const logosMap = {
		BOM: BOMLogo,
		BSA: BSALogo,
		BTFG: BTFGLogo,
		STG: STGLogo,
		WBC: WBCLogo,
		WBG: WBGLogo,
	};

	const Logo = logosMap[brand];

	return (
		<Fragment>
			<div css={{ height: 35 }}>
				<Link href={`/?b=${brandName}`}>
					<a>
						<Logo />
					</a>
				</Link>
			</div>
			<label
				css={{
					display: 'block',
					textTransform: 'uppercase',
					color: COLORS.muted,
					fontSize: 12,
					letterSpacing: 2,
					marginTop: SPACING(4),
					marginBottom: SPACING(1),
				}}
			>
				brand switcher
			</label>
			<select css={{ width: '100%' }} value={brand} onChange={e => setBrand(e.target.value)}>
				{Object.entries(brands).map(([brandName, brand], i) => {
					return (
						<option key={brandName} value={brandName}>
							{brandName}
						</option>
					);
				})}
			</select>
		</Fragment>
	);
};
