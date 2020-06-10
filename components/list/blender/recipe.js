import { GEL } from '@westpac/core';
import React from 'react';

import { List, Item } from '@westpac/list';
import { AndroidIcon, GithubIcon, AppleIcon } from '@westpac/icon';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<List look="primary">
				<Item>Text</Item>
			</List>
			<List look="hero">
				<Item>Text</Item>
			</List>
			<List look="neutral">
				<Item>Text</Item>
			</List>
			<List look="primary" spacing="large">
				<Item>Text</Item>
			</List>
			<List look="hero" spacing="large">
				<Item>Text</Item>
			</List>
			<List look="neutral" spacing="large">
				<Item>Text</Item>
			</List>

			<List type="bullet">
				<Item>Text</Item>
			</List>
			<List type="link">
				<Item>Text</Item>
			</List>
			<List type="tick">
				<Item>Text</Item>
			</List>
			<List type="ordered">
				<Item>Text</Item>
			</List>
			<List type="unstyled">
				<Item>Text</Item>
			</List>
			<List type="icon" icon={AndroidIcon}>
				<Item>Text</Item>
			</List>
			<List type="bullet" spacing="large">
				<Item>Text</Item>
			</List>
			<List type="link" spacing="large">
				<Item>Text</Item>
			</List>
			<List type="tick" spacing="large">
				<Item>Text</Item>
			</List>
			<List type="ordered" spacing="large">
				<Item>Text</Item>
			</List>
			<List type="unstyled" spacing="large">
				<Item>Text</Item>
			</List>
			<List type="icon" icon={AndroidIcon} spacing="large">
				<Item>Text</Item>
			</List>
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		...['medium', 'large'].map((spacing) => ({
			heading: `A primary bullet list - ${spacing} spacing`,
			component: () => (
				<GEL brand={brand}>
					<List type="bullet" look="primary" spacing={spacing}>
						<Item>Styled primary bullet list</Item>
						<Item>Styled primary bullet list</Item>
						<Item>Styled primary bullet list</Item>
					</List>
				</GEL>
			),
		})),
		...['medium', 'large'].map((spacing) => ({
			heading: `A hero bullet list - ${spacing} spacing`,
			component: () => (
				<GEL brand={brand}>
					<List type="bullet" look="hero" spacing={spacing}>
						<Item>Styled hero bullet list</Item>
						<Item>Styled hero bullet list</Item>
						<Item>Styled hero bullet list</Item>
					</List>
				</GEL>
			),
		})),
		...['medium', 'large'].map((spacing) => ({
			heading: `A neutral bullet list - ${spacing} spacing`,
			component: () => (
				<GEL brand={brand}>
					<List type="bullet" look="neutral" spacing={spacing}>
						<Item>Styled neutral bullet list</Item>
						<Item>Styled neutral bullet list</Item>
						<Item>Styled neutral bullet list</Item>
					</List>
				</GEL>
			),
		})),
		...['medium', 'large'].map((spacing) => ({
			heading: `A link list - ${spacing} spacing`,
			component: () => (
				<GEL brand={brand}>
					<List type="link" spacing={spacing}>
						<Item>
							<a href="#">Styled link list</a>
						</Item>
						<Item>
							<a href="#">Styled link list</a>
						</Item>
						<Item>
							<a href="#">Styled link list</a>
						</Item>
					</List>
				</GEL>
			),
		})),
		...['medium', 'large'].map((spacing) => ({
			heading: `A tick list - ${spacing} spacing`,
			component: () => (
				<GEL brand={brand}>
					<List type="tick" spacing={spacing}>
						<Item>Styled tick list</Item>
						<Item>Styled tick list</Item>
						<Item>Styled tick list</Item>
					</List>
				</GEL>
			),
		})),
		...['medium', 'large'].map((spacing) => ({
			heading: `An ordered list - ${spacing} spacing`,
			component: () => (
				<GEL brand={brand}>
					<List type="ordered" spacing={spacing}>
						<Item>Styled ordered list</Item>
						<Item>Styled ordered list</Item>
						<Item>Styled ordered list</Item>
					</List>
				</GEL>
			),
		})),
		...['medium', 'large'].map((spacing) => ({
			heading: `An unstyled list - ${spacing} spacing`,
			component: () => (
				<GEL brand={brand}>
					<List type="unstyled" spacing={spacing}>
						<Item>Unstyled list</Item>
						<Item>Unstyled list</Item>
						<Item>Unstyled list</Item>
					</List>
				</GEL>
			),
		})),
		...['medium', 'large'].map((spacing) => ({
			heading: `An icon list - ${spacing} spacing`,
			component: () => (
				<GEL brand={brand}>
					<List type="icon" icon={AndroidIcon} spacing={spacing}>
						<Item>Styled icon list</Item>
						<Item>Styled icon list</Item>
						<Item>Styled icon list</Item>
					</List>
				</GEL>
			),
		})),
	];
}
