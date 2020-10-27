import React, { Fragment } from 'react';
import { brandsMap } from './components/brand-switcher/brand-switcher';

const VisionFilterIntro = () => (
	<Fragment>
		All our components have been are designed and tested to ensure their colour contrast ratios
		comply with the WCAG 2.1 AA specification. Select a filter from the list below to see how this
		component would appear to someone with a:{' '}
		<a href="design-system/accessibility/colour-vision-impairments">colour vision impairment</a>.
	</Fragment>
);

const A11yIntro = () => (
	<Fragment>
		All components comply with WCAG 2.1 AA guidelines and Success Criteria and fall under the:{' '}
		<a href="design-system/accessibility/inclusive-design">four principles of accessibility</a> –
		Perceivable, Operable, Understandable and Robust. Below are some specific ways in which this
		component follows these principles:
	</Fragment>
);

// Shortcodes can contain characters a-z and numbers 0-9 but no other characters
export const getShortCodes = (brand) => ({
	brandName: brandsMap[brand].label,
	visionFilterIntro: VisionFilterIntro,
	a11yIntro: A11yIntro,
	a11yPerceivable: `This is generic perceivable content.`,
	a11yOperable: `This is generic operable content.`,
	a11yUnderstandable: `This is generic understandable content.`,
	a11yRobust: `This is generic robust content.`,
});
