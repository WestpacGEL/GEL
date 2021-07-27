import { GEL, titleCase } from '@westpac/core';
import React from 'react';

import { Selector, Option } from '@westpac/selector';
import { AccessibilityIcon, AtmIcon, CarIcon } from '@westpac/icon';
import { ChatPictogram, TruckPictogram, ClockPictogram } from '@westpac/pictogram';
import { blenderPictogram } from '../src/overrides/pictogram';
import { blenderIcon } from '../src/overrides/icon';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/selector'] = {
		/* OptionBtn: {
			styles: blenderButton.styles,
		}, */
		Pictogram: {
			component: blenderPictogram.component,
		},
		Icon: {
			component: blenderIcon.component,
		},
		/* Text: {
			styles: blenderText.styles,
		}, */
		/* Label: {
			component: blenderLabel.component,
			styles: blenderLabel.styles,
		}, */
		/* LabelPrimary: {
			component: blenderLabelPrimary.component,
			styles: blenderLabelPrimary.styles,
		}, */
		/* LabelSecondary: {
			component: blenderLabelSecondary.component,
			styles: blenderLabelSecondary.styles,
		}, */
		/* Hint: {
			component: blenderHint.component,
			styles: blenderHint.styles,
		}, */
		/* Indicator: {
			component: blenderIndicator.component,
			styles: blenderIndicator.styles,
		}, */
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
				<Option value="1" hint="text">
					Text
				</Option>
				<Option value="2" icon={AccessibilityIcon}>
					Text
				</Option>
				<Option value="3" pictogram={ChatPictogram}>
					Text
				</Option>
			</Selector>

			{/* Checkbox */}
			<Selector type="checkbox" name="text">
				<Option value="1">Text</Option>
				<Option value="2">Text</Option>
				<Option value="3">Text</Option>
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
			component: blenderIcon.component,
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
						<Option value="3">Your option 3</Option>
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
						<Option value="3">Your option 3</Option>
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
		/* {
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
		}, */

		// Link
		/* {
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
		}, */
	];
}
