import { objectify, asArray, camelize } from './_utils';
import { breakpointInfix, mediaBreakpointUp } from './mixins/breakpoints';

const utilitiesMap = (spacing) => [
	{
		display: {
			property: 'display',
			className: 'd',
			values: [
				'none',
				'inline',
				'inline-block',
				'block',
				'table',
				'table-row',
				'table-cell',
				'flex',
				'inline-flex',
			],
			print: true,
		},
	},
	{
		order: {
			property: 'order',
			values: {
				first: -1,
				0: 0,
				1: 1,
				2: 2,
				3: 3,
				4: 4,
				5: 5,
				last: 6,
			},
		},
	},
	{
		flex: {
			property: 'flex',
			values: {
				fill: '1 1 auto',
			},
		},
	},
	{
		'flex-direction': {
			property: 'flex-direction',
			className: 'flex',
			values: ['row', 'column', 'row-reverse', 'column-reverse'],
		},
	},
	{
		'flex-grow': {
			property: 'flex-grow',
			className: 'flex',
			values: {
				'grow-0': 0,
				'grow-1': 1,
			},
		},
	},
	{
		'flex-shrink': {
			property: 'flex-shrink',
			className: 'flex',
			values: { 'shrink-0': 0, 'shrink-1': 1 },
		},
	},
	{
		'flex-wrap': {
			property: 'flex-wrap',
			className: 'flex',
			values: ['wrap', 'nowrap', 'wrap-reverse'],
		},
	},
	{
		'justify-content': {
			property: 'justify-content',
			values: {
				start: 'flex-start',
				end: 'flex-end',
				center: 'center',
				between: 'space-between',
				around: 'space-around',
				evenly: 'space-evenly',
			},
		},
	},
	{
		'align-items': {
			property: 'align-items',
			values: {
				start: 'flex-start',
				end: 'flex-end',
				center: 'center',
				baseline: 'baseline',
				stretch: 'stretch',
			},
		},
	},
	{
		'align-content': {
			property: 'align-content',
			values: {
				start: 'flex-start',
				end: 'flex-end',
				center: 'center',
				between: 'space-between',
				around: 'space-around',
				stretch: 'stretch',
			},
		},
	},
	{
		'align-self': {
			property: 'align-self',
			values: {
				auto: 'auto',
				start: 'flex-start',
				end: 'flex-end',
				center: 'center',
				baseline: 'baseline',
				stretch: 'stretch',
			},
		},
	},
	{
		margin: {
			property: 'margin',
			className: 'm',
			values: spacing,
			// values:
			//   map-merge(
			//     $spacers,
			//     (
			//       auto: auto,
			//     )
			//   ),
		},
	},
	{
		'margin-x': {
			property: ['margin-right', 'margin-left'],
			className: 'mx',
			values: spacing,
			// values:
			// map-merge(
			//   $spacers,
			//   (
			//     auto: auto,
			//   )
			// ),
		},
	},
	{
		'margin-y': {
			property: ['margin-top', 'margin-bottom'],
			className: 'my',
			values: spacing,
			// values:
			// map-merge(
			//   $spacers,
			//   (
			//     auto: auto,
			//   )
			// ),
		},
	},
	{
		'margin-top': {
			property: 'margin-top',
			className: 'mt',
			values: spacing,
			// values:
			// map-merge(
			//   $spacers,
			//   (
			//     auto: auto,
			//   )
			// ),
		},
	},
	{
		'margin-right': {
			property: 'margin-right',
			className: 'mr',
			values: spacing,
			// values:
			// map-merge(
			//   $spacers,
			//   (
			//     auto: auto,
			//   )
			// ),
		},
	},
	{
		'margin-bottom': {
			property: 'margin-bottom',
			className: 'mb',
			values: spacing,
			// values:
			// map-merge(
			//   $spacers,
			//   (
			//     auto: auto,
			//   )
			// ),
		},
	},
	{
		'margin-left': {
			property: 'margin-left',
			className: 'ml',
			values: spacing,
			// values:
			// map-merge(
			//   $spacers,
			//   (
			//     auto: auto,
			//   )
			// ),
		},
	},
	{
		'negative-margin': {
			property: 'margin',
			className: 'm',
			// values: Object.entries(spacing).map(([key, val]) => ({}))
			// values: $negative-spacers,
		},
	},
	{
		'negative-margin-x': {
			property: ['margin-right', 'margin-left'],
			className: 'mx',
			// values: $negative-spacers,
		},
	},
	{
		'negative-margin-y': {
			property: ['margin-top', 'margin-bottom'],
			className: 'my',
			// values: $negative-spacers,
		},
	},
	{
		'negative-margin-top': {
			property: 'margin-top',
			className: 'mt',
			// values: $negative-spacers,
		},
	},
	{
		'negative-margin-right': {
			property: 'margin-right',
			className: 'mr',
			// values: $negative-spacers,
		},
	},
	{
		'negative-margin-bottom': {
			property: 'margin-bottom',
			className: 'mb',
			// values: $negative-spacers,
		},
	},
	{
		'negative-margin-left': {
			property: 'margin-left',
			className: 'ml',
			// values: $negative-spacers,
		},
	},
	{
		padding: {
			property: 'padding',
			className: 'p',
			values: spacing,
			// values: $spacers,
		},
	},
	{
		'padding-x': {
			property: ['padding-right', 'padding-left'],
			className: 'px',
			values: spacing,
			// values: $spacers,
		},
	},
	{
		'padding-y': {
			property: ['padding-top', 'padding-bottom'],
			className: 'py',
			values: spacing,
			// values: $spacers,
		},
	},
	{
		'padding-top': {
			property: 'padding-top',
			className: 'pt',
			values: spacing,
			// values: $spacers,
		},
	},
	{
		'padding-right': {
			property: 'padding-right',
			className: 'pr',
			values: spacing,
			// values: $spacers,
		},
	},
	{
		'padding-bottom': {
			property: 'padding-bottom',
			className: 'pb',
			values: spacing,
			// values: $spacers,
		},
	},
	{
		'padding-left': {
			property: 'padding-left',
			className: 'pl',
			values: spacing,
			// values: $spacers,
		},
	},
];

export const utilities = (breakpoints, spacing) => ({
	...objectify(
		// Responsive classes (e.g. [{ xs: 0 }, { xsl: 576 }, { sm: 768 }, etc])
		// Iterate breakpoints
		Object.entries(breakpoints).map(([bp, val]) => {
			let infix = breakpointInfix(bp);

			return mediaBreakpointUp(bp, val, {
				...objectify(
					// Iterate utilities
					utilitiesMap(spacing).map((utility) => {
						let { property, className, values } = Object.values(utility)[0];

						className = className || property;

						let properties = (val) =>
							objectify(
								asArray(property).map((p) => ({
									[camelize(p)]: `${val} !important`,
								}))
							);

						return (
							values &&
							objectify(
								Array.isArray(values)
									? values.map((val) => {
											return {
												[`.${className}${infix}-${val}`]: properties(val),
											};
									  })
									: Object.entries(values).map(([key, val]) => ({
											[`.${className}${infix}-${key}`]: properties(val),
									  }))
							)
						);
					})
				),
			});
		})
	),
});
