import { GEL } from '@westpac/core';
import React from 'react';

import { HouseIcon, ArrowRightIcon } from '@westpac/icon';
import { Button as OGButton } from '@westpac/button';

import { blenderButton } from '../src/overrides/button';

const Button = (props) => (
	<OGButton
		overrides={{
			Button: {
				attributes: blenderButton.attributes,
			},
		}}
		{...props}
	/>
);

const looks = ['primary', 'hero', 'faint', 'link'];
const sizes = ['small', 'medium', 'large', 'xlarge'];

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			{/* base no props */}
			<Button look={null}>Text</Button>
			{looks.map((look) => (
				<Button key={look} look={look} plainCSSProp="look">
					Text
				</Button>
			))}
			{looks.map((look) => (
				<Button key={`${look}-soft`} look={look} soft size={null} plainCSSProp="soft">
					Text
				</Button>
			))}
			{sizes.map((size) => (
				<Button key={size} look={null} size={size} soft plainCSSProp="size">
					Text
				</Button>
			))}
			<Button look={null} block plainCSSProp="block">
				Text
			</Button>
			<Button look={null} iconBefore={HouseIcon}>
				Text
			</Button>
			<Button look={null} iconAfter={HouseIcon}>
				Text
			</Button>
			<Button look={null} justify plainCSSProp="justify">
				Text
			</Button>
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'A plain button with no props (DELETE ME LATER)',
			component: () => (
				<GEL brand={brand}>
					<Button look={null}>Your plain button text</Button>
				</GEL>
			),
		},
		...looks.map((look) => ({
			heading: `A ${look} button`,
			component: () => (
				<GEL brand={brand}>
					<Button look={look}>Your {look} button text</Button>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint'].map((look) => ({
			heading: `A ${look} soft button`,
			component: () => (
				<GEL brand={brand}>
					<Button look={look} soft>
						Your {look} soft button text
					</Button>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint', 'link'].map((look) => ({
			heading: `A ${look} small button`,
			component: () => (
				<GEL brand={brand}>
					<Button look={look} size="small">
						Your {look} small button text
					</Button>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint', 'link'].map((look) => ({
			heading: `A ${look} small button`,
			component: () => (
				<GEL brand={brand}>
					<Button look={look} size="medium">
						Your {look} small button text
					</Button>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint', 'link'].map((look) => ({
			heading: `A ${look} large button`,
			component: () => (
				<GEL brand={brand}>
					<Button look={look} size="large">
						Your {look} large button text
					</Button>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint', 'link'].map((look) => ({
			heading: `A ${look} xlarge button`,
			component: () => (
				<GEL brand={brand}>
					<Button look={look} size="xlarge">
						Your {look} xlarge button text
					</Button>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint', 'link'].map((look) => ({
			heading: `A ${look} block button`,
			component: () => (
				<GEL brand={brand}>
					<Button look={look} block>
						Your {look} block button text
					</Button>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint', 'link'].map((look) => ({
			heading: `A ${look} button with icon before`,
			component: () => (
				<GEL brand={brand}>
					<Button look={look} iconBefore={HouseIcon}>
						Your {look} button text
					</Button>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint', 'link'].map((look) => ({
			heading: `A ${look} button with icon after`,
			component: () => (
				<GEL brand={brand}>
					<Button look={look} iconAfter={HouseIcon}>
						Your {look} button text
					</Button>
				</GEL>
			),
		})),
		...['primary', 'hero', 'faint', 'link'].map((look) => ({
			heading: `A ${look} block justified button with icon after`,
			component: () => (
				<GEL brand={brand}>
					<Button look={look} block justify iconAfter={ArrowRightIcon}>
						Your {look} block justified button text
					</Button>
				</GEL>
			),
		})),
	];
}
