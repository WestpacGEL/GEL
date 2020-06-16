import { GEL } from '@westpac/core';
import React from 'react';

import { Modal, Body } from '@westpac/modal';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<Modal heading="Modal heading" open={true} onClose={() => {}}>
				<Body>text</Body>
			</Modal>
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'A default modal',
			component: () => (
				<GEL brand={brand}>
					<Modal heading="Modal heading" open={true} onClose={() => {}}>
						<Body>text</Body>
					</Modal>
				</GEL>
			),
		},
	];
}
