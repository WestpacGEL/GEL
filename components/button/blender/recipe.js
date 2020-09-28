import { GEL } from '@westpac/core';
import React from 'react';

import { HouseIcon, ArrowRightIcon } from '@westpac/icon';
import { Button } from '@westpac/button';

import { blenderButton } from '../src/overrides/button';
import { blenderIcon } from '../src/overrides/icon';

const looks = ['primary', 'faint', 'link'];
const sizes = ['small', 'large', 'xlarge'];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/button'] = {
		Button: {
			styles: blenderButton.styles,
		},
		Icon: {
			component: blenderIcon.component,
		},
	};
	return (
		<GEL brand={overridesWithTokens} noPrefix>
			<Button>Text</Button>
			{looks.map((look) => (
				<Button key={look} look={look}>
					Text
				</Button>
			))}
			<Button soft>Text</Button>
			{looks.map((look) => (
				<Button key={`${look}-soft`} look={look} soft>
					Text
				</Button>
			))}
			{sizes.map((size) => (
				<Button key={size} size={size}>
					Text
				</Button>
			))}
			<Button block>Text</Button>
			<Button iconBefore={HouseIcon}>Text</Button>
			<Button iconAfter={HouseIcon}>Text</Button>
			<Button justify>Text</Button>
			<Button disabled>Text</Button>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/button'] = {
		Button: {
			attributes: blenderButton.attributes,
		},
		Icon: {
			component: blenderIcon.component,
		},
	};
	return [
		{
			heading: `A default button`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Button>Your default button text</Button>
				</GEL>
			),
		},
		...looks.map((look) => ({
			heading: `A ${look} button`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Button look={look}>Your {look} button text</Button>
				</GEL>
			),
		})),
		{
			heading: `A default soft`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Button soft>Your default soft button text</Button>
				</GEL>
			),
		},
		{
			heading: `A disabled button`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Button disabled>Your disabled text</Button>
				</GEL>
			),
		},
		...['primary', 'hero', 'faint'].map((look) => ({
			heading: `A ${look} soft button`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Button look={look} soft>
						Your {look} soft button text
					</Button>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint', 'link'].map((look) => ({
			heading: `A ${look} small button`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Button look={look} size="small">
						Your {look} small button text
					</Button>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint', 'link'].map((look) => ({
			heading: `A ${look} large button`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Button look={look} size="large">
						Your {look} large button text
					</Button>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint', 'link'].map((look) => ({
			heading: `A ${look} xlarge button`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Button look={look} size="xlarge">
						Your {look} xlarge button text
					</Button>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint', 'link'].map((look) => ({
			heading: `A ${look} block button`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Button look={look} block>
						Your {look} block button text
					</Button>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint', 'link'].map((look) => ({
			heading: `A ${look} button with icon before`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Button look={look} iconBefore={HouseIcon}>
						Your {look} button text
					</Button>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint', 'link'].map((look) => ({
			heading: `A ${look} button with icon after`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Button look={look} iconAfter={HouseIcon}>
						Your {look} button text
					</Button>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint', 'link'].map((look) => ({
			heading: `A ${look} block justified button with icon after`,
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<Button look={look} block justify iconAfter={ArrowRightIcon}>
						Your {look} block justified button text
					</Button>
				</GEL>
			),
		})),
	];
}
