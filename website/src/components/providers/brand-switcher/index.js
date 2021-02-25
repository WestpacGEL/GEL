import React, { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import bomBrand from '@westpac/bom';
import bsaBrand from '@westpac/bsa';
import btfgBrand from '@westpac/btfg';
import stgBrand from '@westpac/stg';
import wbcBrand from '@westpac/wbc';
import wbgBrand from '@westpac/wbg';
import ramsBrand from '@westpac/rams';

// ==============================
// Get the data
// ==============================

const BRANDS = {
	WBC: wbcBrand,
	STG: stgBrand,
	BOM: bomBrand,
	BSA: bsaBrand,
	WBG: wbgBrand,
	BTFG: btfgBrand,
	RAMS: ramsBrand,
};

const BrandSwitcherContext = createContext();

const BrandSwitcherProvider = ({ children, brand: initialBrand }) => {
	const [brand, setBrand] = useState(initialBrand || 'BOM');
	const router = useRouter();
	return (
		<BrandSwitcherContext.Provider
			value={{
				brands: BRANDS,
				brand,
				setBrand: (brand) => {
					setBrand(brand);
					document.cookie = `gel_selected_brand=${brand}`;
					const { query } = router;
					const as = `${router.asPath.split('?')[0]}?b=${brand}${
						query.tab ? `&tab=${query.tab}` : ''
					}`;
					query.b = brand;
					let params = new URLSearchParams();

					Object.keys(query).forEach((key) => {
						if (Array.isArray(query[key])) {
							query[key].forEach((val) => params.append(key, val));
						} else {
							params.append(key, query[key]);
						}
					});

					window.history.replaceState(
						{
							as,
							url: `/design-system/[...page]?${params}`,
							options: { shallow: true },
						},
						'',
						as
					);
				},
			}}
		>
			{children}
		</BrandSwitcherContext.Provider>
	);
};

const useBrandSwitcher = () => {
	const context = useContext(BrandSwitcherContext);
	if (!context) {
		throw new Error('Trying to use the BrandSwitcherContext outside of a <BrandSwitcherProvider>.');
	}
	return context;
};

export { BrandSwitcherProvider, useBrandSwitcher };
