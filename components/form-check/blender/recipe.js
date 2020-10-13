import { GEL } from '@westpac/core';
import React from 'react';

import { FormCheck, Option } from '@westpac/form-check';
import { blenderFormCheck } from '../src/overrides/formCheck';
import { blenderOption } from '../src/overrides/option';
import { blenderLabel } from '../src/overrides/label';
import { blenderHint } from '../src/overrides/hint';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/form-check'] = {
		FormCheck: {
			styles: blenderFormCheck.styles,
		},
		Option: {
			styles: blenderOption.styles,
		},
		Label: {
			component: blenderLabel.component,
			styles: blenderLabel.styles,
		},
		Hint: {
			styles: blenderHint.styles,
		},
	};

	return (
		<GEL brand={overridesWithTokens} noPrefix>
			<FormCheck name="text">
				<Option value="1" hint="Hint text">
					Text
				</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="radio" name="text">
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="checkbox" name="text" size="large">
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="radio" name="text" size="large">
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="checkbox" name="text" inline>
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/form-check'] = {
		FormCheck: {
			attributes: blenderFormCheck.attributes,
		},
		Label: {
			component: blenderLabel.component,
			attributes: blenderLabel.attributes,
		},
	};

	return [
		{
			heading: 'Default',
			subheading: 'Checkboxes',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="checkbox" name="name1" instanceIdPrefix="GEL">
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			subheading: 'Radios',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="radio" name="name2" instanceIdPrefix="GEL">
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			heading: 'Size',
			subheading: 'Large checkboxes',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="checkbox" name="name3" instanceIdPrefix="GEL" size="large">
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			subheading: 'Large radios',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="radio" name="name4" instanceIdPrefix="GEL" size="large">
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			heading: 'Hints',
			subheading: 'Default checkboxes with option hints',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="checkbox" name="name5" instanceIdPrefix="GEL">
						<Option value="1" hint="Your option 1 hint">
							Your option 1
						</Option>
						<Option value="2" hint="Your option 2 hint">
							Your option 2
						</Option>
						<Option value="3" hint="Your option 3 hint">
							Your option 3
						</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			subheading: 'Large checkboxes with option hints',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="checkbox" name="name5b" instanceIdPrefix="GEL" size="large">
						<Option value="1" hint="Your option 1 hint">
							Your option 1
						</Option>
						<Option value="2" hint="Your option 2 hint">
							Your option 2
						</Option>
						<Option value="3" hint="Your option 3 hint">
							Your option 3
						</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			heading: 'Inline',
			subheading: 'Inline checkboxes',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="checkbox" name="name6" instanceIdPrefix="GEL" inline>
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			subheading: 'Inline radios',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="radio" name="name7" instanceIdPrefix="GEL" inline>
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			subheading: 'Large inline checkboxes',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="checkbox" name="name8" instanceIdPrefix="GEL" size="large" inline>
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			subheading: 'Large inline radios',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="radio" name="name9" instanceIdPrefix="GEL" size="large" inline>
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			heading: 'Disabled',
			subheading: 'Disabled checkboxes',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="checkbox" name="name10" instanceIdPrefix="GEL" disabled defaultValue="2">
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			subheading: 'Disabled radios',
			component: () => (
				<GEL brand={overridesWithTokens} noPrefix>
					<FormCheck type="radio" name="name11" instanceIdPrefix="GEL" disabled defaultValue="2">
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</FormCheck>
				</GEL>
			),
		},
	];
}
