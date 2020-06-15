import { GEL } from '@westpac/core';
import React, { Fragment } from 'react';

import { TextInput, Select, Textarea } from '@westpac/text-input';

const components = [TextInput, Select, Textarea];
const sizes = ['small', 'medium', 'large', 'xlarge'];
const widths = [2, 3, 4, 5, 10, 20, 30];

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			{components.map((Component, i) => (
				<Fragment key={i}>
					{sizes.map((size) => (
						<Fragment key={size}>
							<Component size={size} />
							<Component size={size} inline />
							<Component size={size} invalid />
							<Component size={size} inline invalid />
							{widths.map((width) => (
								<Fragment key={`${size}-${width}`}>
									<Component size={size} width={width} />
									<Component size={size} width={width} inline />
									<Component size={size} width={width} invalid />
									<Component size={size} width={width} inline invalid />
								</Fragment>
							))}
						</Fragment>
					))}
				</Fragment>
			))}
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'A default text input',
			component: () => (
				<GEL brand={brand}>
					<TextInput />
				</GEL>
			),
		},
		...['small', 'medium', 'large', 'xlarge'].map((size) => ({
			heading: `A ${size} text input`,
			component: () => (
				<GEL brand={brand}>
					<TextInput size={size} placeholder={size} />
				</GEL>
			),
		})),
		{
			heading: 'An invalid text input',
			component: () => (
				<GEL brand={brand}>
					<TextInput invalid />
				</GEL>
			),
		},
		{
			heading: 'An inline text input',
			component: () => (
				<GEL brand={brand}>
					<TextInput inline />
				</GEL>
			),
		},
		{
			heading: 'An inline invalid text input',
			component: () => (
				<GEL brand={brand}>
					<TextInput inline invalid />
				</GEL>
			),
		},
		...[2, 3, 4, 5, 10, 20, 30].map((width) => ({
			heading: `A text input with width of ${width}`,
			component: () => (
				<GEL brand={brand}>
					<TextInput width={width} placeholder={width} />
				</GEL>
			),
		})),
		{
			heading: 'An inline invalid text input with width of 10',
			component: () => (
				<GEL brand={brand}>
					<TextInput inline invalid width={10} />
				</GEL>
			),
		},
		{
			heading: 'A default select',
			component: () => (
				<GEL brand={brand}>
					<Select name="select">
						<option>Select</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</GEL>
			),
		},
		...['small', 'medium', 'large', 'xlarge'].map((size) => ({
			heading: `A ${size} select`,
			component: () => (
				<GEL brand={brand}>
					<Select name={size} size={size}>
						<option>Select</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</GEL>
			),
		})),
		{
			heading: 'An invalid select',
			component: () => (
				<GEL brand={brand}>
					<Select invalid>
						<option>Invalid</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</GEL>
			),
		},
		{
			heading: 'An inline select',
			component: () => (
				<GEL brand={brand}>
					<Select inline>
						<option>Select</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</GEL>
			),
		},
		{
			heading: 'An inline invalid select',
			component: () => (
				<GEL brand={brand}>
					<Select inline invalid>
						<option>Select</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</GEL>
			),
		},
		...[2, 3, 4, 5, 10, 20, 30].map((width) => ({
			heading: `A select with width of ${width}`,
			component: () => (
				<GEL brand={brand}>
					<Select name={`width-${width}`} width={width}>
						<option>Select</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</GEL>
			),
		})),
		{
			heading: 'An inline invalid select with width of 10',
			component: () => (
				<GEL brand={brand}>
					<Select inline invalid width={10}>
						<option>Select</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</GEL>
			),
		},
		{
			heading: 'A default textarea',
			component: () => (
				<GEL brand={brand}>
					<Textarea />
				</GEL>
			),
		},
		...['small', 'medium', 'large', 'xlarge'].map((size) => ({
			heading: `A ${size} textarea`,
			component: () => (
				<GEL brand={brand}>
					<Textarea size={size} placeholder={size} />
				</GEL>
			),
		})),
		{
			heading: 'An invalid textarea',
			component: () => (
				<GEL brand={brand}>
					<Textarea placeholder="invalid" invalid />
				</GEL>
			),
		},
		{
			heading: 'An inline textarea',
			component: () => (
				<GEL brand={brand}>
					<Textarea inline />
				</GEL>
			),
		},
		{
			heading: 'An inline invalid textarea',
			component: () => (
				<GEL brand={brand}>
					<Textarea inline />
				</GEL>
			),
		},
		...[2, 3, 4, 5, 10, 20, 30].map((width) => ({
			heading: `A textarea with width of ${width}`,
			component: () => (
				<GEL brand={brand}>
					<Textarea width={width} placeholder={'W'.repeat(width)} />
				</GEL>
			),
		})),
		{
			heading: 'An inline invalid textarea with width of 10',
			component: () => (
				<GEL brand={brand}>
					<Textarea inline invalid width={10} />
				</GEL>
			),
		},
	];
}
