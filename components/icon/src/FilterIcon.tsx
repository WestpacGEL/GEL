import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const FilterIcon = ({
	assistiveText = 'Filter',
	copyrightYear = '2023',
	size = 'medium',
	look = 'filled',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="TestIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		look={look}
		color={color}
		overrides={overrides}
		{...props}
	>
		{look === 'filled' ? (
			<Fragment>
				<path d="M4 8H2V6H4V8Z" fill="currentColor" />
				<path d="M2 12H4V10H2V12Z" fill="currentColor" />
				<path d="M2 16H4V14H2V16Z" fill="currentColor" />
				<path d="M6 12H22V10H6V12Z" fill="currentColor" />
				<path d="M22 16H6V14H22V16Z" fill="currentColor" />
				<path d="M6 6V8H22V6H6Z" fill="currentColor" />
				<path d="M19 21L16 18H22L19 21Z" fill="currentColor" />
			</Fragment>
		) : (
			<Fragment>
				<path d="M4 8H2V6H4V8Z" fill="currentColor" />
				<path d="M2 12H4V10H2V12Z" fill="currentColor" />
				<path d="M2 16H4V14H2V16Z" fill="currentColor" />
				<path d="M6 12H22V10H6V12Z" fill="currentColor" />
				<path d="M22 16H6V14H22V16Z" fill="currentColor" />
				<path d="M6 6V8H22V6H6Z" fill="currentColor" />
				<path d="M19 21L16 18H22L19 21Z" fill="currentColor" />
			</Fragment>
		)}
	</Icon>
);
