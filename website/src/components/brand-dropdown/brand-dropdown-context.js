import { createContext, useContext } from 'react';

export const BrandDropdownContext = createContext();

export const useBrandDropdownContext = () => {
	const context = useContext(BrandDropdownContext);

	return context;
};
