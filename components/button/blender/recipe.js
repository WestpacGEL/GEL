import { GEL, titleCase } from '@westpac/core';
import React, { Fragment } from 'react';

import { HouseIcon, ArrowRightIcon } from '@westpac/icon';
import { Button } from '@westpac/button';

import { blenderButton } from '../src/overrides/button';
import { blenderIcon } from '../src/overrides/icon';

const looks = ['primary', 'hero', 'faint', 'link'];
const sizes = ['small', 'medium', 'large', 'xlarge'];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
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
			<Button>Text</Button>
			<Button soft>Text</Button>

			{/* Looks */}
			{looks.map((look) => (
				<Button key={look} look={look}>
					Text
				</Button>
			))}
			{looks.map((look) => (
				<Button key={`${look}-soft`} look={look} soft>
					Text
				</Button>
			))}

			{/* Size */}
			{sizes.map((size) => (
				<Button key={size} size={size}>
					Text
				</Button>
			))}

			{/* Block */}
			<Button block>Text</Button>

			{/* Icon */}
			<Button iconAfter={HouseIcon} />
			<Button iconBefore={HouseIcon}>Text</Button>
			<Button iconAfter={HouseIcon}>Text</Button>
			<Button justify>Text</Button>

			{/* Disabled */}
			<Button disabled>Text</Button>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
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
		// Look
		{
			heading: 'Button looks',
			subheading: 'Standard',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Button>Default</Button>{' '}
					{looks.map((look) => (
						<Fragment key={look}>
							<Button look={look}>{titleCase(look)}</Button>{' '}
						</Fragment>
					))}
				</GEL>
			),
		},
		{
			subheading: 'Soft',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Button soft>Default</Button>{' '}
					{looks
						.filter((item) => item !== 'link')
						.map((look) => (
							<Fragment key={look}>
								<Button look={look} soft>
									{titleCase(look)}
								</Button>{' '}
							</Fragment>
						))}
				</GEL>
			),
		},

		// Assistive text
		{
			heading: 'Assistive text',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Button iconAfter={HouseIcon} assistiveText="Go to home" />{' '}
					<Button assistiveText="Learn more about accessibility">Learn more</Button>
				</GEL>
			),
		},

		// Disabled
		{
			heading: 'Disabled buttons',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Button disabled>Default</Button>{' '}
					{looks.map((look) => (
						<Fragment key={look}>
							<Button look={look} disabled>
								{titleCase(look)}
							</Button>{' '}
						</Fragment>
					))}
				</GEL>
			),
		},

		// Size
		{
			heading: 'Button sizes',
			subheading: 'Small',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Button size="small">Default</Button>{' '}
					{looks.map((look) => (
						<Fragment key={look}>
							<Button look={look} size="small">
								{titleCase(look)}
							</Button>{' '}
						</Fragment>
					))}
				</GEL>
			),
		},
		...sizes
			.filter((size) => size !== 'small')
			.map((size) => ({
				subheading: titleCase(size),
				component: () => (
					<GEL brand={overridesWithTokens}>
						<Button size={size}>Default</Button>{' '}
						{looks.map((look) => (
							<Fragment key={look}>
								<Button look={look} size={size}>
									{titleCase(look)}
								</Button>{' '}
							</Fragment>
						))}
					</GEL>
				),
			})),

		// Block
		{
			heading: 'Block buttons',
			subheading: 'Standard',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Button block>Default</Button>
					{looks.map((look) => (
						<Button key={look} look={look} block>
							{titleCase(look)}
						</Button>
					))}
				</GEL>
			),
		},
		{
			subheading: 'Soft',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Button soft block>
						Default
					</Button>
					{looks.map((look) => (
						<Button key={look} look={look} soft block>
							{titleCase(look)}
						</Button>
					))}
				</GEL>
			),
		},

		// Icon
		{
			heading: 'Buttons with icons',
			subheading: 'Icon before',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Button iconBefore={HouseIcon}>Default</Button>{' '}
					{looks.map((look) => (
						<Fragment key={look}>
							<Button look={look} iconBefore={HouseIcon}>
								{titleCase(look)}
							</Button>{' '}
						</Fragment>
					))}
				</GEL>
			),
		},
		{
			subheading: 'Icon after',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Button iconAfter={HouseIcon}>Default</Button>{' '}
					{looks.map((look) => (
						<Fragment key={look}>
							<Button look={look} iconAfter={HouseIcon}>
								{titleCase(look)}
							</Button>{' '}
						</Fragment>
					))}
				</GEL>
			),
		},
		{
			subheading: 'Block buttons justified with icon after',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Button block justify iconAfter={ArrowRightIcon}>
						Default
					</Button>
					{looks.map((look) => (
						<Button key={look} look={look} block justify iconAfter={ArrowRightIcon}>
							{titleCase(look)}
						</Button>
					))}
				</GEL>
			),
		},
	];
}
