import React from 'react';
import Router from 'next/router';
import { useBrandSwitcher } from '../providers/brand-switcher';

const BrandPicker = () => {
	const { brands, brand, setBrand } = useBrandSwitcher();
	return (
		<div>
			<h2>Pick your brand!</h2>
			<ul>
				{Object.entries(brands).map(([brandName, brand], i) => {
					return (
						<li key={i}>
							<button
								onClick={() => {
									setBrand(brandName);
									Router.push('/[brand]', `/${brandName}`);
								}}
							>
								{brandName}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default BrandPicker;
