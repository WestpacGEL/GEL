import { GEL, titleCase } from '@westpac/core';
import React from 'react';
import { Popover } from '@westpac/popover';
import { blenderIcon } from '@westpac/button';

import { blenderPanel } from '../src/overrides/panel';
import { blenderHeading } from '../src/overrides/heading';
import { blenderTrigger } from '../src/overrides/trigger';
import { blenderBody } from '../src/overrides/body';
import { blenderCloseBtn } from '../src/overrides/closeBtn';

const placements = ['top', 'bottom'];

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/popover'] = {
		Panel: {
			component: blenderPanel.component,
			styles: blenderPanel.styles,
		},
		Heading: {
			component: blenderHeading.component,
		},
		Body: {
			component: blenderBody.component,
		},
		CloseBtn: {
			component: blenderCloseBtn.component,
		},
	};
	overridesWithTokens['@westpac/button'] = {
		Icon: {
			component: blenderIcon.component,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Popover heading="Text" content="Text" open={false} placement="none">
				Text
			</Popover>
			<Popover heading="Text" content="Text" open={false} placement="top">
				Text
			</Popover>
			<Popover heading="Text" content="Text" open={false} placement="bottom">
				Text
			</Popover>
			<Popover heading="Text" content="Text" open={true} placement="none">
				Text
			</Popover>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/popover'] = {
		Panel: {
			component: blenderPanel.component,
			attributes: blenderPanel.attributes,
		},
		Heading: {
			component: blenderHeading.component,
		},
		Trigger: {
			attributes: blenderTrigger.attributes,
		},
		Body: {
			component: blenderBody.component,
		},
		CloseBtn: {
			component: blenderCloseBtn.component,
			attributes: blenderCloseBtn.attributes,
		},
	};
	overridesWithTokens['@westpac/button'] = {
		Icon: {
			component: blenderIcon.component,
		},
	};

	return [
		// Placement
		...placements.map((placement, i) => ({
			...(i === 0 && { heading: 'Popover placement' }),
			subheading: titleCase(placement),
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Popover
						heading="Your heading"
						content="Your popover content"
						placement={placement}
						instanceId={`GEL-popover-${placement}`}
					>
						Your button text
					</Popover>
				</GEL>
			),
		})),

		// No heading
		{
			heading: 'Popover without heading',
			component: () => (
				<GEL brand={overridesWithTokens}>
					<Popover
						content="Your popover content"
						placement="top"
						instanceId="GEL-popover-noheading"
					>
						Your button text
					</Popover>
				</GEL>
			),
		},
	];
}
