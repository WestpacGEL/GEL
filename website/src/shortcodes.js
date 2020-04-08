import { brandsMap } from './components/brand-switcher/brand-switcher';

export const getShortCodes = brand => ({
	brandName: brandsMap[brand].label,
});
