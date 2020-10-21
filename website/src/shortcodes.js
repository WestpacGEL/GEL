import { brandsMap } from './components/brand-switcher/brand-switcher';
// Shortcodes can contain characters a-z and numbers 0-9 but no other characters
export const getShortCodes = (brand) => ({
	brandName: brandsMap[brand].label,
	perceivable: `This is generic <em>perceivable</em> content.`,
	operable: `This is generic <em>operable</em> content.`,
	understandable: `This is generic <em>understandable</em> content.`,
	robust: `This is generic <em>robust</em> content.`,
});
