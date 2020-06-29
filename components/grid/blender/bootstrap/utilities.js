import { asArray, camelize } from './_utils';
import { breakpointInfix, mediaBreakpointUp } from './mixins/breakpoints';

const enableNegativeMargins = false;

const utilitiesMap = (spacing) => {
	// Create a new negative margins object, if necessary
	const spacingNegative =
		enableNegativeMargins &&
		Object.assign(
			{},
			...Object.entries(spacing).map(([key, val]) => val !== 0 && { [`n${key}`]: `-${val}` })
		);

	return [
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
			order: {
				property: 'order',
				values: [
					{ first: -1 },
					{ '0': 0 },
					{ '1': 1 },
					{ '2': 2 },
					{ '3': 3 },
					{ '4': 4 },
					{ '5': 5 },
					{ last: 6 },
				],
			},
		},
		{
			margin: {
				property: 'margin',
				className: 'm',
				values: Object.assign(spacing, { auto: 'auto' }),
			},
		},
		{
			'margin-x': {
				property: ['margin-right', 'margin-left'],
				className: 'mx',
				values: Object.assign(spacing, { auto: 'auto' }),
			},
		},
		{
			'margin-y': {
				property: ['margin-top', 'margin-bottom'],
				className: 'my',
				values: Object.assign(spacing, { auto: 'auto' }),
			},
		},
		{
			'margin-top': {
				property: 'margin-top',
				className: 'mt',
				values: Object.assign(spacing, { auto: 'auto' }),
			},
		},
		{
			'margin-right': {
				property: 'margin-right',
				className: 'mr',
				values: Object.assign(spacing, { auto: 'auto' }),
			},
		},
		{
			'margin-bottom': {
				property: 'margin-bottom',
				className: 'mb',
				values: Object.assign(spacing, { auto: 'auto' }),
			},
		},
		{
			'margin-left': {
				property: 'margin-left',
				className: 'ml',
				values: Object.assign(spacing, { auto: 'auto' }),
			},
		},
		{
			'negative-margin': {
				property: 'margin',
				className: 'm',
				values: spacingNegative,
			},
		},
		{
			'negative-margin-x': {
				property: ['margin-right', 'margin-left'],
				className: 'mx',
				values: spacingNegative,
			},
		},
		{
			'negative-margin-y': {
				property: ['margin-top', 'margin-bottom'],
				className: 'my',
				values: spacingNegative,
			},
		},
		{
			'negative-margin-top': {
				property: 'margin-top',
				className: 'mt',
				values: spacingNegative,
			},
		},
		{
			'negative-margin-right': {
				property: 'margin-right',
				className: 'mr',
				values: spacingNegative,
			},
		},
		{
			'negative-margin-bottom': {
				property: 'margin-bottom',
				className: 'mb',
				values: spacingNegative,
			},
		},
		{
			'negative-margin-left': {
				property: 'margin-left',
				className: 'ml',
				values: spacingNegative,
			},
		},
		{
			padding: {
				property: 'padding',
				className: 'p',
				values: spacing,
			},
		},
		{
			'padding-x': {
				property: ['padding-right', 'padding-left'],
				className: 'px',
				values: spacing,
			},
		},
		{
			'padding-y': {
				property: ['padding-top', 'padding-bottom'],
				className: 'py',
				values: spacing,
			},
		},
		{
			'padding-top': {
				property: 'padding-top',
				className: 'pt',
				values: spacing,
			},
		},
		{
			'padding-right': {
				property: 'padding-right',
				className: 'pr',
				values: spacing,
			},
		},
		{
			'padding-bottom': {
				property: 'padding-bottom',
				className: 'pb',
				values: spacing,
			},
		},
		{
			'padding-left': {
				property: 'padding-left',
				className: 'pl',
				values: spacing,
			},
		},
	];
};

export const utilities = (breakpoints, spacing) => ({
	...Object.assign(
		{},
		// Responsive classes (e.g. [{ xs: 0 }, { xsl: 576 }, { sm: 768 }, etc])
		// Iterate breakpoints
		...Object.entries(breakpoints).map(([bp, val]) => {
			let infix = breakpointInfix(bp);

			return mediaBreakpointUp(bp, val, {
				...Object.assign(
					{},
					// Iterate utilities
					...utilitiesMap(spacing).map((utility) => {
						let { property, className, values } = Object.values(utility)[0];

						// When desired className matches the property we provide a className
						className = className || property;

						let properties = (val) =>
							Object.assign(
								{},
								...asArray(property).map((p) => ({
									[camelize(p)]: `${val} !important`,
								}))
							);

						return (
							values &&
							Object.assign(
								{},
								...(Array.isArray(values)
									? // Iterate values (provided as array)
									  values.map((val) => {
											// Array values may be passed as strings or object literals
											let isString = typeof val === 'string';
											let key = `.${className}${infix}-${isString ? val : Object.keys(val)[0]}`;
											let value = properties(isString ? val : Object.values(val)[0]);

											return {
												[key]: value,
											};
									  })
									: // Iterate values (assume provided as object literal)
									  Object.entries(values).map(([key, val]) => ({
											[`.${className}${infix}-${key}`]: properties(val),
									  })))
							)
						);
					})
				),
			});
		})
	),
});
