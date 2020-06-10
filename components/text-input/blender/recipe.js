import { GEL } from '@westpac/core';
import React from 'react';

import { TextInput, Select, Textarea } from '@westpac/text-input';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<TextInput />
			<TextInput size="small" placeholder="small" />
			<TextInput size="medium" placeholder="medium" />
			<TextInput size="large" placeholder="large" />
			<TextInput size="xlarge" placeholder="xlarge" />
			<TextInput invalid />
			<TextInput inline />
			<TextInput width={2} placeholder={2} />
			<TextInput width={3} placeholder={3} />
			<TextInput width={4} placeholder={4} />
			<TextInput width={5} placeholder={5} />
			<TextInput width={10} placeholder={10} />
			<TextInput width={20} placeholder={20} />
			<TextInput width={30} placeholder={30} />
			<Select>
				<option>Select</option>
			</Select>
			<Select size="small">
				<option>Select</option>
			</Select>
			<Select size="large">
				<option>Large</option>
			</Select>
			<Select size="xlarge">
				<option>XLarge</option>
			</Select>
			<Select invalid>
				<option>Invalid</option>
			</Select>
			<Select inline>
				<option>Select</option>
			</Select>
			<Select width={2}>
				<option>Size 2</option>
			</Select>
			<Select width={3}>
				<option>Size 3</option>
			</Select>
			<Select width={4}>
				<option>Size 4</option>
			</Select>
			<Select width={5}>
				<option>Size 5</option>
			</Select>
			<Select width={10}>
				<option>Size 10</option>
			</Select>
			<Select width={20}>
				<option>Size 20</option>
			</Select>
			<Select width={30}>
				<option>Size 30</option>
			</Select>
			<Textarea />
			<Textarea size="small" />
			<Textarea size="medium" />
			<Textarea size="large" />
			<Textarea size="xlarge" />
			<Textarea invalid />
			<Textarea inline />
			<Textarea width={2} />
			<Textarea width={3} />
			<Textarea width={4} />
			<Textarea width={5} />
			<Textarea width={10} />
			<Textarea width={20} />
			<Textarea width={30} />
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
		...[2, 3, 4, 5, 10, 20, 30].map((width) => ({
			heading: `A text input with width of ${width}`,
			component: () => (
				<GEL brand={brand}>
					<TextInput width={width} placeholder={width} />
				</GEL>
			),
		})),
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
		...[2, 3, 4, 5, 10, 20, 30].map((width) => ({
			heading: `A textarea with width of ${width}`,
			component: () => (
				<GEL brand={brand}>
					<Textarea width={width} placeholder={'W'.repeat(width)} />
				</GEL>
			),
		})),
	];
}
