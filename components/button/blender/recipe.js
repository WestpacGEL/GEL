import { GEL } from '@westpac/core';
import React from 'react';

import { HouseIcon, ArrowRightIcon } from '@westpac/icon';
import { Button as OGButton } from '@westpac/button';

import { blenderButton } from '../src/overrides/button';

const looks = ['primary', 'faint', 'link'];
const sizes = ['small', 'large', 'xlarge'];

export function AllStyles({ brand }) {
	const Button = (props) => (
		<OGButton
			overrides={{
				Button: {
					attributes: blenderButton.attributes,
					styles: blenderButton.styles,
				},
			}}
			{...props}
		/>
	);

	return (
		<GEL brand={brand}>
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
		</GEL>
	);
}

export function Docs({ brand }) {
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
	return [
		{
			heading: `A default button`,
			component: () => (
				<GEL brand={brand}>
					<Button>Your default button text</Button>
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
		{
			heading: `A default soft`,
			component: () => (
				<GEL brand={brand}>
					<Button soft>Your default soft button text</Button>
				</GEL>
			),
		},
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
