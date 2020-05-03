import { GEL } from '@westpac/core';
import React from 'react';

import { Button } from '@westpac/button';
import { HouseIcon } from '@westpac/icon';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<Button look="primary">Text</Button>
			<Button look="hero">Text</Button>
			<Button look="faint">Text</Button>
			<Button look="link">Text</Button>
			<Button look="primary" soft>Text</Button>
			<Button look="hero" soft>Text</Button>
			<Button look="faint" soft>Text</Button>
			<Button look="link" soft>Text</Button>
			<Button look="primary" disabled>Text</Button>
			<Button look="hero" disabled>Text</Button>
			<Button look="faint" disabled>Text</Button>
			<Button look="link" disabled>Text</Button>

			<Button look="primary" size="small">Text</Button>
			<Button look="hero" size="small">Text</Button>
			<Button look="faint" size="small">Text</Button>
			<Button look="link" size="small">Text</Button>
			<Button look="primary" size="small" soft>Text</Button>
			<Button look="hero" size="small" soft>Text</Button>
			<Button look="faint" size="small" soft>Text</Button>
			<Button look="link" size="small" soft>Text</Button>

			<Button look="primary" size="large">Text</Button>
			<Button look="hero" size="large">Text</Button>
			<Button look="faint" size="large">Text</Button>
			<Button look="link" size="large">Text</Button>
			<Button look="primary" size="large" soft>Text</Button>
			<Button look="hero" size="large" soft>Text</Button>
			<Button look="faint" size="large" soft>Text</Button>
			<Button look="link" size="large" soft>Text</Button>

			<Button look="primary" size="xlarge">Text</Button>
			<Button look="hero" size="xlarge">Text</Button>
			<Button look="faint" size="xlarge">Text</Button>
			<Button look="link" size="xlarge">Text</Button>
			<Button look="primary" size="xlarge" soft>Text</Button>
			<Button look="hero" size="xlarge" soft>Text</Button>
			<Button look="faint" size="xlarge" soft>Text</Button>
			<Button look="link" size="xlarge" soft>Text</Button>

			<Button look="primary" block>Text</Button>
			<Button look="hero" block>Text</Button>
			<Button look="faint" block>Text</Button>
			<Button look="link" block>Text</Button>
			<Button look="primary" block soft>Text</Button>
			<Button look="hero" block soft>Text</Button>
			<Button look="faint" block soft>Text</Button>
			<Button look="link" block soft>Text</Button>

			<Button look="primary" iconBefore={HouseIcon}>Text</Button>
			<Button look="hero" iconBefore={HouseIcon}>Text</Button>
			<Button look="faint" iconBefore={HouseIcon}>Text</Button>
			<Button look="link" iconBefore={HouseIcon}>Text</Button>
			<Button look="primary" iconBefore={HouseIcon} block>Text</Button>
			<Button look="hero" iconBefore={HouseIcon} block>Text</Button>
			<Button look="faint" iconBefore={HouseIcon} block>Text</Button>
			<Button look="link" iconBefore={HouseIcon} block>Text</Button>
			<Button look="primary" iconBefore={HouseIcon} block justify>Text</Button>
			<Button look="hero" iconBefore={HouseIcon} block justify>Text</Button>
			<Button look="faint" iconBefore={HouseIcon} block justify>Text</Button>
			<Button look="link" iconBefore={HouseIcon} block justify>Text</Button>

			<Button look="primary" iconAfter={HouseIcon}>Text</Button>
			<Button look="hero" iconAfter={HouseIcon}>Text</Button>
			<Button look="faint" iconAfter={HouseIcon}>Text</Button>
			<Button look="link" iconAfter={HouseIcon}>Text</Button>
			<Button look="primary" iconAfter={HouseIcon} block>Text</Button>
			<Button look="hero" iconAfter={HouseIcon} block>Text</Button>
			<Button look="faint" iconAfter={HouseIcon} block>Text</Button>
			<Button look="link" iconAfter={HouseIcon} block>Text</Button>
			<Button look="primary" iconAfter={HouseIcon} block justify>Text</Button>
			<Button look="hero" iconAfter={HouseIcon} block justify>Text</Button>
			<Button look="faint" iconAfter={HouseIcon} block justify>Text</Button>
			<Button look="link" iconAfter={HouseIcon} block justify>Text</Button>
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'A primary button',
			component: () => (
				<GEL brand={brand}>
					<Button look="primary">Your button text</Button>
				</GEL>
			),
		},
	];
}
