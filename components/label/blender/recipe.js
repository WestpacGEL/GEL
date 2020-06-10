import { GEL } from '@westpac/core';
import React from 'react';

import { Label } from '@westpac/label';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<Label look="primary" value="Text" />
			<Label look="hero" value="Text" />
			<Label look="neutral" value="Text" />
			<Label look="faint" value="Text" />
			<Label look="success" value="Text" />
			<Label look="info" value="Text" />
			<Label look="warning" value="Text" />
			<Label look="danger" value="Text" />
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		...['primary', 'hero', 'neutral', 'faint', 'success', 'info', 'warning', 'danger'].map(
			(look) => ({
				heading: `A ${look} label`,
				component: () => (
					<GEL brand={brand}>
						<Label look={look} value={`Your ${look} label text`} />
					</GEL>
				),
			})
		),
	];
}
