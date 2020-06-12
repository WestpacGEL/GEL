import { GEL } from '@westpac/core';
import React from 'react';

import { FormCheck, Option } from '@westpac/form-check';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<FormCheck name="text">
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="checkbox" name="text" defaultValue="2">
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="radio" name="text" defaultValue="2">
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="checkbox" name="text" defaultValue="2" size="large">
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="radio" name="text" defaultValue="2" size="large">
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="checkbox" name="text" defaultValue="2" inline>
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="radio" name="text" defaultValue="2" inline>
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="checkbox" name="text" defaultValue="2" size="large" inline>
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="radio" name="text" defaultValue="2" size="large" inline>
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="checkbox" name="text" defaultValue="2" disabled>
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="radio" name="text" defaultValue="2" disabled>
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="checkbox" name="text" defaultValue="2">
				<Option value="1">Text</Option>
				<Option value="2" disabled>
					Text
				</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="radio" name="text" defaultValue="2">
				<Option value="1">Text</Option>
				<Option value="2" disabled>
					Text
				</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="checkbox" name="text" defaultValue="2" disabled inline>
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="radio" name="text" defaultValue="2" disabled inline>
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="checkbox" name="text" defaultValue="2" disabled inline size="large">
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
			<FormCheck type="radio" name="text" defaultValue="2" disabled inline size="large">
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</FormCheck>
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'Default checkboxes',
			component: () => (
				<GEL brand={brand}>
					<FormCheck type="checkbox" name="text" instanceIdPrefix="GEL">
						<Option value="1">Text</Option>
						<Option value="2">Text</Option>
						<Option value="3">Text</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			heading: 'Default radios',
			component: () => (
				<GEL brand={brand}>
					<FormCheck type="radio" name="text" instanceIdPrefix="GEL">
						<Option value="1">Text</Option>
						<Option value="2">Text</Option>
						<Option value="3">Text</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			heading: 'Large checkboxes',
			component: () => (
				<GEL brand={brand}>
					<FormCheck type="checkbox" name="text" instanceIdPrefix="GEL" size="large">
						<Option value="1">Text</Option>
						<Option value="2">Text</Option>
						<Option value="3">Text</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			heading: 'Large radios',
			component: () => (
				<GEL brand={brand}>
					<FormCheck type="radio" name="text" instanceIdPrefix="GEL" size="large">
						<Option value="1">Text</Option>
						<Option value="2">Text</Option>
						<Option value="3">Text</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			heading: 'Inline checkboxes',
			component: () => (
				<GEL brand={brand}>
					<FormCheck type="checkbox" name="text" instanceIdPrefix="GEL" inline>
						<Option value="1">Text</Option>
						<Option value="2">Text</Option>
						<Option value="3">Text</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			heading: 'Inline radios',
			component: () => (
				<GEL brand={brand}>
					<FormCheck type="radio" name="text" instanceIdPrefix="GEL" inline>
						<Option value="1">Text</Option>
						<Option value="2">Text</Option>
						<Option value="3">Text</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			heading: 'Inline large checkboxes',
			component: () => (
				<GEL brand={brand}>
					<FormCheck type="checkbox" name="text" instanceIdPrefix="GEL" size="large" inline>
						<Option value="1">Text</Option>
						<Option value="2">Text</Option>
						<Option value="3">Text</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			heading: 'Inline large radios',
			component: () => (
				<GEL brand={brand}>
					<FormCheck type="radio" name="text" instanceIdPrefix="GEL" size="large" inline>
						<Option value="1">Text</Option>
						<Option value="2">Text</Option>
						<Option value="3">Text</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			heading: 'Disabled checkboxes',
			component: () => (
				<GEL brand={brand}>
					<FormCheck type="checkbox" name="text" instanceIdPrefix="GEL" disabled defaultValue="2">
						<Option value="1">Text</Option>
						<Option value="2">Text</Option>
						<Option value="3">Text</Option>
					</FormCheck>
				</GEL>
			),
		},
		{
			heading: 'Disabled radios',
			component: () => (
				<GEL brand={brand}>
					<FormCheck type="radio" name="text" instanceIdPrefix="GEL" disabled defaultValue="2">
						<Option value="1">Text</Option>
						<Option value="2">Text</Option>
						<Option value="3">Text</Option>
					</FormCheck>
				</GEL>
			),
		},
	];
}
