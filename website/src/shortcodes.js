import { brandsMap } from './components/brand-switcher/brand-switcher';
// Shortcodes can contain characters a-z and numbers 0-9 but no other characters
export const getShortCodes = brand => ({
	brandName: brandsMap[brand].label,
});
