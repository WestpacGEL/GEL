import { GEL, titleCase } from '@westpac/core';
import React from 'react';

import { Collapsible } from '@westpac/collapsible';
import { blenderButton, blenderIcon } from '@westpac/button';

import { blenderCollapsible } from '../src/overrides/collapsible';
import { blenderTrigger } from '../src/overrides/trigger';
import { blenderContent } from '../src/overrides/content';

const sizes = ['small', 'medium', 'large', 'xlarge'];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/collapsible'] = {
		Collapsible: {
			component: blenderCollapsible.component,
			styles: blenderCollapsible.styles,
		},
		Trigger: {
			component: blenderTrigger.component,
		},
		Content: {
			component: blenderContent.component,
			styles: blenderContent.styles,
		},
	};
	overridesWithTokens['@westpac/button'] = {
		Button: {
			component: blenderButton.component,
			styles: blenderButton.styles,
		},
		Icon: {
			component: blenderIcon.component,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			{/* Default */}
			<Collapsible text="Text">Text</Collapsible>
			<Collapsible text="Text" open>
				Text
			</Collapsible>

			{/* Sizes */}
			{sizes.map((size) => (
				<Collapsible key={size} size={size} text="Text">
					Text
				</Collapsible>
			))}
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/collapsible'] = {
		Collapsible: {
			component: blenderCollapsible.component,
			attributes: blenderCollapsible.attributes,
		},
		Trigger: {
			component: blenderTrigger.component,
			attributes: blenderTrigger.attributes,
		},
		Content: {
			component: blenderContent.component,
			attributes: blenderContent.attributes,
		},
	};
	overridesWithTokens['@westpac/button'] = {
		Button: {
			component: blenderButton.component,
			attributes: blenderButton.attributes,
		},
		Icon: {
			component: blenderIcon.component,
		},
	};

	return [
		// Default
		{
			heading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Collapsible text="Your collapsible button text">Your collapsible content</Collapsible>
				</GEL>
			),
		},

		// Open
		{
			heading: 'Open',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Collapsible text="Your open collapsible button text" open>
						Your open collapsible content
					</Collapsible>
				</GEL>
			),
		},

		// Sizes
		...sizes.map((size, i) => ({
			...(i === 0 && { heading: 'Collapsible sizes' }),
			subheading: titleCase(size),
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Collapsible text={`Your ${size} collapsible button text`} size={size}>
						Your {size} collapsible content
					</Collapsible>
				</GEL>
			),
		})),
	];
}
