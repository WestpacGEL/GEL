import { GEL } from '@westpac/core';
import React from 'react';

import { List, Item } from '@westpac/list';
import { AndroidIcon } from '@westpac/icon';

const types = ['bullet', 'link', 'tick', 'ordered', 'unstyled', 'icon'];
const looks = ['primary', 'hero', 'neutral'];
const spacings = ['medium', 'large'];

const ExampleList = ({ depth = 1, ...rest }) => (
	<List {...rest}>
		<ExampleItem type={rest.type} />
		<ExampleItem type={rest.type}>
			{depth > 0 ? <ExampleList depth={depth - 1} {...rest} /> : null}
		</ExampleItem>
		<ExampleItem type={rest.type} />
	</List>
);

const ExampleItem = ({ type, text = 'List item text', children, ...rest }) => (
	<Item {...rest}>
		{type === 'link' ? <a href="#">{text}</a> : text}
		{children}
	</Item>
);

export function AllStyles({ brand }) {
	const allCombinations = [];

	types.forEach((type) => {
		looks.forEach((look) => {
			spacings.forEach((spacing) =>
				allCombinations.push(
					<ExampleList
						key={`${type}-${look}-${spacing}`}
						depth={3}
						type={type}
						look={type === 'bullet' ? look : null}
						icon={type === 'icon' ? AndroidIcon : null}
						spacing={spacing}
					/>
				)
			);
		});
	});

	return <GEL brand={brand}>{allCombinations}</GEL>;
}

export function Docs({ brand }) {
	return [
		...spacings.map((spacing) => ({
			heading: `A primary bullet list - ${spacing} spacing`,
			component: () => (
				<GEL brand={brand}>
					<ExampleList type="bullet" look="primary" spacing={spacing} />
				</GEL>
			),
		})),
		...spacings.map((spacing) => ({
			heading: `A hero bullet list - ${spacing} spacing`,
			component: () => (
				<GEL brand={brand}>
					<ExampleList type="bullet" look="hero" spacing={spacing} />
				</GEL>
			),
		})),
		...spacings.map((spacing) => ({
			heading: `A neutral bullet list - ${spacing} spacing`,
			component: () => (
				<GEL brand={brand}>
					<ExampleList type="bullet" look="neutral" spacing={spacing} />
				</GEL>
			),
		})),
		...spacings.map((spacing) => ({
			heading: `A link list - ${spacing} spacing`,
			component: () => (
				<GEL brand={brand}>
					<ExampleList type="link" spacing={spacing} />
				</GEL>
			),
		})),
		...spacings.map((spacing) => ({
			heading: `A tick list - ${spacing} spacing`,
			component: () => (
				<GEL brand={brand}>
					<ExampleList type="tick" spacing={spacing} />
				</GEL>
			),
		})),
		...spacings.map((spacing) => ({
			heading: `An ordered list - ${spacing} spacing`,
			component: () => (
				<GEL brand={brand}>
					<ExampleList type="ordered" spacing={spacing} />
				</GEL>
			),
		})),
		...spacings.map((spacing) => ({
			heading: `An unstyled list - ${spacing} spacing`,
			component: () => (
				<GEL brand={brand}>
					<ExampleList type="unstyled" spacing={spacing} />
				</GEL>
			),
		})),
		...spacings.map((spacing) => ({
			heading: `An icon list - ${spacing} spacing`,
			component: () => (
				<GEL brand={brand}>
					<ExampleList type="icon" icon={AndroidIcon} spacing={spacing} />
				</GEL>
			),
		})),
	];
}
