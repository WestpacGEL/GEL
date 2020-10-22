import React from 'react';
import { brandsMap } from './components/brand-switcher/brand-switcher';
// Shortcodes can contain characters a-z and numbers 0-9 but no other characters
export const getShortCodes = (brand) => ({
	brandName: brandsMap[brand].label,
	visionFilterIntro: `All our components have been are designed and tested to ensure their colour contrast ratios comply with the WCAG 2.1 AA specification. Select a filter from the list below to see how this component would appear to someone with a 
		<a href="design-system/accessibility/colour-vision-impairments">colour vision impairment</a>.`,
	allyIntro: `All components comply with WCAG 2.1 AA guidelines and Success Criteria and fall under the 
		<a href="design-system/accessibility/inclusive-design">four principles of accessibility</a> – Perceivable, Operable, Understandable and Robust. Below are some specific ways in which this component follows these principles:`,
	a11yPerceivable: `This is generic <em>perceivable</em> content.`,
	a11yOperable: `This is generic <em>operable</em> content.`,
	a11yUnderstandable: `This is generic <em>understandable</em> content.`,
	a11yRobust: `This is generic <em>robust</em>content.`,
});
