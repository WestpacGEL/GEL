import React from 'react';
import { useRouter } from 'next/router';
import { useBrandSwitcher } from '../providers/brand-switcher';

const BrandPicker = () => {
	const { brands, brand, setBrand } = useBrandSwitcher();
	const router = useRouter();

	const selectBrand = brandName => {
		setBrand(brandName);
		router.push(
			`${router.route}?brand=${brandName}`,
			// uggggh no! Must be a better way... 👇
			`${router.asPath.split('?')[0]}?brand=${brandName}`
		);
	};

	return (
		<div>
			<h2>Pick your brand!</h2>
			<ul>
				{Object.entries(brands).map(([brandName, brand], i) => {
					return (
						<li key={i}>
							<button onClick={() => selectBrand(brandName)}>{brandName}</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default BrandPicker;
