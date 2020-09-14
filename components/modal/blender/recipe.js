import { GEL } from '@westpac/core';
import React from 'react';

import { Body } from '@westpac/modal';
import { Modal } from '../src/';
import { Button } from '@westpac/button';

import { blenderCloseBtn } from '../src/overrides/closeBtn';
import { blenderHeading } from '../src/overrides/heading';
import { blenderModal } from '../src/overrides/modal';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/modal'] = {
		Modal: {
			styles: blenderModal.styles,
		},
		CloseBtn: {
			component: blenderCloseBtn.component,
		},
		Heading: {
			component: blenderHeading.component,
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Modal heading="Text" open>
				<Body>Text</Body>
			</Modal>
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: `A modal`,
			component: () => (
				<GEL brand={brand}>
					<Modal heading="Text">
						<Body>Text</Body>
					</Modal>
				</GEL>
			),
		},
	];
}
