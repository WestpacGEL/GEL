import { GEL, titleCase } from '@westpac/core';
import React, { forwardRef } from 'react';

import { Collapsible } from '@westpac/collapsible';
import { Button, blenderButton, blenderIcon } from '@westpac/button';
import { ExpandMoreIcon } from '@westpac/icon';

import { blenderCollapsible } from '../src/overrides/collapsible';
import { blenderTrigger } from '../src/overrides/trigger';
import { blenderContent } from '../src/overrides/content';

const sizes = ['small', 'medium', 'large', 'xlarge'];

// Doing this for docs to always have ExpandMoreIcon as default, collapsible-open class will handle the rotate
const TriggerButton = forwardRef(({ state: { size }, ...rest }, ref) => {
	return <Button ref={ref} look="link" size={size} iconAfter={ExpandMoreIcon} {...rest} />;
});

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/collapsible'] = {
		Collapsible: {
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

	return (
		<GEL brand={overridesWithTokens}>
			{/* Default */}
			<Collapsible text="Text">Text</Collapsible>
			{/* Open */}
			<Collapsible text="Text" open>
				Text
			</Collapsible>
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
			component: TriggerButton,
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
			attributes: (attributes) => ({
				...attributes,
				className: '__convert__collapsible-trigger-icon',
			}),
		},
	};

	return [
		// Default
		{
			heading: 'Default',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Collapsible text="Your collapsible button text" instanceId="collapsible-default">
						Your collapsible content
					</Collapsible>
				</GEL>
			),
		},

		// Open
		{
			heading: 'Open',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Collapsible
						text="Your open collapsible button text"
						open
						instanceId="collapsible-default-open"
					>
						Your open collapsible content
					</Collapsible>
				</GEL>
			),
		},

		// Sizes
		...sizes.map((size, i) => ({
			...(i === 0 && { heading: 'Collapsible toggle sizes' }),
			subheading: titleCase(size),
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Collapsible
						text={`Your ${size} collapsible button text`}
						size={size}
						instanceId={`collapsible-${size}`}
					>
						Your {size} collapsible content
					</Collapsible>
				</GEL>
			),
		})),
	];
}
