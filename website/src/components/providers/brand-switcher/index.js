import React, { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import bomBrand from '@westpac/bom';
import bsaBrand from '@westpac/bsa';
import btfgBrand from '@westpac/btfg';
import stgBrand from '@westpac/stg';
import wbcBrand from '@westpac/wbc';
import wbgBrand from '@westpac/wbg';

// ==============================
// Get the data
// ==============================

const BRANDS = {
	WBC: { ...wbcBrand, name: 'Westpac' },
	STG: { ...stgBrand, name: 'St.George' },
	BOM: { ...bomBrand, name: 'Bank of Melbourne' },
	BSA: { ...bsaBrand, name: 'Bank of South Australia' },
	WBG: { ...wbgBrand, name: 'Westpac Group' },
	BTFG: { ...btfgBrand, name: 'BT Financial Group' },
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
				setBrand: brand => {
					document.cookie = `gel_selected_brand=${brand}`;
					router.push({
						pathname: window.location.pathname,
						query: { b: brand },
					});
					setBrand(brand);
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
