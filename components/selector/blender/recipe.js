import { GEL } from '@westpac/core';
import React from 'react';

import { Selector, Option } from '@westpac/selector';
import { AccessibilityIcon, AtmIcon, CarIcon } from '@westpac/icon';
import { ChatPictogram, TruckPictogram, ClockPictogram } from '@westpac/pictogram';
import { blenderPictogram } from '../src/overrides/pictogram';
import { blenderIcon } from '../src/overrides/icon';
import { blenderIndicatorNext } from '../src/overrides/indicatorNext';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/selector'] = {
		Pictogram: {
			component: blenderPictogram.component,
		},
		Icon: {
			component: (props) => <span {...props} />,
		},
		IndicatorNext: {
			component: blenderIndicatorNext.component,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			{/* Default */}
			<Selector name="text">
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</Selector>

			{/* Radio */}
			<Selector type="radio" name="text">
				<Option value="1" hint="text" disabled>
					Text
				</Option>
				<Option value="2" secondaryLabel="text" icon={AccessibilityIcon} size="xsmall">
					Text
				</Option>
				<Option value="3" secondaryLabel="text" icon={AccessibilityIcon} size="small">
					Text
				</Option>
				<Option value="4" secondaryLabel="text" icon={AccessibilityIcon} size="medium">
					Text
				</Option>
				<Option value="5" secondaryLabel="text" icon={AccessibilityIcon} size="large">
					Text
				</Option>
				<Option value="6" secondaryLabel="text" icon={AccessibilityIcon} size="xlarge">
					Text
				</Option>
				<Option value="7" pictogram={ChatPictogram}>
					Text
				</Option>
			</Selector>

			{/* Checkbox */}
			<Selector type="checkbox" name="text">
				<Option value="1" disabled>
					Text
				</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</Selector>

			{/* Button */}
			<Selector type="button" name="text">
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
			</Selector>

			{/* Link */}
			<Selector type="link" name="text">
				<Option href="#">Text</Option>
				<Option href="#">Text</Option>
				<Option href="#">Text</Option>
			</Selector>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/selector'] = {
		Pictogram: {
			component: blenderPictogram.component,
		},
		Icon: {
			attributes: blenderIcon.attributes,
			styles: () => ({}),
		},
		IndicatorNext: {
			component: blenderIndicatorNext.component,
		},
	};

	return [
		// Radio
		{
			heading: 'Radio',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Selector type="radio" name="example-radio" instanceIdPrefix="GEL">
						<Option value="1">Your option 1</Option>
						<Option value="2" hint="Your option hint text">
							Your option 2
						</Option>
						<Option value="3" secondaryLabel="Your secondary label">
							Your option 3
						</Option>
					</Selector>
				</GEL>
			),
		},
		{
			heading: 'Radio disabled',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Selector type="radio" name="example-radio-disabled" instanceIdPrefix="GEL">
						<Option value="1" disabled>
							Your option 1
						</Option>
						<Option value="2" hint="Your option hint text" disabled>
							Your option 2
						</Option>
						<Option value="3" secondaryLabel="Your secondary label" disabled>
							Your option 3
						</Option>
					</Selector>
				</GEL>
			),
		},
		{
			heading: 'Radio with icons',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Selector type="radio" name="example-radio-icons" instanceIdPrefix="GEL">
						<Option value="1" icon={AccessibilityIcon}>
							Your option 1
						</Option>
						<Option value="2" hint="Your option hint text" icon={AtmIcon}>
							Your option 2
						</Option>
						<Option value="3" icon={CarIcon}>
							Your option 3
						</Option>
						<Option value="4" icon={AccessibilityIcon}>
							Your option 4
						</Option>
						<Option value="5" icon={AtmIcon}>
							Your option 5
						</Option>
					</Selector>
				</GEL>
			),
		},
		{
			heading: 'Radio with pictograms',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Selector type="radio" name="example-radio-pictograms" instanceIdPrefix="GEL">
						<Option value="1" pictogram={ChatPictogram}>
							Your option 1
						</Option>
						<Option value="2" hint="Your option hint text" pictogram={TruckPictogram}>
							Your option 2
						</Option>
						<Option value="3" pictogram={ClockPictogram}>
							Your option 3
						</Option>
					</Selector>
				</GEL>
			),
		},

		// Checkbox
		{
			heading: 'Checkbox',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Selector type="checkbox" name="example-checkbox" instanceIdPrefix="GEL">
						<Option value="1">Your option 1</Option>
						<Option value="2" hint="Your option hint text">
							Your option 2
						</Option>
						<Option value="3" secondaryLabel="Your secondary label">
							Your option 3
						</Option>
					</Selector>
				</GEL>
			),
		},
		{
			heading: 'Checkbox disabled',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Selector type="checkbox" name="example-checkbox-disabled" instanceIdPrefix="GEL">
						<Option value="1" disabled>
							Your option 1
						</Option>
						<Option value="2" hint="Your option hint text" disabled>
							Your option 2
						</Option>
						<Option value="3" secondaryLabel="Your secondary label" disabled>
							Your option 3
						</Option>
					</Selector>
				</GEL>
			),
		},
		{
			heading: 'Checkbox with icons',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Selector type="checkbox" name="example-checkbox-icons" instanceIdPrefix="GEL">
						<Option value="1" icon={AccessibilityIcon}>
							Your option 1
						</Option>
						<Option value="2" hint="Your option hint text" icon={AtmIcon}>
							Your option 2
						</Option>
						<Option value="3" icon={CarIcon}>
							Your option 3
						</Option>
					</Selector>
				</GEL>
			),
		},
		{
			heading: 'Checkbox with pictograms',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Selector type="checkbox" name="example-checkbox-pictograms" instanceIdPrefix="GEL">
						<Option value="1" pictogram={ChatPictogram}>
							Your option 1
						</Option>
						<Option value="2" hint="Your option hint text" pictogram={TruckPictogram}>
							Your option 2
						</Option>
						<Option value="3" pictogram={ClockPictogram}>
							Your option 3
						</Option>
					</Selector>
				</GEL>
			),
		},

		// Button
		{
			heading: 'Button',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Selector type="button" name="example-button" instanceIdPrefix="GEL">
						<Option value="1">Your option 1</Option>
						<Option value="2">Your option 2</Option>
						<Option value="3">Your option 3</Option>
					</Selector>
				</GEL>
			),
		},

		// Link
		{
			heading: 'Link',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Selector type="link" name="example-link" instanceIdPrefix="GEL">
						<Option href="#">Your link 1</Option>
						<Option href="#">Your link 2</Option>
						<Option href="#">Your link 3</Option>
					</Selector>
				</GEL>
			),
		},
	];
}
