import React, { Fragment } from 'react';
import { brandsMap } from './components/brand-switcher/brand-switcher';

const VisionFilterIntro = () => (
	<Fragment>
		All components are designed and tested to ensure colour contrast ratios comply with the WCAG 2.1
		AA specification. Select a filter from the list below to see how this component would appear to
		someone with a:{' '}
		<a href="/design-system/accessibility/colour-vision-impairments">colour vision impairment</a>.
	</Fragment>
);

const A11yIntro = () => (
	<Fragment>
		All components comply with WCAG 2.1 AA guidelines and Success Criteria. These fall under the{' '}
		<a href="/design-system/accessibility/design-system-accessibility">
			four principles of accessibility
		</a>{' '}
		– Perceivable, Operable, Understandable and Robust. Below are some specific ways in which this
		component follows these principles:
	</Fragment>
);

// Shortcodes can contain characters a-z and numbers 0-9 but no other characters
export const getShortCodes = (brand) => ({
	brandName: brand.name,
	visionFilterIntro: VisionFilterIntro,
	a11yIntro: A11yIntro,
	a11yPerceivable: `The Design System components have been designed to adhere to colour contrast ratios for both text and non-text elements. They have been coded to include text alternatives when required, and allow component text and labels to be resized. They do not use colour alone to convey information.`,
	a11yOperable: `The Design System components have been coded to be navigable using a keyboard and other assistive technologies. WCAG compliance recommends being aware of the time it takes for people to complete tasks and to not automatically move focus. Animation should be controlled and simple so as not to cause seizures, and it’s important to provide the ability to perform the same task in multiple ways where possible. These rules have been followed where navigation and interaction is included in Design System components or patterns.`,
	a11yUnderstandable: `WCAG compliance requires consistent and predicable interactions, clear and simple language, concise labels, no jargon or abbreviations and clear error messaging. These rules have been followed where content and interactions are included in Design System components or patterns.`,
	a11yRobust: `All Design System components have been coded so they can be clearly announced, understood and navigated using all modern assistive technologies.`,
});
